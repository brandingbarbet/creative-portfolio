import type { CSSProperties, MouseEvent } from 'react';
import { COVER_TAGS } from '../../data/content';
import { IMAGES } from '../../data/images';
import { useVinyl } from '../../hooks/useVinyl';
import { cn } from '../../lib/cn';
import { Img } from '../ui/Img';

/**
 * Scrapbook cover composition (title, arched portrait, floating stickers,
 * handwritten notes) ported from creative_portfolio_hero.html.
 *
 * Everything is sized in `em`, where 1em = 1% of the nearest size-container's
 * width (the slide, or the hero stage). The stage is therefore 100em wide.
 */

const BUTTERFLY =
  'M12,2C12,2 10.5,6.5 8,8C5.5,9.5 2,8.5 2,12C2,15.5 5,16 7,16.5C9,17 11,20 12,22C13,20 15,17 17,16.5C19,16 22,15.5 22,12C22,8.5 18.5,9.5 16,8C13.5,6.5 12,2 12,2Z';
const SPARKLE = 'M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z';

const rot = (deg: number): CSSProperties => ({ ['--rot' as string]: `${deg}deg` });

const sticker = 'drop-shadow-[0_0.9em_0.9em_rgba(0,0,0,0.4)] transition-[scale] duration-300 hover:scale-[1.08]';

type Note = {
  text: (typeof COVER_TAGS)[number];
  pos: string;
  tilt: number;
  arrow: { d: string; head: string; flip: string };
};

/** Handwritten labels with dashed arrows pointing at the portrait. */
const NOTES: Note[] = [
  {
    text: 'social media',
    pos: 'left-[19em] top-[23em]',
    tilt: -8,
    arrow: { d: 'M 10,10 Q 50,5 85,45', head: 'M 75,42 L 87,47 L 85,33', flip: 'rotate-12' },
  },
  {
    text: 'video editor',
    pos: 'left-[22em] top-[38em]',
    tilt: 6,
    arrow: { d: 'M 15,50 Q 50,45 85,15', head: 'M 72,13 L 87,13 L 82,27', flip: '-rotate-12' },
  },
  {
    text: 'influencer',
    pos: 'right-[19em] top-[23em]',
    tilt: 8,
    arrow: { d: 'M 85,10 Q 45,5 15,45', head: 'M 25,42 L 13,47 L 15,33', flip: '-rotate-12' },
  },
  {
    text: 'graphic designer',
    pos: 'right-[17em] top-[37em]',
    tilt: -6,
    arrow: { d: 'M 85,50 Q 50,45 15,15', head: 'M 28,13 L 13,13 L 18,27', flip: 'rotate-12' },
  },
];

