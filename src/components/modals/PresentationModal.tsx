import { SLIDES } from '../../data/content';
import { SLIDE_COMPONENTS } from '../deck/slides';
import { Modal, ModalPanel } from '../ui/Modal';

interface Props {
  slide: number;
  onNavigate: (n: number) => void;
  onClose: () => void;
}

const LAST = SLIDES.length;

export function PresentationModal({ slide, onNavigate, onClose }: Props) {
  const meta = SLIDES.find((s) => s.id === slide);
  const Slide = SLIDE_COMPONENTS[slide];
  if (!meta || !Slide) return null;

  const go = (n: number) => onNavigate(Math.min(LAST, Math.max(1, n)));
  const arrow =
    'flex cursor-pointer items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 transition-colors hover:bg-white/20 disabled:pointer-events-none disabled:opacity-30';

  return (
    <Modal
      layer="base"
      label={`Slide ${slide} of ${LAST}: ${meta.title}`}
      backdrop="bg-black/95 backdrop-blur-xl"
      className="flex-col justify-between p-3 sm:p-6"
      onClose={onClose}
      onKey={(e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          go(slide + 1);
        } else if (e.key === 'ArrowLeft') go(slide - 1);
        else if (e.key === 'Home') go(1);
        else if (e.key === 'End') go(LAST);
      }}
    >
      <ModalPanel className="flex w-full max-w-6xl items-center justify-between border-b border-white/10 pt-1 pb-3 text-white">
        <div className="flex items-center gap-3">
          <span className="font-body text-sm font-extrabold tracking-wider text-blue-400 uppercase">Hannah Elise Media Kit</span>
          <span className="hidden text-white/30 sm:inline">·</span>
          <span className="hidden text-xs font-medium text-white/80 sm:inline">{meta.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-xs text-white/90">
            {String(slide).padStart(2, '0')} / {LAST}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Exit presentation"
            title="Exit Presentation (Esc)"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-xs transition-colors hover:bg-white/20"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>
      </ModalPanel>

      {/* Slide fits both width and height of the viewport at 16:9.6 */}
      <ModalPanel className="my-auto w-full px-2 py-2 sm:px-4" >
        <div key={slide} className="animate-fade-in mx-auto overflow-hidden rounded-xl border border-white/10 shadow-2xl" style={{ width: 'min(100%, calc((100dvh - 190px) * 1.6667))' }}>
          <Slide />
        </div>
      </ModalPanel>

      <ModalPanel className="flex w-full max-w-4xl flex-col items-center gap-2 pt-2">
        <div className="flex w-full items-center justify-between px-4 text-xs text-white">
          <button type="button" disabled={slide === 1} onClick={() => go(slide - 1)} className={arrow}>
            <i className="fa-solid fa-arrow-left text-[11px]" aria-hidden="true" />
            <span className="hidden sm:inline">Previous Slide</span>
          </button>

          <div className="flex max-w-[60vw] items-center gap-1.5 overflow-x-auto py-1">
            {SLIDES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                title={s.title}
                aria-label={`Go to slide ${s.id}: ${s.title}`}
                aria-current={slide === s.id}
                className={`h-2 cursor-pointer rounded-full transition-all ${slide === s.id ? 'w-7 bg-blue-400' : 'w-2 bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>

          <button type="button" disabled={slide === LAST} onClick={() => go(slide + 1)} className={arrow}>
            <span className="hidden sm:inline">Next Slide</span>
            <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
          </button>
        </div>
        <div className="text-center font-mono text-[10px] text-white/40">Use ← and → keys or Spacebar to advance slides · Press Esc to exit</div>
      </ModalPanel>
    </Modal>
  );
}
