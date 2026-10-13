interface SlideProps {
  onSlideClick?: () => void;
  onOpenInquiry?: () => void;
}

export function Slide10Contact({ onSlideClick, onOpenInquiry }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#F8F9FA] text-slate-800 p-6 md:p-10 flex flex-col justify-between relative border border-purple-200/60 cursor-pointer group"
      data-purpose="slide-contact"
    >
      {/* Decorative Circular Watermark Overlay */}
      <div className="circular-text text-purple-400/40 bottom-4 left-6">
        editing it's vibing with visuals
      </div>
      <div className="circular-text text-purple-400/40 top-4 right-6">
        it's not just editing • visuals
      </div>

      {/* Large Bold Headline */}
      <div className="pt-2">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-condensed-impact tracking-tight text-[#173664] uppercase leading-[1.05] group-hover:text-blue-900 transition-colors">
          LET'S WORK TOGETHER
          <br />
          AND CREATE
          <br />
          SOMETHING GREAT!
        </h2>
        {onOpenInquiry && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenInquiry();
            }}
            className="mt-3 text-xs font-bold bg-[#173664] text-white px-4 py-2 rounded-lg hover:bg-blue-900 shadow-md transition-all inline-flex items-center gap-2"
          >
            <i className="fa-regular fa-paper-plane text-xs"></i>
            <span>Send Collaboration Proposal</span>
          </button>
        )}
      </div>

      {/* Contact and Social Links Bottom Right */}
      <div className="flex flex-col items-end space-y-2 pb-2">
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 group/link hover:translate-x-1 transition-transform"
        >
          <div className="w-6 h-6 rounded-full bg-slate-200 group-hover/link:bg-[#173664] group-hover/link:text-white flex items-center justify-center text-[#173664] text-xs transition-colors">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <span className="text-xs md:text-sm font-bold text-[#173664] tracking-wider uppercase font-mono">
            @HALENELLA
          </span>
        </a>

        {/* TikTok */}
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 group/link hover:translate-x-1 transition-transform"
        >
          <div className="w-6 h-6 rounded-full bg-slate-200 group-hover/link:bg-[#173664] group-hover/link:text-white flex items-center justify-center text-[#173664] text-xs transition-colors">
            <i className="fa-brands fa-tiktok"></i>
          </div>
          <span className="text-xs md:text-sm font-bold text-[#173664] tracking-wider uppercase font-mono">
            @HALENELLA
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:HALENELLA@GMAIL.COM"
          onClick={(e) => {
            e.stopPropagation();
            if (onOpenInquiry) {
              e.preventDefault();
              onOpenInquiry();
            }
          }}
          className="flex items-center gap-2 group/link hover:translate-x-1 transition-transform"
        >
          <div className="w-6 h-6 rounded-full bg-slate-200 group-hover/link:bg-[#173664] group-hover/link:text-white flex items-center justify-center text-[#173664] text-xs transition-colors">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <span className="text-xs md:text-sm font-bold text-[#173664] tracking-wider uppercase font-mono">
            HALENELLA@GMAIL.COM
          </span>
        </a>
      </div>
    </article>
  );
}
