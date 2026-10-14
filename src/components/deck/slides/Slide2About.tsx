import { PROFILE, WATERMARKS } from '../../../data/content';
import { IMAGES } from '../../../data/images';
import { CircularText } from '../../ui/CircularText';
import { Img } from '../../ui/Img';
import { SlideFrame } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

export function Slide2About({ onActivate }: SlideProps) {
  return (
    <SlideFrame
      theme="light"
      purpose="slide-about"
      onActivate={onActivate}
      bodyClass="flex-row! items-center"
      backdrop={
        <>
          <CircularText text={WATERMARKS[0]} className="-top-[9cqw] -left-[9cqw] w-[30cqw]" />
          <CircularText text={WATERMARKS[2]} className="-right-[8cqw] -bottom-[10cqw] w-[30cqw]" />
        </>
      }
    >
      <div className="flex h-full w-5/12 flex-col items-center justify-end pr-[0.6cqw]">
        <div className="h-[41cqw] w-[31cqw] overflow-hidden rounded-[2cqw] border-2 border-white shadow-lg transition-shadow group-hover:shadow-xl">
          <Img alt="Hannah Elise seated portrait" src={IMAGES.aboutPhoto} className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]" />
        </div>
        <div className="fs-micro mt-[1cqw] text-center font-bold tracking-widest text-slate-400 uppercase">{PROFILE.established}</div>
      </div>

      <div className="flex w-7/12 flex-col justify-center pl-[3cqw]">
        <h2 className="fs-h1 mb-[1.6cqw] font-extrabold tracking-tight text-navy">About me</h2>
        <p className="fs-label mb-[1.6cqw] text-slate-600">
          I'm <strong className="font-semibold text-navy">{PROFILE.name}</strong>, {PROFILE.bio[0]}
        </p>
        <p className="fs-body text-slate-500">{PROFILE.bio[1]}</p>
      </div>
    </SlideFrame>
  );
}
