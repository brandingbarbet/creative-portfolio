interface SlideProps {
  onSlideClick?: () => void;
}

export function Slide8Experience({ onSlideClick }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#F8F9FA] text-slate-800 p-6 md:p-8 flex flex-col justify-between relative cursor-pointer group"
      data-purpose="slide-experience"
    >
      <div className="circular-text text-slate-400 -top-8 -right-8">
        it's not just editing • visuals
      </div>

      {/* Header Title */}
      <div>
        <h2 className="text-3xl md:text-5xl font-condensed-impact tracking-normal text-[#173664] uppercase leading-none">
          WORKING
          <br />
          EXPERIENCE
        </h2>
      </div>

      {/* Three-Column Experience Grid */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 my-auto pt-2">
        {/* Col 1: 2026 */}
        <div className="flex flex-col group-hover:-translate-y-0.5 transition-transform">
          <span className="text-xl md:text-2xl font-black text-[#173664] tracking-tight">
            2026
          </span>
          <span className="text-[10px] md:text-xs font-extrabold text-[#173664] uppercase tracking-wider mt-1 block">
            CONTENT CREATION
            <br />
            PHOTOGRAPHY
          </span>
          <p className="text-[9px] md:text-[10px] text-slate-500 mt-2 leading-relaxed font-normal">
            Created engaging lifestyle, beauty, and fashion content for social media platforms. Developed creative concepts, planned content, and produced visually appealing posts and short-form videos tailored to audience interests.
          </p>
        </div>

        {/* Col 2: 2025 */}
        <div className="flex flex-col border-l border-slate-200 pl-3 group-hover:-translate-y-0.5 transition-transform">
          <span className="text-xl md:text-2xl font-black text-[#173664] tracking-tight">
            2025
          </span>
          <span className="text-[10px] md:text-xs font-extrabold text-[#173664] uppercase tracking-wider mt-1 block">
            VIDEO EDITOR
            <br />
            &amp; CREATIVE
          </span>
          <p className="text-[9px] md:text-[10px] text-slate-500 mt-2 leading-relaxed font-normal">
            Edited short-form videos, reels, and promotional content with a focus on storytelling and visual appeal. Experimented with transitions, music, pacing, and creative concepts to create engaging social media content.
          </p>
        </div>

        {/* Col 3: 2027-PRESENT */}
        <div className="flex flex-col border-l border-slate-200 pl-3 group-hover:-translate-y-0.5 transition-transform">
          <span className="text-lg md:text-xl font-black text-[#173664] tracking-tight">
            2027-PRESENT
          </span>
          <span className="text-[10px] md:text-xs font-extrabold text-[#173664] uppercase tracking-wider mt-1 block">
            BRAND AMBASSADOR
            <br />
            &amp; COLLABORATIONS
          </span>
          <p className="text-[9px] md:text-[10px] text-slate-500 mt-2 leading-relaxed font-normal">
            Collaborated with brands and creators to develop authentic social media content that connects with audiences. Created promotional posts, product-focused videos, and lifestyle content while maintaining a consistent visual identity.
          </p>
        </div>
      </div>
    </article>
  );
}
