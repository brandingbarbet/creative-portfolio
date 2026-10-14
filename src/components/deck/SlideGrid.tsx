import { SLIDES } from '../../data/content';
import { useUI } from '../../context/UIContext';
import { SLIDE_COMPONENTS } from './slides';

/** Two-column board of presentation panels (1,3,5,7,9 left · 2,4,6,8,10 right). */
export function SlideGrid() {
  const { present } = useUI();
  return (
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-2 md:grid-cols-2 md:gap-3" data-purpose="portfolio-deck">
      {SLIDES.map((s) => {
        const Slide = SLIDE_COMPONENTS[s.id];
        const n = String(s.id).padStart(2, '0');
        return (
          <div key={s.id} id={`slide-${s.id}`} className="group/slide relative scroll-mt-20">
            <Slide onActivate={() => present(s.id)} />
            <button
              type="button"
              onClick={() => present(s.id)}
              aria-label={`Expand slide ${n}: ${s.title}`}
              className="no-print absolute top-3 right-3 z-30 cursor-pointer rounded-md bg-black/40 px-2 py-1 font-mono text-[11px] text-white opacity-0 transition-opacity group-hover/slide:opacity-100 hover:bg-black/70 focus-visible:opacity-100"
            >
              <i className="fa-solid fa-expand mr-1" aria-hidden="true" /> Expand {n}
            </button>
          </div>
        );
      })}
    </div>
  );
}