export function CoverArt({ className }: { className?: string }) {
  const { playing, toggle } = useVinyl();

  const onVinyl = (e: MouseEvent) => {
    e.stopPropagation();
    toggle();
  };

  return (
    <div className={cn('absolute inset-0', className)} style={{ fontSize: '1cqw' }}>
      {/* Title: curved, with a butterfly perched on the “o” */}
      <h1
        className="font-title absolute top-[0.13em] left-0 z-10 flex w-full -rotate-2 scale-y-[1.05] items-center justify-center gap-0 text-[12.5em] leading-none tracking-tight text-white select-none"
        style={{ textShadow: '0 0.08em 0.2em rgba(0,0,0,0.3)' }}
      >
        <span>Portf</span>
        <span className="relative inline-block">
          o
          <svg className="animate-pulse absolute -top-[0.22em] right-0 h-[0.42em] w-[0.42em] text-white opacity-95" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={BUTTERFLY} />
          </svg>
        </span>
        <span>lio</span>
      </h1>

      {/* Portrait cut-out */}
      <div className="absolute bottom-0 left-1/2 z-20 h-[43em] w-[30em] -translate-x-1/2">
        <Img
          alt="Hannah Elise portrait"
          src={IMAGES.coverAvatar}
          className="h-full w-full rounded-t-[15em] border-[0.35em] border-white/20 object-cover object-top shadow-2xl contrast-105 brightness-95"
          style={{
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          }}
        />
      </div>

      {/* Handwritten annotations */}
      <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true">
        {NOTES.map((n) => (
          <div key={n.text} className={cn('absolute flex flex-col items-center', n.pos)} style={{ rotate: `${n.tilt}deg` }}>
            <span className="font-hand tracking-wide whitespace-nowrap text-white" style={{ fontSize: 'max(11px, 3.1em)', fontWeight: 700 }}>
              {n.text}
            </span>
            <svg className={cn('mt-[0.2em] h-[6em] w-[8.5em] fill-none stroke-white', n.arrow.flip)} viewBox="0 0 100 60">
              <path d={n.arrow.d} strokeWidth="2.5" strokeDasharray="4 2" />
              <path d={n.arrow.head} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>

      {/* Cassette (top-left) */}
      <div className="animate-float absolute top-[5em] left-[4em] z-30" style={rot(-22)}>
        <div className={cn('w-[19em] rounded-[1em] border-[0.15em] border-white/80 bg-zinc-900 p-[0.9em]', sticker)}>
          <div className="rounded-[0.4em] bg-white p-[0.6em] text-center text-black shadow-inner">
            <div className="border-b border-black pb-[0.2em] text-[1em] font-black tracking-widest">THE 1975</div>
            <div className="my-[0.5em] flex items-center justify-between px-[0.6em]">
              <span className="flex h-[2.6em] w-[2.6em] items-center justify-center rounded-full border-[0.15em] border-gray-400 bg-zinc-900">
                <span className="h-[0.6em] w-[0.6em] rounded-full bg-white" />
              </span>
              <span className="flex h-[1.1em] w-[4em] items-center justify-center rounded border border-zinc-400 bg-zinc-200 font-mono text-[0.7em] text-zinc-600">SIDE A</span>
              <span className="flex h-[2.6em] w-[2.6em] items-center justify-center rounded-full border-[0.15em] border-gray-400 bg-zinc-900">
                <span className="h-[0.6em] w-[0.6em] rounded-full bg-white" />
              </span>
            </div>
            <div className="text-[0.75em] font-bold tracking-wider text-gray-700 uppercase">High Fidelity Stereo Tape</div>
          </div>
        </div>
      </div>

      {/* Music note */}
      <div className="animate-float-alt absolute top-[9em] left-[30em] z-20 text-white opacity-90" style={rot(-12)} aria-hidden="true">
        <svg className="h-[4.4em] w-[4.4em] drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>

      {/* Vinyl (bottom-left): click to play the lo-fi loop */}
      <button
        type="button"
        onClick={onVinyl}
        aria-pressed={playing}
        aria-label={playing ? 'Pause The 1975 ambient track' : 'Play The 1975 ambient track'}
        title={playing ? 'Pause music' : 'Click to play ambient track (The 1975)'}
        className="animate-float-alt absolute bottom-[4.5em] left-[4em] z-30 flex cursor-pointer flex-col items-center focus-visible:rounded-full"
        style={rot(10)}
      >
        <span
          className={cn(
            'flex h-[14em] w-[14em] items-center justify-center rounded-full border-[0.15em] border-white/40 bg-zinc-950 p-[0.3em]',
            sticker,
            playing && 'ring-[0.2em] ring-yellow-400',
          )}
        >
          <span className={cn('flex h-full w-full items-center justify-center rounded-full border-[0.35em] border-zinc-900', playing && 'animate-spin-slow')}>
            <span className="flex h-3/4 w-3/4 items-center justify-center rounded-full border-[0.15em] border-zinc-800">
              <span className="flex h-[5.6em] w-[5.6em] flex-col items-center justify-center rounded-full border-[0.35em] border-black bg-white text-black">
                <span className="text-[0.8em] font-black tracking-tighter uppercase">STEREO</span>
                <span className="my-[0.2em] h-[0.5em] w-[0.5em] rounded-full bg-black" />
                <span className="text-[0.7em] font-bold">33 RPM</span>
              </span>
            </span>
          </span>
        </span>
        <span className="mt-[0.6em] font-mono tracking-widest text-white/80" style={{ fontSize: 'max(9px, 1.3em)' }}>
          {playing ? 'PLAYING ♪' : 'TAP VINYL'}
        </span>
      </button>

      {/* Headphones (top-right) */}
      <div className="animate-float absolute top-[4.5em] right-[5em] z-30" style={rot(25)} aria-hidden="true">
        <div className={cn('w-[14em]', sticker)}>
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <path d="M 40 110 A 70 70 0 0 1 160 110" fill="none" stroke="#f8fafc" strokeWidth="16" strokeLinecap="round" />
            <rect x="25" y="100" width="30" height="50" rx="15" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
            <rect x="20" y="108" width="10" height="34" rx="5" fill="#e2e8f0" />
            <rect x="145" y="100" width="30" height="50" rx="15" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
            <rect x="170" y="108" width="10" height="34" rx="5" fill="#e2e8f0" />
          </svg>
        </div>
      </div>

      {/* Clapperboard (bottom-right) */}
      <div className="animate-float absolute right-[4.5em] bottom-[5em] z-30" style={rot(-18)} aria-hidden="true">
        <div className={cn('w-[17em] rounded-[0.8em] border-[0.15em] border-white bg-zinc-900 p-[0.7em] text-white', sticker)}>
          <div className="mb-[0.3em] flex justify-between gap-[0.3em] rounded-t border-b-[0.15em] border-zinc-900 bg-white p-[0.3em]">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-[1.3em] w-[1.6em] -skew-x-12 bg-zinc-900" />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-[0.3em] rounded border border-white/40 p-[0.5em] font-mono text-[0.85em]">
            <div className="border-r border-b border-white/30 p-[0.2em]">SCENE<br /><b className="text-[1.2em]">04</b></div>
            <div className="border-b border-white/30 p-[0.2em]">TAKE<br /><b className="text-[1.2em]">01</b></div>
            <div className="col-span-2 pt-[0.2em] text-center font-sans text-[0.9em] font-bold tracking-wider">CREATIVE DIR.</div>
          </div>
        </div>
      </div>

      {/* Sparkles & butterflies */}
      <div className="pointer-events-none absolute inset-0 z-20 text-white" aria-hidden="true">
        <svg className="animate-twinkle absolute top-[17em] left-[12em] h-[2.8em] w-[2.8em]" fill="currentColor" viewBox="0 0 24 24"><path d={SPARKLE} /></svg>
        <svg className="animate-twinkle absolute top-[4em] right-[22em] h-[2.4em] w-[2.4em] [animation-delay:1s]" fill="currentColor" viewBox="0 0 24 24"><path d={SPARKLE} /></svg>
        <svg className="animate-twinkle absolute right-[8em] bottom-[22em] h-[2.2em] w-[2.2em] [animation-delay:2s]" fill="currentColor" viewBox="0 0 24 24"><path d={SPARKLE} /></svg>
        <svg className="animate-float-alt absolute top-[33em] left-[8em] h-[3.2em] w-[3.2em] text-white/90" style={rot(-45)} fill="currentColor" viewBox="0 0 24 24"><path d={BUTTERFLY} /></svg>
        <svg className="animate-float absolute right-[27em] bottom-[10em] h-[2.8em] w-[2.8em] text-white/90" style={rot(12)} fill="currentColor" viewBox="0 0 24 24"><path d={BUTTERFLY} /></svg>
      </div>
    </div>
  );
}
