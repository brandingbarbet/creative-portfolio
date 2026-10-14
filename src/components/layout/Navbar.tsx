import { PROFILE } from '../../data/content';
import { useUI } from '../../context/UIContext';
import { cn } from '../../lib/cn';

export type ViewMode = 'website' | 'deck';

interface Props {
  mode: ViewMode;
  onChangeMode: (m: ViewMode) => void;
  onScrollTo: (id: string) => void;
}

const SITE_LINKS = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['work', 'Selected Works'],
  ['socials', 'Social Reach'],
  ['brands', 'Brands'],
] as const;

const DECK_LINKS = [
  ['slide-1', 'Overview'],
  ['slide-2', 'About'],
  ['slide-5', 'Projects'],
  ['slide-6', 'Audience'],
] as const;

export function Navbar({ mode, onChangeMode, onScrollTo }: Props) {
  const { openRates, openBooking, present } = useUI();
  const link = 'shrink-0 cursor-pointer whitespace-nowrap transition-colors hover:text-navy';
  const seg = (m: ViewMode) =>
    cn('cursor-pointer rounded-md px-2.5 py-1 transition-all', mode === m ? 'bg-white font-bold text-navy shadow-xs' : 'hover:text-slate-900');

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 px-4 py-3.5 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 lg:gap-8">
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo('hero');
            }}
            className="font-body flex shrink-0 items-center gap-2 text-lg font-extrabold tracking-tight whitespace-nowrap text-navy sm:text-xl"
          >
            <span>{PROFILE.name.toUpperCase()}</span>
            <span className="hidden font-mono text-xs font-normal text-slate-500 sm:inline">/ {PROFILE.handle.toUpperCase()}</span>
          </a>

          <div role="group" aria-label="View mode" className="hidden items-center rounded-lg border border-slate-300 bg-slate-200/80 p-0.5 text-[11px] font-semibold text-slate-600 xl:flex">
            <button type="button" aria-pressed={mode === 'website'} onClick={() => onChangeMode('website')} className={seg('website')}>
              <i className="fa-solid fa-globe mr-1 text-[10px]" aria-hidden="true" /> Website View
            </button>
            <button type="button" aria-pressed={mode === 'deck'} onClick={() => onChangeMode('deck')} className={seg('deck')}>
              <i className="fa-solid fa-table-cells mr-1 text-[10px]" aria-hidden="true" /> Pitch Deck View
            </button>
          </div>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-5 text-xs font-semibold text-slate-600 md:flex lg:gap-6">
          {(mode === 'website' ? SITE_LINKS : DECK_LINKS).map(([id, label]) => (
            <button key={id} type="button" onClick={() => onScrollTo(id)} className={link}>{label}</button>
          ))}
          <button type="button" onClick={openRates} className={cn(link, 'text-blue-700')}>Rate Card</button>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => onChangeMode(mode === 'website' ? 'deck' : 'website')}
            title="Toggle Website / Deck View"
            className="shrink-0 cursor-pointer rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap text-slate-700 shadow-xs transition-colors hover:bg-slate-50 xl:hidden"
          >
            <i className={`fa-solid ${mode === 'website' ? 'fa-table-cells' : 'fa-globe'} mr-1`} aria-hidden="true" />
            <span>{mode === 'website' ? 'Deck' : 'Site'}</span>
          </button>

          <button
            type="button"
            onClick={() => present(1)}
            title="Open presentation slideshow"
            className="hidden shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-navy shadow-xs transition-colors hover:bg-slate-50 sm:flex"
          >
            <i className="fa-solid fa-play text-[10px]" aria-hidden="true" />
            <span>Present Deck</span>
          </button>

          <button
            type="button"
            onClick={() => openBooking()}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-navy px-3.5 py-1.5 text-xs font-bold whitespace-nowrap text-white shadow-sm transition-colors hover:bg-navy-dark sm:px-4"
          >
            <i className="fa-regular fa-paper-plane text-[10px]" aria-hidden="true" />
            <span>Book Collaboration</span>
          </button>
        </div>
      </div>
    </header>
  );
}
