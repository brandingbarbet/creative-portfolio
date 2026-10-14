import type { ReactNode } from 'react';
import type { SlideTheme } from '../../data/content';
import { cn } from '../../lib/cn';

export interface SlideProps {
  /** Click anywhere on the slide (used by the grid to open presentation mode). */
  onActivate?: () => void;
}

interface FrameProps extends SlideProps {
  theme: SlideTheme;
  purpose: string;
  /** Thin lavender border accent (contact slide). */
  lavender?: boolean;
  /** Skip the padded flex body (cover draws edge-to-edge). */
  bare?: boolean;
  bodyClass?: string;
  /** Decorative layers rendered behind the body (watermarks). */
  backdrop?: ReactNode;
  children: ReactNode;
}

/** Shared presentation-panel shell: 16:9.6 size-container, themed background. */
export function SlideFrame({ theme, purpose, onActivate, lavender, bare, bodyClass, backdrop, children }: FrameProps) {
  return (
    <article
      onClick={onActivate}
      data-purpose={purpose}
      className={cn(
        'slide group',
        theme === 'navy' ? 'bg-navy text-white' : 'bg-paper text-slate-800',
        lavender && 'border border-purple-300/60',
        onActivate && 'cursor-pointer',
      )}
    >
      {backdrop}
      {bare ? children : <div className={cn('slide-body', bodyClass)}>{children}</div>}
    </article>
  );
}

/** Stops a nested control from also triggering the slide's own click. */
export const stop = (fn: () => void) => (e: { stopPropagation: () => void; preventDefault?: () => void }) => {
  e.stopPropagation();
  fn();
};
