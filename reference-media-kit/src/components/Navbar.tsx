interface NavbarProps {
  currentViewMode: 'website' | 'deck';
  onChangeViewMode: (mode: 'website' | 'deck') => void;
  onOpenRateCard: () => void;
  onOpenInquiry: () => void;
  onPresentSlideshow: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export function Navbar({
  currentViewMode,
  onChangeViewMode,
  onOpenRateCard,
  onOpenInquiry,
  onPresentSlideshow,
  onScrollToSection,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#EDEDED]/92 backdrop-blur-md border-b border-slate-300/80 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onScrollToSection('hero');
            }}
            className="text-lg sm:text-xl font-extrabold tracking-tight text-[#173664] whitespace-nowrap shrink-0 font-body flex items-center gap-2"
          >
            <span>HANNAH ELISE</span>
            <span className="text-xs font-mono font-normal text-slate-500 hidden sm:inline">
              / @HALENELLA
            </span>
          </a>

          {/* Segmented View Mode Switcher */}
          <div className="hidden xl:flex items-center bg-slate-200/80 p-0.5 rounded-lg border border-slate-300 text-[11px] font-semibold text-slate-600">
            <button
              type="button"
              onClick={() => onChangeViewMode('website')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                currentViewMode === 'website'
                  ? 'bg-white text-[#173664] shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-globe mr-1 text-[10px]"></i>
              Website View
            </button>
            <button
              type="button"
              onClick={() => onChangeViewMode('deck')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                currentViewMode === 'deck'
                  ? 'bg-white text-[#173664] shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-table-cells mr-1 text-[10px]"></i>
              Pitch Deck View
            </button>
          </div>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs font-semibold text-slate-600">
          {currentViewMode === 'website' ? (
            <>
              <button
                type="button"
                onClick={() => onScrollToSection('about')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('skills')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Skills
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('work')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Selected Works
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('socials')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Social Reach
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('brands')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Brands
              </button>
              <button
                type="button"
                onClick={onOpenRateCard}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-blue-700"
              >
                Rate Card
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onScrollToSection('slide-1')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('slide-2')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('slide-5')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Projects
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('slide-6')}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Audience
              </button>
              <button
                type="button"
                onClick={onOpenRateCard}
                className="hover:text-[#173664] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-blue-700"
              >
                Rate Card
              </button>
            </>
          )}
        </nav>

        {/* Zone 3: Primary action button + quick modes */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Mobile view toggle */}
          <button
            type="button"
            onClick={() => onChangeViewMode(currentViewMode === 'website' ? 'deck' : 'website')}
            className="xl:hidden px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
            title="Toggle Website / Deck View"
          >
            <i className={`fa-solid ${currentViewMode === 'website' ? 'fa-table-cells' : 'fa-globe'} mr-1`}></i>
            <span>{currentViewMode === 'website' ? 'Deck' : 'Site'}</span>
          </button>

          <button
            type="button"
            onClick={onPresentSlideshow}
            className="hidden sm:flex px-3 py-1.5 text-xs font-semibold text-[#173664] bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer items-center gap-1.5 shadow-xs"
            title="Open presentation slideshow"
          >
            <i className="fa-solid fa-play text-[10px]"></i>
            <span>Present Deck</span>
          </button>

          <button
            type="button"
            onClick={onOpenInquiry}
            className="px-3.5 sm:px-4 py-1.5 text-xs font-bold text-white bg-[#173664] rounded-lg hover:bg-blue-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <i className="fa-regular fa-paper-plane text-[10px]"></i>
            <span>Book Collaboration</span>
          </button>
        </div>
      </div>
    </header>
  );
}
