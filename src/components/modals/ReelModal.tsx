import { useEffect, useState } from 'react';
import { IMAGES } from '../../data/images';
import { Img } from '../ui/Img';
import { CloseButton, Modal, ModalPanel } from '../ui/Modal';

interface Props {
  index: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

/** Parse "94K" → 94 so the like counter can go up/down by one. */
const parseK = (s: string) => parseFloat(s) || 0;

export function ReelModal({ index, onSelect, onClose }: Props) {
  const reel = IMAGES.brandReels[index];
  const total = IMAGES.brandReels.length;

  const [playing, setPlaying] = useState(true);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 2)), 150);
    return () => window.clearInterval(t);
  }, [playing]);

  if (!reel) return null;
  const likes = parseK(reel.likes) + (liked ? 1 : 0);

  const circle = 'flex h-10 w-10 items-center justify-center rounded-full text-lg shadow backdrop-blur-md';
  const stepBtn = 'flex cursor-pointer items-center gap-1.5 hover:text-yellow-400 disabled:pointer-events-none disabled:opacity-30';

  return (
    <Modal
      onClose={onClose}
      label={`${reel.brand} reel preview`}
      backdrop="bg-black/85"
      onKey={(e) => {
        if (e.key === 'ArrowRight' && index < total - 1) onSelect(index + 1);
        if (e.key === 'ArrowLeft' && index > 0) onSelect(index - 1);
        if (e.key === ' ') {
          e.preventDefault();
          setPlaying((p) => !p);
        }
      }}
    >
      <ModalPanel className="relative flex w-full max-w-sm flex-col items-center">
        <CloseButton onClose={onClose} className="absolute -top-12 right-0 h-10 w-10 bg-white/10 text-white hover:text-slate-300" />

        <div className="relative flex aspect-9/18 w-[300px] flex-col justify-between overflow-hidden rounded-3xl border-4 border-slate-700 bg-black shadow-2xl sm:w-[320px]">
          <div className="absolute top-2 left-1/2 z-30 flex h-4 w-24 -translate-x-1/2 items-center justify-between rounded-full bg-black px-3">
            <div className="h-2 w-2 rounded-full bg-slate-800" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>

          <button
            type="button"
            aria-label={playing ? 'Pause reel' : 'Play reel'}
            onClick={() => setPlaying((p) => !p)}
            className="absolute inset-0 cursor-pointer overflow-hidden"
          >
            <Img
              alt={reel.title}
              src={reel.url}
              className={`h-full w-full object-cover transition-transform duration-700 ${playing ? 'scale-105' : 'scale-100'}`}
            />
            {!playing && (
              <span className="absolute inset-0 z-20 flex items-center justify-center bg-black/40">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 text-2xl text-white shadow-xl backdrop-blur-md">
                  <i className="fa-solid fa-play pl-1" aria-hidden="true" />
                </span>
              </span>
            )}
          </button>

          <div className="relative z-20 flex items-center justify-between p-4 pt-8 text-white drop-shadow-md">
            <div className="flex items-center gap-2">
              <span className="rounded bg-white/20 px-2 py-0.5 font-mono text-sm font-extrabold tracking-wider uppercase backdrop-blur-sm">{reel.brand}</span>
              <span className="text-[11px] opacity-80">Sponsored Partnership</span>
            </div>
            <span className="rounded bg-black/50 px-2 py-0.5 font-mono text-xs">{reel.duration}</span>
          </div>

          <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4 text-white">
            <button type="button" onClick={() => setLiked((l) => !l)} aria-pressed={liked} aria-label="Like" className="flex cursor-pointer flex-col items-center">
              <span className={`${circle} transition-all ${liked ? 'scale-110 bg-red-500' : 'bg-black/40 hover:bg-black/60'}`}>
                <i className={`fa-${liked ? 'solid' : 'regular'} fa-heart`} aria-hidden="true" />
              </span>
              <span className="mt-1 font-mono text-[10px] font-bold drop-shadow">{likes}K</span>
            </button>
            <div className="flex flex-col items-center">
              <span className={`${circle} bg-black/40`}><i className="fa-solid fa-comment-dots" aria-hidden="true" /></span>
              <span className="mt-1 font-mono text-[10px] font-bold drop-shadow">1.8K</span>
            </div>
            <div className="flex flex-col items-center">
              <span className={`${circle} bg-black/40`}><i className="fa-solid fa-share" aria-hidden="true" /></span>
              <span className="mt-1 font-mono text-[10px] font-bold drop-shadow">14K</span>
            </div>
          </div>

          <div className="relative z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pb-3 text-white">
            <h4 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
              <span>@halenella</span>
              <i className="fa-solid fa-circle-check text-xs text-blue-400" aria-hidden="true" />
            </h4>
            <p className="mb-2 line-clamp-2 text-xs leading-snug font-normal text-white/90">
              {reel.title} · Partnering with #{reel.brand} to share my everyday camera bag and creative routine.
            </p>
            <div className="flex items-center gap-2 font-mono text-[10px] text-white/75">
              <i className="fa-solid fa-music animate-spin-slow text-[9px]" aria-hidden="true" />
              <span>Original Audio - Hannah Elise · Ambient Mix</span>
            </div>
            <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full bg-white transition-all duration-150 ease-linear" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="mt-4 flex w-full items-center justify-between px-2 text-xs text-white">
          <button type="button" disabled={index === 0} onClick={() => onSelect(index - 1)} className={stepBtn}>
            <i className="fa-solid fa-chevron-left text-[10px]" aria-hidden="true" />
            <span>Prev Reel</span>
          </button>
          <span className="font-mono text-white/70">{index + 1} of {total}</span>
          <button type="button" disabled={index === total - 1} onClick={() => onSelect(index + 1)} className={stepBtn}>
            <span>Next Reel</span>
            <i className="fa-solid fa-chevron-right text-[10px]" aria-hidden="true" />
          </button>
        </div>
      </ModalPanel>
    </Modal>
  );
}
