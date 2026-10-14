import { PROFILE, STATS } from '../../data/content';
import { useUI } from '../../context/UIContext';
import { useVinyl } from '../../hooks/useVinyl';
import { cn } from '../../lib/cn';
import { CircularText } from '../ui/CircularText';
import { CoverArt } from '../cover/CoverArt';
import { WATERMARKS } from '../../data/content';

export function HeroSection({ onExploreWork }: { onExploreWork: () => void }) {
  const { openBooking } = useUI();
  const { playing, toggle } = useVinyl();

  return (
    <section id="hero" className="relative overflow-hidden border-b border-white/10 bg-navy px-4 py-12 text-white sm:px-8 sm:py-20">
      <CircularText tone="light" text={WATERMARKS[0]} className="-top-24 -left-24 hidden w-96 md:block" />
      <CircularText tone="light" text={WATERMARKS[1]} className="-right-28 -bottom-28 hidden w-[28rem] md:block" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 sm:mb-10">
          <button
            type="button"
            onClick={toggle}
            aria-pressed={playing}
            title={playing ? 'Pause music' : 'Play The 1975 ambient soundtrack'}
            className="flex cursor-pointer items-center gap-3.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-left shadow-lg transition-all hover:bg-white/15"
          >
            <span className={cn('flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/70 bg-black shadow-md', playing && 'animate-spin-slow ring-2 ring-yellow-400')}>
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white bg-red-600">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
            </span>
            <span>
              <span className="flex items-center gap-1.5 font-mono text-xs font-bold tracking-widest text-white/90 uppercase">
                <i className={cn('fa-solid fa-music text-[10px]', playing ? 'animate-bounce text-yellow-300' : 'text-white/60')} aria-hidden="true" />
                THE 1975
              </span>
              <span className="block font-mono text-[10px] text-white/70">{playing ? 'Playing Ambient Mix ♪' : 'Click to Play Audio'}</span>
            </span>
          </button>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs text-white/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
            <span>Available for 2026/2027 Campaigns</span>
          </span>
        </div>

        <div className="flex flex-col items-center text-center">
          <span className="mb-4 block font-mono text-xs tracking-[0.25em] text-white/70 uppercase sm:text-sm">
            Digital Storyteller · Content Creator · Influencer
          </span>

          {/* The cover collage: scales with its own width (see CoverArt) */}
          <div className="relative aspect-[16/9.6] w-full max-w-[1100px]" style={{ containerType: 'inline-size' }}>
            <CoverArt />
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed font-normal text-white/90 sm:text-base">
            Hi, I'm <strong className="font-bold text-white">{PROFILE.name}</strong> ({PROFILE.handle}). Crafting high-retention lifestyle, beauty,
            and tech stories that convert. Over {STATS[0].value} engaged followers across Instagram, TikTok, and YouTube.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button type="button" onClick={() => openBooking()} className="flex cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-navy shadow-xl transition-all hover:bg-slate-100 sm:text-sm">
              <i className="fa-regular fa-paper-plane text-xs" aria-hidden="true" />
              <span>Book Collaboration</span>
            </button>
            <button type="button" onClick={onExploreWork} className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-white/25 sm:text-sm">
              <span>Explore Selected Works</span>
              <i className="fa-solid fa-arrow-down text-xs" aria-hidden="true" />
            </button>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-condensed block text-2xl tracking-normal text-white sm:text-4xl">{s.value}</dd>
              <dt className="text-[11px] font-medium tracking-wider text-white/70 uppercase sm:text-xs">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
