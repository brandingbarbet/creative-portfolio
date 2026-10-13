import { IMAGES } from '../../data/portfolioData';

interface SlideProps {
  onSlideClick?: () => void;
}

export function Slide6Socials({ onSlideClick }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#F8F9FA] text-slate-800 p-6 md:p-8 flex flex-col justify-between relative cursor-pointer group"
      data-purpose="slide-socials-stats"
    >
      {/* Watermark */}
      <div className="circular-text text-slate-400 top-4 right-4">
        it's not just editing • visuals
      </div>

      {/* Header Title */}
      <div>
        <h2 className="text-3xl md:text-5xl font-condensed-impact tracking-normal text-[#173664] uppercase leading-none">
          SOCIALS ACOUNTS
        </h2>
      </div>

      {/* Center Content: Device Screen Mockups & Stats List */}
      <div className="grid grid-cols-12 gap-3 items-center my-auto">
        {/* 3 Phone Previews */}
        <div className="col-span-7 flex items-center justify-center gap-2">
          {/* Phone 1 (Reel Card) */}
          <div className="w-20 sm:w-22 md:w-24 aspect-9/16 bg-slate-900 rounded-xl overflow-hidden shadow-lg border-2 border-slate-700 relative group-hover:-translate-y-1 transition-transform">
            <img
              alt="Social Post 1"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              src={IMAGES.socialsMockup1}
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <i className="fa-regular fa-circle-play text-white text-xl"></i>
            </div>
          </div>

          {/* Phone 2 (Center Mockup - Taller) */}
          <div className="w-24 sm:w-26 md:w-28 aspect-9/18 bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 relative -translate-y-2 group-hover:-translate-y-3 transition-transform">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-700 rounded-full z-10"></div>
            <img
              alt="Social Post 2"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              src={IMAGES.socialsMockup2}
            />
          </div>

          {/* Phone 3 (Reel Card) */}
          <div className="w-20 sm:w-22 md:w-24 aspect-9/16 bg-slate-900 rounded-xl overflow-hidden shadow-lg border-2 border-slate-700 relative group-hover:-translate-y-1 transition-transform">
            <img
              alt="Social Post 3"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              src={IMAGES.socialsMockup3}
            />
            <div className="absolute bottom-1 right-1 text-white text-[9px] bg-black/60 px-1 rounded font-mono">
              0:45
            </div>
          </div>
        </div>

        {/* Follower Metrics List */}
        <div className="col-span-5 flex flex-col justify-center space-y-4 pl-2">
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#173664] mt-1.5 shrink-0"></span>
            <div>
              <span className="block text-xs md:text-sm font-extrabold text-[#173664] uppercase tracking-wider">
                INSTAGRAM
              </span>
              <span className="block text-xs md:text-sm font-bold text-slate-700">
                2M FOLLOWERS
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#173664] mt-1.5 shrink-0"></span>
            <div>
              <span className="block text-xs md:text-sm font-extrabold text-[#173664] uppercase tracking-wider">
                TIKTOK
              </span>
              <span className="block text-xs md:text-sm font-bold text-slate-700">
                3M FOLLOWERS
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#173664] mt-1.5 shrink-0"></span>
            <div>
              <span className="block text-xs md:text-sm font-extrabold text-[#173664] uppercase tracking-wider">
                YOUTUBE
              </span>
              <span className="block text-xs md:text-sm font-bold text-slate-700">
                800K SUBSCRIBERS
              </span>
            </div>
          </div>

          {/* Social App Logos Row */}
          <div className="flex items-center gap-3 pt-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center text-sm shadow hover:scale-110 transition-transform">
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm shadow hover:scale-110 transition-transform">
              <i className="fa-brands fa-tiktok"></i>
            </span>
            <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm shadow hover:scale-110 transition-transform">
              <i className="fa-brands fa-youtube"></i>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
