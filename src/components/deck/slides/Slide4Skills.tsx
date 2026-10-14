import { TOOLS, WATERMARKS } from '../../../data/content';
import { IMAGES } from '../../../data/images';
import { CircularText } from '../../ui/CircularText';
import { AdobeMark } from '../../ui/AdobeMark';
import { Img } from '../../ui/Img';
import { SlideFrame } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

export function Slide4Skills({ onActivate }: SlideProps) {
  return (
    <SlideFrame
      theme="light"
      purpose="slide-skills"
      onActivate={onActivate}
      backdrop={
        <>
          <CircularText text={WATERMARKS[1]} className="-top-[10cqw] -right-[8cqw] w-[30cqw]" />
          <CircularText text={WATERMARKS[2]} className="-bottom-[11cqw] -left-[9cqw] w-[30cqw]" />
        </>
      }
    >
      <div className="flex items-start justify-between">
        <h2 className="fs-h2 leading-tight font-extrabold tracking-tight text-navy">Skills &amp;<br />Expertise</h2>

        <div className="flex items-center gap-[1.6cqw]">
          <div className="flex items-center gap-[0.8cqw] rounded-[1cqw] border border-slate-200 bg-white px-[1.6cqw] py-[0.8cqw] shadow-sm">
            <i className="fa-brands fa-slack fs-sub" style={{ color: '#ECB22E' }} aria-hidden="true" />
            <span className="fs-body font-bold text-slate-700">slack</span>
          </div>
          <div className="fs-body flex items-center rounded-[1cqw] bg-[#00C4CC] px-[1.6cqw] py-[0.8cqw] font-extrabold text-white shadow-sm">Canva</div>
          <div className="fs-label flex h-[4.2cqw] w-[4.2cqw] items-center justify-center rounded-[1cqw] bg-red-600 font-black text-white shadow-sm">
            <AdobeMark className="h-[55%] w-[55%]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 items-center gap-[1cqw] py-[1cqw]">
        <div className="col-span-4 flex flex-col gap-[1cqw]">
          <div className="mb-[0.4cqw] flex items-center gap-[1cqw]">
            {[TOOLS[0], TOOLS[1]].map((t) => (
              <div key={t.name} title={t.name} className="fs-body flex h-[4.8cqw] w-[4.8cqw] items-center justify-center rounded-[1cqw] border font-bold shadow-sm" style={{ background: t.bg, color: t.fg, borderColor: `${t.fg}66` }}>
                {t.short}
              </div>
            ))}
          </div>
          <h3 className="fs-sub font-bold text-navy">Social Media<br />Marketing &amp;<br />Strategy</h3>
        </div>

        <div className="col-span-4 flex justify-center">
          <div className="h-[22cqw] w-[22cqw] overflow-hidden rounded-full border-[0.6cqw] border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
            <Img alt="Hannah Elise holding a camera" src={IMAGES.skillsCamera} className="h-full w-full object-cover object-top" />
          </div>
        </div>

        <div className="col-span-4 flex flex-col items-start justify-center pl-[1cqw]">
          <h3 className="fs-sub mb-[0.6cqw] font-bold text-navy">Brand Collaboration<br />&amp; Campaign<br />Creation</h3>
          <span className="fs-small inline-flex items-center font-medium text-slate-500">
            <i className="fa-solid fa-check mr-[0.8cqw] text-green-600" aria-hidden="true" /> End-to-end execution
          </span>
        </div>
      </div>
    </SlideFrame>
  );
}
