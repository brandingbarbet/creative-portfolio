import { IMAGES } from '../../data/portfolioData';

interface SlideProps {
  onSlideClick?: () => void;
}

export function Slide3Education({ onSlideClick }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#173664] text-white p-6 md:p-8 flex flex-col justify-between relative cursor-pointer group"
      data-purpose="slide-education"
    >
      <div className="circular-text text-white -bottom-8 -left-8">
        it's vibing with visuals • editing
      </div>

      <div className="grid grid-cols-12 h-full gap-4 items-center">
        {/* Title Left Column */}
        <div className="col-span-4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white font-body">
            Education
            <br />
            Background
          </h2>
        </div>

        {/* Overlapping Polaroids Center Column */}
        <div className="col-span-4 relative h-56 flex items-center justify-center">
          {/* Polaroid 1 (Left tilted) */}
          <div className="absolute -left-2 top-2 bg-white p-1.5 pb-5 rounded shadow-xl transform -rotate-12 w-28 group-hover:z-20 transition-all hover:scale-110">
            <img
              alt="Graduation 1"
              referrerPolicy="no-referrer"
              className="w-full h-24 object-cover rounded-sm"
              src={IMAGES.eduGraduation}
            />
            <span className="block text-[8px] text-slate-700 font-mono text-center mt-1">
              Graduation Day
            </span>
          </div>

          {/* Polaroid 2 (Top tilted right) */}
          <div className="absolute -top-3 right-0 bg-white p-1.5 pb-5 rounded shadow-xl transform rotate-6 w-28 group-hover:z-20 transition-all hover:scale-110">
            <img
              alt="Graduation Campus"
              referrerPolicy="no-referrer"
              className="w-full h-24 object-cover rounded-sm"
              src={IMAGES.eduClass20}
            />
            <span className="block text-[8px] text-slate-700 font-mono text-center mt-1">
              Class of '20
            </span>
          </div>

          {/* Polaroid 3 (Bottom center) */}
          <div className="absolute bottom-0 right-4 bg-white p-1.5 pb-5 rounded shadow-2xl transform -rotate-3 w-32 group-hover:z-30 transition-all hover:scale-110">
            <img
              alt="Campus Building"
              referrerPolicy="no-referrer"
              className="w-full h-28 object-cover rounded-sm"
              src={IMAGES.eduYard}
            />
            <span className="block text-[8px] text-slate-700 font-mono text-center mt-1">
              Harvard Yard
            </span>
          </div>
        </div>

        {/* Timeline Right Column */}
        <div className="col-span-4 pl-4 flex flex-col justify-center gap-6">
          {/* Item 2020 */}
          <div className="relative pl-5 border-l-2 border-white/40">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-white border-2 border-[#173664]"></span>
            <span className="text-2xl font-bold tracking-tight text-white block">2020</span>
            <span className="text-xs font-semibold text-white/90 block">Harvard University</span>
            <p className="text-[11px] text-white/70 mt-0.5 leading-snug">
              Bachelor of Arts in Media &amp; Communications
            </p>
          </div>

          {/* Item 2024 */}
          <div className="relative pl-5 border-l-2 border-white/40">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-white border-2 border-[#173664]"></span>
            <span className="text-2xl font-bold tracking-tight text-white block">2024</span>
            <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
              Master of Social Management &amp; Social Behavioral
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
