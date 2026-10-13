import { IMAGES } from '../../data/portfolioData';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full p-6 md:p-8 shadow-2xl relative border border-slate-200 text-slate-800 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        <div className="mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
            Passion Project · Deep Dive
          </span>
          <h3 className="text-2xl font-extrabold text-[#173664] tracking-tight">
            Lumière Beauty — Brand Visual Direction
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Artisanal skincare brand concept focusing on earth tones, tactile textures, and mindful lifestyle rituals.
          </p>
        </div>

        {/* Hero Concept Image */}
        <div className="w-full aspect-16/9 rounded-xl overflow-hidden border border-slate-200 shadow-md relative mb-6">
          <img
            alt="Lumiere Beauty Stills"
            referrerPolicy="no-referrer"
            src={IMAGES.laptopConcept}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md font-mono">
            Creative Direction &amp; Set Design by Hannah Elise
          </div>
        </div>

        {/* Narrative & Visual Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <h4 className="text-xs font-bold text-[#173664] uppercase tracking-wider mb-1">
              01. The Challenge
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Break through sterile, clinical beauty advertising by infusing warmth, artisan leatherwork textures, and natural studio sunlight.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <h4 className="text-xs font-bold text-[#173664] uppercase tracking-wider mb-1">
              02. Visual Strategy
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Macro product focus, warm terracotta &amp; cognac palette, ASMR audio pacing, and documentary-style behind-the-bench photography.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <h4 className="text-xs font-bold text-[#173664] uppercase tracking-wider mb-1">
              03. Impact
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Concept featured in independent creator showcases; over 120,000 saves on Pinterest and moodboard communities worldwide.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#173664] text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
