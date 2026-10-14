import { PROJECT_SPOTLIGHT } from '../../../data/content';
import { IMAGES } from '../../../data/images';
import { useUI } from '../../../context/UIContext';
import { Img } from '../../ui/Img';
import { SlideFrame, stop } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

export function Slide5PreviousProjects({ onActivate }: SlideProps) {
  const { openProject } = useUI();
  return (
    <SlideFrame theme="navy" purpose="slide-previous-projects" onActivate={onActivate} bodyClass="p-[4cqw]!">
      <div className="grid h-full grid-cols-12 items-stretch gap-[2.4cqw]">
        <div className="col-span-5 flex flex-col justify-between">
          <div>
            <span className="fs-small mb-[0.4cqw] block font-semibold tracking-wider text-white/60 uppercase">Client Spotlight</span>
            <h3 className="fs-sub leading-tight font-bold">Social Media For<br />{PROJECT_SPOTLIGHT.client}</h3>
            <ul className="fs-small mt-[1.6cqw] list-inside list-disc space-y-[0.8cqw] text-white/80">
              {PROJECT_SPOTLIGHT.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <h2 className="fs-h1 font-condensed mt-[2cqw] tracking-normal uppercase">PREVIOUS<br />PROJECTS</h2>
        </div>

        <div className="col-span-7 grid grid-cols-3 content-center gap-[0.8cqw]">
          {IMAGES.projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={stop(() => openProject(i))}
              title={`View ${p.title}`}
              aria-label={`View ${p.title}`}
              className="group/item relative aspect-square cursor-pointer overflow-hidden rounded-[0.6cqw] border border-white/20 transition-all hover:border-white/60"
            >
              <Img alt={p.title} src={p.url} className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-[1.15]" />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover/item:bg-black/30 group-hover/item:opacity-100">
                <i className="fa-solid fa-magnifying-glass-plus fs-label text-white" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
