import { useEffect, useId, useRef } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from 'react';
import { cn } from '../../lib/cn';

/** Open modals, bottom → top. Only the top-most one reacts to the keyboard. */
const stack: string[] = [];

interface ModalProps {
  onClose: () => void;
  label: string;
  /** Extra keyboard handling (arrow keys etc.); only fires when this modal is on top. */
  onKey?: (e: KeyboardEvent) => void;
  /** Layer: presentation sits below detail modals that open from it. */
  layer?: 'base' | 'top';
  backdrop?: string;
  className?: string;
  children: ReactNode;
}

export function Modal({ onClose, label, onKey, layer = 'top', backdrop = 'bg-black/80', className, children }: ModalProps) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const handlers = useRef({ onClose, onKey });
  handlers.current = { onClose, onKey };

  // keyboard (Esc + custom) for the top-most modal
  useEffect(() => {
    stack.push(id);
    const onKeyDown = (e: KeyboardEvent) => {
      if (stack[stack.length - 1] !== id) return;
      if (e.key === 'Escape') handlers.current.onClose();
      else handlers.current.onKey?.(e);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      const i = stack.indexOf(id);
      if (i >= 0) stack.splice(i, 1);
    };
  }, [id]);

  // scroll lock + focus management
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, []);

  // keep Tab inside the dialog
  const trapTab = (e: ReactKeyboardEvent) => {
    if (e.key !== 'Tab' || !ref.current) return;
    const items = ref.current.querySelectorAll<HTMLElement>(
      'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])',
    );
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      onKeyDown={trapTab}
      onClick={onClose}
      className={cn(
        'animate-fade-in fixed inset-0 flex items-center justify-center p-4 outline-none backdrop-blur-md',
        layer === 'top' ? 'z-[60]' : 'z-50',
        backdrop,
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Content panel that swallows backdrop clicks. */
export function ModalPanel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div onClick={(e) => e.stopPropagation()} className={className}>
      {children}
    </div>
  );
}

export function CloseButton({ onClose, className }: { onClose: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close"
      title="Close (Esc)"
      className={cn('flex cursor-pointer items-center justify-center rounded-full transition-colors', className)}
    >
      <i className="fa-solid fa-xmark text-sm" aria-hidden="true" />
    </button>
  );
}

export function useTitleId() {
  return useId();
}
