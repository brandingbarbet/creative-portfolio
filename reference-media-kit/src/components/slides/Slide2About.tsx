import { IMAGES } from '../../data/portfolioData';

interface SlideProps {
  onSlideClick?: () => void;
}

export function Slide2About({ onSlideClick }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#F8F9FA] text-slate-800 p-6 md:p-10 flex items-center justify-between relative cursor-pointer group"
      data-purpose="slide-about"
    >
      {/* Watermark text in circular fashion */}
      <div className="circular-text text-[#173664]/25 -top-12 -left-12 w-44 h-44 rounded-full border border-dashed border-[#173664]/20 flex items-center justify-center text-center p-3">
        vibing with visuals • editing
      </div>
      <div className="circular-text text-[#173664]/25 -bottom-10 -right-10 w-44 h-44 rounded-full border border-dashed border-[#173664]/20 flex items-center justify-center text-center p-3">
        it's not just editing it's vibes
      </div>

      {/* Left: Creator Sitting on Stool/Books */}
      <div className="relative w-5/12 h-full flex flex-col justify-end items-center pr-2">
        <div className="relative w-40 sm:w-44 md:w-56 h-60 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg border-2 border-white group-hover:shadow-xl transition-all">
          <img
            alt="Hannah Elise About Creator"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
            src={IMAGES.aboutPhoto}
          />
        </div>
        {/* Stack of Books Graphic Footnote */}
        <div className="mt-2 text-center text-[10px] tracking-widest text-slate-400 font-bold uppercase">
          EST. 2020 • NYC &amp; LA
        </div>
      </div>

      {/* Right: Narrative & Bio Details */}
      <div className="w-7/12 pl-4 md:pl-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#173664] tracking-tight font-body mb-3">
          About me
        </h2>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal mb-3">
          I'm <strong className="text-[#173664] font-semibold">Hannah Elise</strong>, a passionate content creator who loves turning everyday moments into engaging stories. From lifestyle and beauty to fashion and trends, I create authentic content that connects with audiences and brings brands to life.
        </p>
        <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">
          Beyond creating content, I enjoy bringing ideas to life through creative video editing, photography, and visual storytelling. I'm always exploring new trends and experimenting with fresh ideas to make every piece of content engaging, relatable, and visually appealing.
        </p>
      </div>
    </article>
  );
}
