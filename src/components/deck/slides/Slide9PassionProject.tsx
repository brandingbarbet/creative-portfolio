import { PASSION, WATERMARKS } from '../../../data/content';
import { IMAGES } from '../../../data/images';
import { useUI } from '../../../context/UIContext';
import { CircularText } from '../../ui/CircularText';
import { Img } from '../../ui/Img';
import { SlideFrame, stop } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

export function Slide9PassionProject({ onActivate }: SlideProps) {
  const { openCaseStudy } = useUI();
  return (
    <SlideFrame
      theme="navy"
      purpose="slide-passion-project"
      onActivate={onActivate}
      backdrop={
        <>
          <CircularText tone="light" text={WATERMARKS[1]} className="-top-[10cqw] -right-[9cqw] w-[30cqw]" />
          <CircularText tone="light" text={WATERMARKS[2]} className="-bottom-[11cqw] -left-[9cqw] w-[30cqw]" />
        </>
      }
    >
      <h2 className="fs-h2 font-condensed tracking-normal uppercase">PASSION PROJECT</h2>

      <div className="grid grid-cols-12 items-center gap-[2.4cqw]">
        <div className="col-span-7 flex flex-col items-center transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="relative w-full rounded-t-[1.6cqw] border-2 border-slate-700 bg-[#1a1a1a] p-[1.2cqw] shadow-2xl">
            <div className="mx-auto mb-[0.6cqw] h-[0.9cqw] w-[0.9cqw] rounded-full bg-slate-600" />
            <div className="group/laptop relative aspect-16/10 overflow-hidden rounded-[0.5cqw] bg-slate-900">
              <Img alt="Passion project concept" src={IMAGES.laptopConcept} className="h-full w-full object-cover transition-transform duration-300 group-hover/laptop:scale-105" />
              <div className="fs-micro absolute bottom-[1cqw] left-[1cqw] flex items-center gap-[0.7cqw] rounded bg-black/60 px-[1cqw] py-[0.3cqw] font-mono text-white backdrop-blur-sm">
                <span className="h-[0.8cqw] w-[0.8cqw] animate-pulse rounded-full bg-red-500" aria-hidden="true" />
                {PASSION.caption}
              </div>
            </div>
          </div>
          <div className="relative h-[1.8cqw] w-[104%] rounded-b-[0.8cqw] border-t border-slate-400 bg-slate-300 shadow-md">
            <div className="mx-auto h-[0.6cqw] w-[9cqw] rounded-b bg-slate-400" />
          </div>
        </div>

        <div className="col-span-5 pl-[0.8cqw]">
          <span className="fs-small mb-[0.4cqw] block font-semibold tracking-widest text-white/60 uppercase">Case Study</span>
          <h3 className="fs-sub font-extrabold tracking-wide uppercase">{PASSION.title}</h3>
          <p className="fs-small mt-[1.2cqw] text-white/80">{PASSION.slideBlurb}</p>
          <button
            type="button"
            onClick={stop(openCaseStudy)}
            className="fs-micro mt-[1.8cqw] inline-flex cursor-pointer items-center gap-[0.9cqw] rounded border border-white/30 bg-white/10 px-[1.5cqw] py-[0.6cqw] font-semibold transition-colors hover:bg-white/20"
          >
            <span>Explore Moodboard &amp; Stills</span>
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </SlideFrame>
  );
}
