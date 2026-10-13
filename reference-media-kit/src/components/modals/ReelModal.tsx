import { useState, useEffect } from 'react';
import { IMAGES } from '../../data/portfolioData';

interface ReelModalProps {
  reelIndex: number | null;
  onClose: () => void;
  onSelectReel: (idx: number) => void;
}

export function ReelModal({ reelIndex, onClose, onSelectReel }: ReelModalProps) {
  if (reelIndex === null) return null;

  const reel = IMAGES.brandReels[reelIndex];
  if (!reel) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [likesCount, setLikesCount] = useState(parseInt(reel.likes) || 94);
  const [hasLiked, setHasLiked] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleLike = () => {
    if (!hasLiked) {
      setHasLiked(true);
      setLikesCount((prev) => prev + 1);
    } else {
      setHasLiked(false);
      setLikesCount((prev) => prev - 1);
    }
  };

  const total = IMAGES.brandReels.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-slate-300 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm transition-colors cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Smartphone Frame */}
        <div className="w-[300px] sm:w-[320px] aspect-9/18 bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700 relative flex flex-col justify-between">
          {/* Top Notch / Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-between px-3">
            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          </div>

          {/* Video Backdrop & Play/Pause tap target */}
          <div
            className="absolute inset-0 cursor-pointer overflow-hidden"
            onClick={togglePlay}
          >
            <img
              alt={reel.title}
              referrerPolicy="no-referrer"
              src={reel.url}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isPlaying ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Play state badge on pause */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white text-2xl shadow-xl">
                  <i className="fa-solid fa-play pl-1"></i>
                </div>
              </div>
            )}
          </div>

          {/* Top Header info */}
          <div className="relative z-20 p-4 pt-8 flex items-center justify-between text-white drop-shadow-md">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-wider uppercase font-mono bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">
                {reel.brand}
              </span>
              <span className="text-[11px] opacity-80">Sponsored Partnership</span>
            </div>
            <span className="text-xs font-mono bg-black/50 px-2 py-0.5 rounded">
              {reel.duration}
            </span>
          </div>

          {/* Right Floating Actions (TikTok/Reel style) */}
          <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4 text-white">
            <button
              type="button"
              onClick={handleLike}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow backdrop-blur-md transition-all ${
                  hasLiked ? 'bg-red-500 text-white scale-110' : 'bg-black/40 text-white hover:bg-black/60'
                }`}
              >
                <i className={`fa-${hasLiked ? 'solid' : 'regular'} fa-heart`}></i>
              </div>
              <span className="text-[10px] font-bold mt-1 drop-shadow font-mono">
                {likesCount}K
              </span>
            </button>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-lg shadow backdrop-blur-md">
                <i className="fa-solid fa-comment-dots"></i>
              </div>
              <span className="text-[10px] font-bold mt-1 drop-shadow font-mono">1.8K</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-lg shadow backdrop-blur-md">
                <i className="fa-solid fa-share"></i>
              </div>
              <span className="text-[10px] font-bold mt-1 drop-shadow font-mono">14K</span>
            </div>
          </div>

          {/* Bottom Captions & Audio Ticker */}
          <div className="relative z-20 p-4 pb-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
            <h4 className="text-sm font-bold tracking-tight mb-1 flex items-center gap-1.5">
              <span>@halenella</span>
              <i className="fa-solid fa-circle-check text-blue-400 text-xs"></i>
            </h4>
            <p className="text-xs text-white/90 leading-snug line-clamp-2 mb-2 font-normal">
              {reel.title} · Partnering with #{reel.brand} to share my everyday camera bag and creative routine.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-white/75 font-mono">
              <i className="fa-solid fa-music text-[9px] animate-spin-slow"></i>
              <span>Original Audio - Hannah Elise · Ambient Mix</span>
            </div>

            {/* Playback Progress bar */}
            <div className="w-full h-1 bg-white/20 rounded-full mt-2.5 overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-150 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Prev / Next controls */}
        <div className="flex items-center justify-between w-full mt-4 text-white text-xs px-2">
          <button
            type="button"
            disabled={reelIndex === 0}
            onClick={() => onSelectReel(reelIndex - 1)}
            className="hover:text-yellow-400 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 cursor-pointer"
          >
            <i className="fa-solid fa-chevron-left text-[10px]"></i>
            <span>Prev Reel</span>
          </button>
          <span className="font-mono text-white/70">
            {reelIndex + 1} of {total}
          </span>
          <button
            type="button"
            disabled={reelIndex === total - 1}
            onClick={() => onSelectReel(reelIndex + 1)}
            className="hover:text-yellow-400 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 cursor-pointer"
          >
            <span>Next Reel</span>
            <i className="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
