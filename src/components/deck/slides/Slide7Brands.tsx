import { BRAND_PILLS, BRAND_WORDMARKS, WATERMARKS } from '../../../data/content';
import { IMAGES } from '../../../data/images';
import { useUI } from '../../../context/UIContext';
import { CircularText } from '../../ui/CircularText';
import { Img } from '../../ui/Img';
import { SlideFrame, stop } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

export function Slide7Brands({ onActivate }: SlideProps) {
  const { openReel } = useUI();
  return (
    <SlideFrame
      theme="navy"
      purpose="slide-brands"
      onActivate={onActivate}
      bodyClass="p-[4cqw]!"
      backdrop={<CircularText tone="light" text={WATERMARKS[2]} className="-top-[11cqw] -right-[8cqw] w-[30cqw]" />}
    >
      <div className="flex items-center justify-between">
        <h2 className="fs-h1 font-condensed tracking-normal uppercase">BRANDS</h2>
        <div className="flex items-center gap-[3cqw] text-white/90">
          <span className="fs-sub font-serif font-semibold tracking-wide italic">{BRAND_WORDMARKS.serif}</span>
          <span className="fs-label rounded bg-white/10 px-[1.2cqw] py-[0.3cqw] font-mono font-bold tracking-widest uppercase">{BRAND_WORDMARKS.mono}</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-[1.6cqw] py-[1cqw]">
        {IMAGES.brandReels.map((r, i) => (
          <button
            key={r.id}
            type="button"
            onClick={stop(() => openReel(i))}
            title={`Preview ${r.brand}: ${r.title}`}
            aria-label={`Preview ${r.brand}: ${r.title}`}
            className="group/reel relative aspect-9/17 w-full cursor-pointer overflow-hidden rounded-[1.6cqw] border-2 border-white/20 bg-slate-800 shadow-lg transition-all hover:scale-105 hover:border-white/80"
          >
            <Img alt={r.title} src={r.url} className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover/reel:bg-black/10">
              <span className="flex h-[3.4cqw] w-[3.4cqw] items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition-all group-hover/reel:scale-110 group-hover/reel:bg-white/80">
                <i className="fa-solid fa-play fs-micro pl-[0.2cqw] text-white group-hover/reel:text-navy" aria-hidden="true" />
              </span>
            </span>
            <span className="fs-micro absolute right-[0.6cqw] bottom-[0.6cqw] rounded bg-black/60 px-[0.6cqw] font-mono text-white/90">{r.duration}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-around">
        {BRAND_PILLS.map((b) => (
          <span key={b} className="fs-small rounded-full bg-white px-[2.4cqw] py-[0.6cqw] font-bold text-navy shadow transition-colors hover:bg-slate-100">{b}</span>
        ))}
      </div>
    </SlideFrame>
  );
}
