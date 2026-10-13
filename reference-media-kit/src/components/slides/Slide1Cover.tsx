import { useState, useEffect } from 'react';
import { IMAGES } from '../../data/portfolioData';
import { isAudioPlaying, toggleVinylAudio } from '../../utils/audioPlayer';

interface SlideProps {
  onSlideClick?: () => void;
}

export function Slide1Cover({ onSlideClick }: SlideProps) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(isAudioPlaying());
  }, []);

  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isNowPlaying = toggleVinylAudio(setPlaying);
    setPlaying(isNowPlaying);
  };

  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#173664] text-white p-6 md:p-8 flex flex-col justify-between cursor-pointer group relative"
      data-purpose="slide-cover"
    >
      {/* Background Ambient Elements & Circular Watermark */}
      <div className="circular-text text-white top-6 left-6 -rotate-15">
        it's vibing with visuals • editing
      </div>

      {/* Top Badges & Audio Graphic Elements */}
      <div className="relative z-10 flex justify-between items-start">
        {/* Vinyl Record Graphic Top-Left */}
        <button
          type="button"
          onClick={handleToggleAudio}
          title={playing ? 'Pause music' : 'Click to play ambient track (The 1975)'}
          className="flex items-center gap-2 group/vinyl cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-0.5"
        >
          <div
            className={`w-12 h-12 rounded-full border-2 border-white/60 bg-black flex items-center justify-center shadow-md transition-transform group-hover/vinyl:scale-110 ${
              playing ? 'animate-spin-slow ring-2 ring-yellow-400' : ''
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-red-600 border border-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-white/90 font-mono tracking-widest pl-1 flex items-center gap-1.5">
              <i className={`fa-solid fa-music text-[10px] ${playing ? 'text-yellow-300 animate-bounce' : ''}`}></i>
              THE 1975
            </span>
            <span className="text-[9px] text-white/60 pl-1 font-mono">
              {playing ? 'Playing ♪' : 'Tap vinyl'}
            </span>
          </div>
        </button>

        {/* Headphones Graphic Top-Right */}
        <div className="text-white/85 text-4xl transform rotate-12 drop-shadow transition-transform group-hover:rotate-6">
          <i className="fa-solid fa-headphones"></i>
        </div>
      </div>

      {/* Center Title and Creator Cutout */}
      <div className="relative z-10 my-auto text-center flex flex-col items-center py-2">
        {/* Title Badge */}
        <h1 className="text-5xl lg:text-7xl font-script italic font-extrabold tracking-tight text-white mb-2 relative inline-block select-none">
          Portfolio
          <span className="absolute -top-3 -right-6 text-xl text-yellow-300 animate-pulse">✦</span>
          <span className="absolute -bottom-2 -left-4 text-base text-white/70">✦</span>
        </h1>

        {/* Cutout Image Centerpiece with Surrounding Floating Tag Badges */}
        <div className="relative mt-2 w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56">
          <img
            alt="Hannah Elise Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl object-top group-hover:scale-102 transition-transform duration-300"
            src={IMAGES.coverAvatar}
          />

          {/* Floating Skill Badges Around Creator */}
          <span className="absolute top-4 -left-10 md:-left-12 bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] md:text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold shadow hover:bg-white/25 transition-colors">
            social media
          </span>
          <span className="absolute top-2 -right-6 md:-right-8 bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] md:text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold shadow hover:bg-white/25 transition-colors">
            influencer
          </span>
          <span className="absolute bottom-6 -left-12 md:-left-14 bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] md:text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold shadow hover:bg-white/25 transition-colors">
            video editor
          </span>
          <span className="absolute bottom-4 -right-12 md:-right-14 bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] md:text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold shadow hover:bg-white/25 transition-colors">
            graphic designer
          </span>
        </div>
      </div>

      {/* Bottom Decorative Slate / Clapperboard */}
      <div className="relative z-10 flex justify-between items-end text-white/80">
        <div className="w-8 h-8 rounded-full border border-dashed border-white/60 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        <div className="text-3xl text-white transform -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
          <i className="fa-solid fa-clapperboard"></i>
        </div>
      </div>
    </article>
  );
}
