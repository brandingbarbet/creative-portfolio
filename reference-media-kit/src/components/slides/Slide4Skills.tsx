import { IMAGES } from '../../data/portfolioData';

interface SlideProps {
  onSlideClick?: () => void;
}

export function Slide4Skills({ onSlideClick }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#F8F9FA] text-slate-800 p-6 md:p-8 flex flex-col justify-between relative cursor-pointer group"
      data-purpose="slide-skills"
    >
      {/* Ambient Watermark */}
      <div className="circular-text text-slate-400 top-4 right-4">
        not just editing • visuals
      </div>
      <div className="circular-text text-slate-400 bottom-4 left-4">
        vibing with visual media
      </div>

      {/* Top Row: Headline & Logos */}
      <div className="flex justify-between items-start">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#173664] tracking-tight">
          Skills &amp;
          <br />
          Expertise
        </h2>

        {/* Top Right Software Icons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200">
            <i className="fa-brands fa-slack text-xl text-yellow-500"></i>
            <span className="font-bold text-slate-700 text-xs">slack</span>
          </div>
          <div className="bg-[#00C4CC] text-white font-extrabold px-3 py-1.5 rounded-lg text-xs shadow-sm flex items-center">
            Canva
          </div>
          <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
            <i className="fa-brands fa-adobe"></i>
          </div>
        </div>
      </div>

      {/* Center & Lower Layout: Photo Cutout + Category Details */}
      <div className="grid grid-cols-12 gap-2 items-center my-auto">
        {/* Left Column: Strategy & Ps/Ai badges */}
        <div className="col-span-4 flex flex-col gap-2">
          {/* Adobe Ps & Ai icons */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-9 h-9 rounded-lg bg-[#001E36] text-[#31A8FF] font-bold text-xs flex items-center justify-center border border-[#31A8FF]/40 shadow-sm">
              Ps
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#330000] text-[#FF9A00] font-bold text-xs flex items-center justify-center border border-[#FF9A00]/40 shadow-sm">
              Ai
            </div>
          </div>
          <h3 className="text-sm font-bold text-[#173664] leading-snug">
            Social Media
            <br />
            Marketing &amp;
            <br />
            Strategy
          </h3>
        </div>

        {/* Center Column: Cutout Portrait holding DSLR Camera */}
        <div className="col-span-4 flex justify-center">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
            <img
              alt="Creator with Camera"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
              src={IMAGES.skillsCamera}
            />
          </div>
        </div>

        {/* Right Column: Brand Collaboration */}
        <div className="col-span-4 flex flex-col justify-center items-start pl-2">
          <h3 className="text-sm font-bold text-[#173664] leading-snug mb-1">
            Brand Collaboration
            <br />
            &amp; Campaign
            <br />
            Creation
          </h3>
          <span className="inline-flex items-center text-[10px] text-slate-500 font-medium">
            <i className="fa-solid fa-check text-green-600 mr-1.5"></i> End-to-end execution
          </span>
        </div>
      </div>
    </article>
  );
}
