import { PROFILE } from '../../data/content';

interface Props {
  onScrollTo: (id: string) => void;
  onOpenDeck: () => void;
}

const LINKS = [
  ['hero', 'Home'],
  ['about', 'About'],
  ['work', 'Selected Works'],
  ['socials', 'Socials'],
  ['rates', 'Rates'],
] as const;

export function Footer({ onScrollTo, onOpenDeck }: Props) {
  return (
    <footer className="border-t border-white/10 bg-navy px-4 py-12 text-white sm:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <span className="font-body text-xl font-extrabold tracking-tight">{PROFILE.name.toUpperCase()}</span>
          <span className="hidden text-white/30 sm:inline">·</span>
          <span className="text-xs text-white/70">{PROFILE.roleLine} ({PROFILE.handle})</span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-white/80">
          {LINKS.map(([id, label]) => (
            <button key={id} type="button" onClick={() => onScrollTo(id)} className="cursor-pointer transition-colors hover:text-white">{label}</button>
          ))}
          <button type="button" onClick={onOpenDeck} className="cursor-pointer font-bold text-yellow-300 transition-colors hover:text-yellow-200">View Slide Deck</button>
        </nav>

        <div className="text-center font-mono text-xs text-white/60 md:text-right">
          <span>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <div className="mt-1">
            <a href={`mailto:${PROFILE.email}`} className="text-white/80 underline transition-colors hover:text-white">{PROFILE.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
