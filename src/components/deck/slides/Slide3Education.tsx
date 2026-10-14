import { EDUCATION, WATERMARKS } from '../../../data/content';
import { IMAGES } from '../../../data/images';
import { CircularText } from '../../ui/CircularText';
import { Img } from '../../ui/Img';
import { SlideFrame } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

const FRAMES = [
  { src: IMAGES.eduGraduation, label: 'Graduation Day', cls: 'top-[2cqw] left-[-1cqw] w-[16cqw] -rotate-12', img: 'h-[13.5cqw]' },
  { src: IMAGES.eduClass20, label: "Class of '20", cls: 'top-[-1cqw] right-[0cqw] w-[16cqw] rotate-6', img: 'h-[13.5cqw]' },
  { src: IMAGES.eduYard, label: 'Harvard Yard', cls: 'bottom-[0cqw] right-[3cqw] w-[18cqw] -rotate-3 shadow-2xl', img: 'h-[15.5cqw]' },
];

export function Slide3Education({ onActivate }: SlideProps) {
  return (
    <SlideFrame
      theme="navy"
      purpose="slide-education"
      onActivate={onActivate}
      backdrop={<CircularText tone="light" text={WATERMARKS[1]} className="-bottom-[10cqw] -left-[9cqw] w-[30cqw]" />}
    >
      <div className="grid h-full grid-cols-12 items-center gap-[2.4cqw]">
        <div className="col-span-4">
          <h2 className="fs-h2 leading-tight font-extrabold tracking-tight">Education<br />Background</h2>
        </div>

        <div className="relative col-span-4 h-[33cqw]">
          {FRAMES.map((f) => (
            <figure
              key={f.label}
              className={`absolute rounded-[0.5cqw] bg-white p-[0.9cqw] pb-[2.6cqw] shadow-xl transition-transform duration-200 hover:z-30 hover:scale-110 ${f.cls}`}
            >
              <Img alt={f.label} src={f.src} className={`w-full rounded-[0.3cqw] object-cover ${f.img}`} />
              <figcaption className="fs-micro mt-[0.6cqw] text-center font-mono text-slate-700">{f.label}</figcaption>
            </figure>
          ))}
        </div>

        <ol className="col-span-4 flex flex-col justify-center gap-[3.4cqw] pl-[1.4cqw]">
          {EDUCATION.map((e, i) => (
            <li key={e.year} className="relative border-l-2 border-white/40 pl-[2.6cqw]">
              <span aria-hidden="true" className="absolute top-[0.6cqw] -left-[0.95cqw] h-[1.5cqw] w-[1.5cqw] rounded-full border-2 border-navy bg-white" />
              <span className="fs-num block font-bold tracking-tight">{e.year}</span>
              {i === 0 && <span className="fs-label block font-semibold text-white/90">{e.school}</span>}
              <p className={`fs-body mt-[0.3cqw] ${i === 0 ? 'text-white/70' : 'text-white/80'}`}>{e.degree}</p>
            </li>
          ))}
        </ol>
      </div>
    </SlideFrame>
  );
}
