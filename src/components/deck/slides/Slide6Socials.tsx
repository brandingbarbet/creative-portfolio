import { SOCIALS, WATERMARKS } from '../../../data/content';
import { IMAGES } from '../../../data/images';
import { CircularText } from '../../ui/CircularText';
import { Img } from '../../ui/Img';
import { SlideFrame } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

const ICON_BG = ['bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600', 'bg-black', 'bg-red-600'];

export function Slide6Socials({ onActivate }: SlideProps) {
  const side = 'relative aspect-9/16 w-[14cqw] overflow-hidden rounded-[1.6cqw] border-2 border-slate-700 bg-slate-900 shadow-lg transition-transform group-hover:-translate-y-1';
  return (
    <SlideFrame
      theme="light"
      purpose="slide-socials-stats"
      onActivate={onActivate}
      backdrop={<CircularText text={WATERMARKS[1]} className="-top-[10cqw] -right-[8cqw] w-[30cqw]" />}
    >
      <h2 className="fs-h1 font-condensed leading-none tracking-normal text-navy uppercase">SOCIALS ACCOUNTS</h2>

      <div className="grid grid-cols-12 items-center gap-[2cqw]">
        <div className="col-span-7 flex items-center justify-center gap-[1.4cqw]">
          <div className={side}>
            <Img alt="Social post 1" src={IMAGES.socialsMockup1} className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <i className="fa-regular fa-circle-play fs-num text-white" aria-hidden="true" />
            </div>
          </div>
          <div className="relative aspect-9/18 w-[16.5cqw] -translate-y-[1.2cqw] overflow-hidden rounded-[2.2cqw] border-[0.55cqw] border-slate-800 bg-black shadow-2xl transition-transform group-hover:-translate-y-[2cqw]">
            <div className="absolute top-[0.5cqw] left-1/2 z-10 h-[0.7cqw] w-[4.5cqw] -translate-x-1/2 rounded-full bg-slate-700" />
            <Img alt="Social post 2" src={IMAGES.socialsMockup2} className="h-full w-full object-cover" />
          </div>
          <div className={side}>
            <Img alt="Social post 3" src={IMAGES.socialsMockup3} className="h-full w-full object-cover" />
            <span className="fs-micro absolute right-[0.6cqw] bottom-[0.6cqw] rounded bg-black/60 px-[0.6cqw] font-mono text-white">0:45</span>
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-center gap-[2.2cqw] pl-[0.8cqw]">
          {SOCIALS.map((s) => (
            <div key={s.platform} className="flex items-start gap-[1.2cqw]">
              <span className="mt-[0.7cqw] h-[1.1cqw] w-[1.1cqw] shrink-0 rounded-full bg-navy" aria-hidden="true" />
              <div>
                <span className="fs-label block font-extrabold tracking-wider text-navy uppercase">{s.platform}</span>
                <span className="fs-label block font-bold text-slate-700">{s.stat}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-[1.6cqw] pt-[0.8cqw]">
            {SOCIALS.map((s, i) => (
              <a key={s.platform} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.platform} onClick={(e) => e.stopPropagation()}
                className={`fs-label flex h-[4.2cqw] w-[4.2cqw] items-center justify-center rounded-full text-white shadow transition-transform hover:scale-110 ${ICON_BG[i]}`}>
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
