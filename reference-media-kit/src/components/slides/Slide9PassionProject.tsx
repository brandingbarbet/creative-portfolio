import { IMAGES } from '../../data/portfolioData';

interface SlideProps {
  onSlideClick?: () => void;
  onOpenCaseStudy?: () => void;
}

export function Slide9PassionProject({ onSlideClick, onOpenCaseStudy }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#173664] text-white p-6 md:p-8 flex flex-col justify-between relative cursor-pointer group"
      data-purpose="slide-passion-project"
    >
      <div className="circular-text text-white -top-6 -right-6">
        it's not just editing • visuals
      </div>
      <div className="circular-text text-white -bottom-6 -left-6">
        vibing with visuals
      </div>

      {/* Top Title */}
      <div>
        <h2 className="text-3xl md:text-4xl font-condensed-impact tracking-normal text-white uppercase">
          PASSION PROJECT
        </h2>
      </div>

      {/* Center Laptop / Media Mockup & Narrative */}
      <div className="grid grid-cols-12 gap-4 items-center my-auto">
        {/* Laptop Device Display Mockup (Col 7) */}
        <div className="col-span-7 flex flex-col items-center group-hover:scale-102 transition-transform duration-300">
          {/* Laptop Body Screen */}
          <div className="w-full bg-[#1A1A1A] p-2 rounded-t-xl border-2 border-slate-700 shadow-2xl relative">
            <div className="w-2 h-2 rounded-full bg-slate-600 mx-auto mb-1"></div>
            <div className="aspect-16/10 bg-slate-900 rounded overflow-hidden relative group/laptop">
              <img
                alt="Passion Project Concept"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/laptop:scale-105 transition-transform duration-300"
                src={IMAGES.laptopConcept}
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-[10px] px-2 py-0.5 rounded text-white font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Lumière Beauty Cam 01
              </div>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-[108%] h-3 bg-slate-300 rounded-b-md shadow-md border-t border-slate-400 relative">
            <div className="w-16 h-1 bg-slate-400 mx-auto rounded-b"></div>
          </div>
        </div>

        {/* Right Concept Pitch Details (Col 5) */}
        <div className="col-span-5 pl-2">
          <span className="text-[10px] tracking-widest uppercase text-white/60 font-semibold block mb-1">
            Case Study
          </span>
          <h3 className="text-sm md:text-base font-extrabold tracking-wide text-white uppercase leading-snug">
            LUMIÈRE BEAUTY CONCENPT
          </h3>
          <p className="text-[10px] md:text-[11px] text-white/80 leading-relaxed mt-2">
            Developed a social media concept focused on creating a cohesive visual identity for a beauty brand. The project explores content planning, product storytelling, and engaging visual communication across social platforms.
          </p>
          {onOpenCaseStudy && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenCaseStudy();
              }}
              className="mt-3 text-[10px] font-semibold bg-white/10 hover:bg-white/20 border border-white/30 text-white px-2.5 py-1 rounded transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore Moodboard &amp; Stills</span>
              <i className="fa-solid fa-arrow-right text-[8px]"></i>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
