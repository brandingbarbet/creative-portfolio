import { IMAGES } from '../../data/portfolioData';

interface SlideProps {
  onSlideClick?: () => void;
  onSelectReel?: (reelIndex: number) => void;
}

export function Slide7Brands({ onSlideClick, onSelectReel }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#173664] text-white p-5 md:p-7 flex flex-col justify-between relative cursor-pointer group"
      data-purpose="slide-brands"
    >
      <div className="circular-text text-white top-2 right-4">
        editing • visuals • vibing
      </div>

      {/* Top Header & Brand Wordmarks */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-condensed-impact tracking-normal text-white uppercase">
          BRANDS
        </h2>
        <div className="flex items-center gap-5 text-white/90">
          <span className="font-serif italic font-semibold text-lg tracking-wide">
            maslostudio
          </span>
          <span className="font-mono uppercase font-bold tracking-widest text-sm bg-white/10 px-2 py-0.5 rounded">
            fuse
          </span>
        </div>
      </div>

      {/* Five Smartphone Reels Row */}
      <div className="grid grid-cols-5 gap-2 md:gap-3 my-auto py-2">
        {IMAGES.brandReels.map((reel, idx) => (
          <div
            key={reel.id}
            onClick={(e) => {
              if (onSelectReel) {
                e.stopPropagation();
                onSelectReel(idx);
              }
            }}
            className="flex flex-col items-center group/reel"
            title={`Preview ${reel.brand}: ${reel.title}`}
          >
            <div className="w-full aspect-9/17 bg-slate-800 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg relative group-hover/reel:border-white/80 group-hover/reel:scale-105 transition-all">
              <img
                alt={reel.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                src={reel.url}
              />
              <div className="absolute inset-0 bg-black/20 group-hover/reel:bg-black/10 flex items-center justify-center transition-colors">
                <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover/reel:scale-110 group-hover/reel:bg-white/80 transition-all">
                  <i className="fa-solid fa-play text-white group-hover/reel:text-[#173664] text-[9px] pl-0.5"></i>
                </div>
              </div>
              <div className="absolute bottom-1 right-1 bg-black/60 text-[8px] font-mono px-1 rounded text-white/90">
                {reel.duration}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Brand Badges Row */}
      <div className="flex justify-around items-center pt-1">
        <span className="bg-white text-[#173664] font-bold text-[11px] px-4 py-1 rounded-full shadow hover:bg-slate-100 transition-colors">
          florica
        </span>
        <span className="bg-white text-[#173664] font-bold text-[11px] px-4 py-1 rounded-full shadow hover:bg-slate-100 transition-colors">
          unearth
        </span>
        <span className="bg-white text-[#173664] font-bold text-[11px] px-4 py-1 rounded-full shadow hover:bg-slate-100 transition-colors">
          lumi
        </span>
      </div>
    </article>
  );
}
