import { useEffect } from 'react';
import { SLIDES_CONFIG } from '../../data/portfolioData';
import { Slide1Cover } from '../slides/Slide1Cover';
import { Slide2About } from '../slides/Slide2About';
import { Slide3Education } from '../slides/Slide3Education';
import { Slide4Skills } from '../slides/Slide4Skills';
import { Slide5PreviousProjects } from '../slides/Slide5PreviousProjects';
import { Slide6Socials } from '../slides/Slide6Socials';
import { Slide7Brands } from '../slides/Slide7Brands';
import { Slide8Experience } from '../slides/Slide8Experience';
import { Slide9PassionProject } from '../slides/Slide9PassionProject';
import { Slide10Contact } from '../slides/Slide10Contact';

interface SlidePresentationModalProps {
  currentSlide: number | null;
  onClose: () => void;
  onNavigate: (slideNum: number) => void;
  onSelectProject?: (idx: number) => void;
  onSelectReel?: (idx: number) => void;
  onOpenInquiry?: () => void;
  onOpenCaseStudy?: () => void;
}

export function SlidePresentationModal({
  currentSlide,
  onClose,
  onNavigate,
  onSelectProject,
  onSelectReel,
  onOpenInquiry,
  onOpenCaseStudy,
}: SlidePresentationModalProps) {
  useEffect(() => {
    if (currentSlide === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (currentSlide < 10) onNavigate(currentSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 1) onNavigate(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, onClose, onNavigate]);

  if (currentSlide === null) return null;

  const currentConfig = SLIDES_CONFIG.find((s) => s.id === currentSlide);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Presentation Bar */}
      <div
        className="w-full max-w-6xl flex items-center justify-between text-white pb-3 pt-1 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-sm tracking-wider uppercase font-body text-blue-400">
            Hannah Elise Media Kit
          </span>
          <span className="text-white/30 hidden sm:inline">·</span>
          <span className="text-xs text-white/80 font-medium hidden sm:inline">
            {currentConfig?.title}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-md text-white/90">
            {String(currentSlide).padStart(2, '0')} / 10
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
            title="Exit Presentation (Esc)"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      {/* Center Slide Container (Scale & Maintain 16:9.6 Ratio) */}
      <div
        className="my-auto w-full max-w-5xl px-2 sm:px-4 py-2 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full shadow-2xl rounded-xl overflow-hidden border border-white/10">
          {currentSlide === 1 && <Slide1Cover />}
          {currentSlide === 2 && <Slide2About />}
          {currentSlide === 3 && <Slide3Education />}
          {currentSlide === 4 && <Slide4Skills />}
          {currentSlide === 5 && (
            <Slide5PreviousProjects onSelectProject={onSelectProject} />
          )}
          {currentSlide === 6 && <Slide6Socials />}
          {currentSlide === 7 && (
            <Slide7Brands onSelectReel={onSelectReel} />
          )}
          {currentSlide === 8 && <Slide8Experience />}
          {currentSlide === 9 && (
            <Slide9PassionProject onOpenCaseStudy={onOpenCaseStudy} />
          )}
          {currentSlide === 10 && (
            <Slide10Contact onOpenInquiry={onOpenInquiry} />
          )}
        </div>
      </div>

      {/* Bottom Presentation Controls & Scrubber */}
      <div
        className="w-full max-w-4xl flex flex-col items-center gap-2 pt-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrows & Thumbnail Scrubber */}
        <div className="flex items-center justify-between w-full text-white text-xs px-4">
          <button
            type="button"
            disabled={currentSlide === 1}
            onClick={() => onNavigate(currentSlide - 1)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left text-[11px]"></i>
            <span className="hidden sm:inline">Previous Slide</span>
          </button>

          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[60vw]">
            {SLIDES_CONFIG.map((slide) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => onNavigate(slide.id)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === slide.id
                    ? 'w-7 bg-blue-400'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                title={slide.title}
              />
            ))}
          </div>

          <button
            type="button"
            disabled={currentSlide === 10}
            onClick={() => onNavigate(currentSlide + 1)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">Next Slide</span>
            <i className="fa-solid fa-arrow-right text-[11px]"></i>
          </button>
        </div>

        <div className="text-[10px] text-white/40 font-mono text-center">
          Use ← and → keys or Spacebar to advance slides · Press Esc to exit
        </div>
      </div>
    </div>
  );
}
