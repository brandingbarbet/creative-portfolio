import { BRAND_PILLS, BRAND_WORDMARKS } from '../../data/content';
import { IMAGES } from '../../data/images';
import { useUI } from '../../context/UIContext';
import { CircularText } from '../ui/CircularText';
import { Img } from '../ui/Img';
import { SectionHeader } from './SectionHeader';

export function BrandsSection() {
  const { openReel } = useUI();
  return (
    <section id="brands" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <CircularText tone="light" text="editing • visuals • vibing • " className="-top-24 -right-20 hidden w-80 md:block" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/15 pb-6 md:flex-row md:items-end">
          <SectionHeader tone="dark" face="condensed" kicker="05. Brand Partnerships & Sponsored Content">BRANDS</SectionHeader>
          <div className="flex items-center gap-6 text-white/90">
            <span className="font-serif text-2xl font-semibold tracking-wide italic">{BRAND_WORDMARKS.serif}</span>
            <span className="rounded-md bg-white/15 px-3 py-1 font-mono text-sm font-bold tracking-widest uppercase backdrop-blur-sm">{BRAND_WORDMARKS.mono}</span>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {IMAGES.brandReels.map((r, i) => (
            <button key={r.id} type="button" onClick={() => openReel(i)} aria-label={`Play ${r.brand}: ${r.title}`} className="group flex cursor-pointer flex-col text-left">
              <span className="relative block aspect-9/16 w-full overflow-hidden rounded-2xl border-2 border-white/25 bg-slate-900 shadow-xl transition-all duration-300 group-hover:scale-[1.03] group-hover:border-white">
                <Img alt={r.title} src={r.url} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/15">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-sm shadow-xl backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-navy sm:h-12 sm:w-12">
                    <i className="fa-solid fa-play pl-0.5" aria-hidden="true" />
                  </span>
                </span>
                <span className="absolute top-2.5 left-2.5 rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] font-bold uppercase backdrop-blur-sm">{r.brand}</span>
                <span className="absolute right-2.5 bottom-2.5 rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white/90">{r.duration}</span>
              </span>
              <span className="mt-3 block px-1">
                <span className="line-clamp-1 block text-xs font-bold transition-colors group-hover:text-yellow-300">{r.title}</span>
                <span className="mt-1 flex items-center justify-between font-mono text-[11px] text-white/70">
                  <span>{r.views} Views</span>
                  <span className="text-pink-300"><i className="fa-solid fa-heart mr-1 text-[9px]" aria-hidden="true" />{r.likes}</span>
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-8">
          {BRAND_PILLS.map((b) => (
            <span key={b} className="rounded-full bg-white px-6 py-2 text-xs font-extrabold tracking-wider text-navy shadow-md sm:text-sm">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
