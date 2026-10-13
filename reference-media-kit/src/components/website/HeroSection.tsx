import { useState, useEffect } from 'react';
import { IMAGES } from '../../data/portfolioData';
import { isAudioPlaying, toggleVinylAudio } from '../../utils/audioPlayer';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreWork: () => void;
}

export function HeroSection({ onOpenBooking, onExploreWork }: HeroSectionProps) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(isAudioPlaying());
  }, []);

  const handleToggleVinyl = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isNow = toggleVinylAudio(setPlaying);
    setPlaying(isNow);
  };

  return (
    <section
      id="hero"
      className="relative bg-[#173664] text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-8 border-b border-white/10"
    >
      {/* Background Graphic Watermarks */}
      <div className="circular-text text-white/20 top-12 left-10 -rotate-12 hidden md:block">
        it's vibing with visuals • editing
      </div>
      <div className="circular-text text-white/20 bottom-12 right-12 rotate-6 hidden md:block">
        not just editing • visuals &amp; vibes
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Top Interactive Vinyl & Audio Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
          {/* Vinyl Record Player Unit */}
          <button
            type="button"
            onClick={handleToggleVinyl}
            className="flex items-center gap-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-left transition-all cursor-pointer group shadow-lg"
            title={playing ? 'Pause music' : 'Play The 1975 ambient soundtrack'}
          >
            <div
              className={`w-11 h-11 rounded-full border-2 border-white/70 bg-black flex items-center justify-center shadow-md ${
                playing ? 'animate-spin-slow ring-2 ring-yellow-400' : ''
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-red-600 border border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest text-white/90 flex items-center gap-1.5 uppercase font-bold">
                <i className={`fa-solid fa-music text-[10px] ${playing ? 'text-yellow-300 animate-bounce' : 'text-white/60'}`}></i>
                THE 1975
              </span>
              <span className="text-[10px] text-white/70 font-mono block">
                {playing ? 'Playing Ambient Mix ♪' : 'Click to Play Audio'}
              </span>
            </div>
          </button>

          {/* Location & Status Badge */}
          <div className="flex items-center gap-3 text-xs text-white/80">
            <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for 2026/2027 Campaigns</span>
            </span>
            <div className="text-2xl text-white/80 transform rotate-12 hover:rotate-0 transition-transform hidden sm:block">
              <i className="fa-solid fa-headphones"></i>
            </div>
          </div>
        </div>

        {/* Center Main Stage */}
        <div className="flex flex-col items-center text-center my-4 sm:my-8">
          {/* Subtitle kicker */}
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-white/70 mb-3 block">
            Digital Storyteller · Content Creator · Influencer
          </span>

          {/* Huge Signature Script Title */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-script italic font-extrabold tracking-tight text-white mb-6 relative inline-block select-none drop-shadow-md">
            Portfolio
            <span className="absolute -top-4 -right-6 sm:-right-10 text-2xl sm:text-4xl text-yellow-300 animate-pulse">
              ✦
            </span>
            <span className="absolute -bottom-2 -left-4 sm:-left-8 text-xl sm:text-2xl text-white/70">
              ✦
            </span>
          </h1>

          {/* Central Cutout Portrait & Surrounding Glass Badges */}
          <div className="relative my-4 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-xl scale-110"></div>
            <img
              alt="Hannah Elise Portrait"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-2xl object-top transition-transform duration-500 hover:scale-105"
              src={IMAGES.coverAvatar}
            />

            {/* Floating Tags Around Creator */}
            <span className="absolute top-4 -left-8 sm:-left-16 bg-white/20 backdrop-blur-md border border-white/40 text-white text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-lg hover:bg-white/30 transition-all z-20">
              social media
            </span>
            <span className="absolute top-2 -right-6 sm:-right-14 bg-white/20 backdrop-blur-md border border-white/40 text-white text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-lg hover:bg-white/30 transition-all z-20">
              influencer
            </span>
            <span className="absolute bottom-6 -left-10 sm:-left-20 bg-white/20 backdrop-blur-md border border-white/40 text-white text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-lg hover:bg-white/30 transition-all z-20">
              video editor
            </span>
            <span className="absolute bottom-4 -right-10 sm:-right-20 bg-white/20 backdrop-blur-md border border-white/40 text-white text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-lg hover:bg-white/30 transition-all z-20">
              graphic designer
            </span>
          </div>

          {/* Lead Bio Paragraph */}
          <p className="max-w-2xl text-sm sm:text-base text-white/90 font-normal leading-relaxed mt-6">
            Hi, I'm <strong className="text-white font-bold">Hannah Elise</strong> (@halenella).
            Crafting high-retention lifestyle, beauty, and tech stories that convert. Over 5.8M+ engaged followers across Instagram, TikTok, and YouTube.
          </p>

          {/* CTA Button Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-white text-[#173664] font-bold text-xs sm:text-sm shadow-xl hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-2"
            >
              <i className="fa-regular fa-paper-plane text-xs"></i>
              <span>Book Collaboration</span>
            </button>
            <button
              type="button"
              onClick={onExploreWork}
              className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Selected Works</span>
              <i className="fa-solid fa-arrow-down text-xs"></i>
            </button>
          </div>
        </div>

        {/* Bottom Hero Metrics Bar */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-2xl sm:text-4xl font-black font-condensed-impact tracking-normal text-white">
              5.8M+
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 font-medium">
              Total Community Reach
            </span>
          </div>
          <div>
            <span className="block text-2xl sm:text-4xl font-black font-condensed-impact tracking-normal text-white">
              7.2%
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 font-medium">
              Average Engagement Rate
            </span>
          </div>
          <div>
            <span className="block text-2xl sm:text-4xl font-black font-condensed-impact tracking-normal text-white">
              120M+
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 font-medium">
              Organic Video Views
            </span>
          </div>
          <div>
            <span className="block text-2xl sm:text-4xl font-black font-condensed-impact tracking-normal text-white">
              HARVARD
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 font-medium">
              Alum · Media &amp; Behavioral '20/'24
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
