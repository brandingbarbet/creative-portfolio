import { IMAGES } from '../../data/portfolioData';

interface BrandsSectionProps {
  onSelectReel: (idx: number) => void;
}

export function BrandsSection({ onSelectReel }: BrandsSectionProps) {
  return (
    <section id="brands" className="py-20 sm:py-28 bg-[#173664] text-white relative overflow-hidden">
      <div className="circular-text text-white/20 top-10 right-10 hidden md:block">
        editing • visuals • vibing
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header & Client Wordmarks */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-white/15">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70 font-bold block mb-2">
              05. Brand Partnerships &amp; Sponsored Content
            </span>
            <h2 className="text-4xl sm:text-6xl font-condensed-impact tracking-normal uppercase text-white leading-none">
              BRANDS
            </h2>
          </div>

          <div className="flex items-center gap-6 text-white/90">
            <span className="font-serif italic font-semibold text-2xl tracking-wide">
              maslostudio
            </span>
            <span className="font-mono uppercase font-bold tracking-widest text-sm bg-white/15 px-3 py-1 rounded-md backdrop-blur-sm">
              fuse
            </span>
          </div>
        </div>

        {/* 5 Vertical Reels Grid with interactive modal launch */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {IMAGES.brandReels.map((reel, idx) => (
            <div
              key={reel.id}
              onClick={() => onSelectReel(idx)}
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-9/16 bg-slate-900 rounded-2xl overflow-hidden border-2 border-white/25 shadow-xl relative group-hover:border-white transition-all duration-300 group-hover:scale-103">
                <img
                  alt={reel.title}
                  referrerPolicy="no-referrer"
                  src={reel.url}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 flex items-center justify-center transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white text-sm shadow-xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#173664] transition-all">
                    <i className="fa-solid fa-play pl-0.5"></i>
                  </div>
                </div>

                {/* Video Info Badges */}
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-[10px] font-mono px-2 py-0.5 rounded text-white font-bold uppercase">
                  {reel.brand}
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/60 text-[10px] font-mono px-2 py-0.5 rounded text-white/90">
                  {reel.duration}
                </div>
              </div>

              {/* Reel Meta underneath */}
              <div className="mt-3 px-1">
                <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-yellow-300 transition-colors">
                  {reel.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-white/70 font-mono mt-1">
                  <span>{reel.views} Views</span>
                  <span className="text-pink-300">
                    <i className="fa-solid fa-heart mr-1 text-[9px]"></i>
                    {reel.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Client Pills Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4">
          <span className="bg-white text-[#173664] font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full shadow-md tracking-wider">
            florica
          </span>
          <span className="bg-white text-[#173664] font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full shadow-md tracking-wider">
            unearth
          </span>
          <span className="bg-white text-[#173664] font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full shadow-md tracking-wider">
            lumi
          </span>
        </div>
      </div>
    </section>
  );
}
