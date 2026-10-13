interface WebsiteFooterProps {
  onScrollTo: (id: string) => void;
  onOpenDeckMode: () => void;
}

export function WebsiteFooter({ onScrollTo, onOpenDeckMode }: WebsiteFooterProps) {
  return (
    <footer className="bg-[#173664] text-white py-12 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Creator Bio */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-xl font-extrabold tracking-tight font-body">
            HANNAH ELISE
          </span>
          <span className="text-white/30 hidden sm:inline">·</span>
          <span className="text-xs text-white/70">
            Content Creator, Video Editor &amp; Influencer (@halenella)
          </span>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/80 font-medium">
          <button
            type="button"
            onClick={() => onScrollTo('hero')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => onScrollTo('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => onScrollTo('work')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Selected Works
          </button>
          <button
            type="button"
            onClick={() => onScrollTo('socials')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Socials
          </button>
          <button
            type="button"
            onClick={() => onScrollTo('rates')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Rates
          </button>
          <button
            type="button"
            onClick={onOpenDeckMode}
            className="text-yellow-300 hover:text-yellow-200 transition-colors cursor-pointer font-bold"
          >
            View Slide Deck
          </button>
        </div>

        {/* Copyright & Direct Email */}
        <div className="text-xs text-white/60 font-mono text-center md:text-right">
          <span>&copy; 2026 Hannah Elise. All rights reserved.</span>
          <div className="mt-1">
            <a
              href="mailto:HALENELLA@GMAIL.COM"
              className="text-white/80 hover:text-white transition-colors underline"
            >
              HALENELLA@GMAIL.COM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
