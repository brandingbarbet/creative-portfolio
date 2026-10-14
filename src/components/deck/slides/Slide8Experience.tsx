import { EXPERIENCE, WATERMARKS } from '../../../data/content';
import { CircularText } from '../../ui/CircularText';
import { SlideFrame } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

export function Slide8Experience({ onActivate }: SlideProps) {
  return (
    <SlideFrame
      theme="light"
      purpose="slide-experience"
      onActivate={onActivate}
      bodyClass="justify-start! gap-[7cqw]"
      backdrop={<CircularText text={WATERMARKS[1]} className="-top-[11cqw] -right-[9cqw] w-[30cqw]" />}
    >
      <h2 className="fs-h1 font-condensed leading-none tracking-normal text-navy uppercase">WORKING<br />EXPERIENCE</h2>

      <div className="grid grid-cols-3 gap-[2.2cqw] pt-[1cqw]">
        {EXPERIENCE.map((e, i) => (
          <div key={e.year} className={`flex flex-col transition-transform group-hover:-translate-y-0.5 ${i > 0 ? 'border-l border-slate-300 pl-[1.8cqw]' : ''}`}>
            <span className={`${e.year.length > 4 ? 'fs-sub' : 'fs-num'} font-black tracking-tight text-navy`}>{e.year}</span>
            <span className="fs-small mt-[0.6cqw] block font-extrabold tracking-wider text-navy uppercase">
              {e.roleLines.map((l) => <span key={l} className="block">{l}</span>)}
            </span>
            <p className="fs-micro mt-[1.2cqw] font-normal text-slate-500" style={{ lineHeight: 1.6 }}>{e.description}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
