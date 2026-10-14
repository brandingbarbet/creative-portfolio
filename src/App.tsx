import { useCallback, useEffect, useRef, useState } from 'react';
import { PROFILE } from './data/content';
import { UIProvider } from './context/UIContext';
import { DeckToolbar } from './components/layout/DeckToolbar';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import type { ViewMode } from './components/layout/Navbar';
import { SlideGrid } from './components/deck/SlideGrid';
import { AboutSection } from './components/site/AboutSection';
import { BrandsSection } from './components/site/BrandsSection';
import { ContactSection } from './components/site/ContactSection';
import { ExperienceSection } from './components/site/ExperienceSection';
import { HeroSection } from './components/site/HeroSection';
import { PortfolioSection } from './components/site/PortfolioSection';
import { RatesSection } from './components/site/RatesSection';
import { SkillsSection } from './components/site/SkillsSection';
import { SocialsSection } from './components/site/SocialsSection';

export default function App() {
  const [mode, setMode] = useState<ViewMode>('website');
  const pending = useRef<string | null>(null);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /** Jump to a section; if it lives in the other view, switch first and scroll once it has rendered. */
  const goTo = useCallback((id: string) => {
    const isSlide = id.startsWith('slide-');
    const target: ViewMode = isSlide ? 'deck' : 'website';
    if (id !== 'hero' && target !== mode) {
      pending.current = id;
      setMode(target);
    } else {
      scrollToId(id);
    }
  }, [mode]);

  useEffect(() => {
    if (!pending.current) return;
    const id = pending.current;
    pending.current = null;
    requestAnimationFrame(() => scrollToId(id));
  }, [mode]);

  useEffect(() => {
    document.title = `${PROFILE.name} – Content Creator Portfolio & Media Kit`;
  }, []);

  return (
    <UIProvider>
      <div className="font-body flex min-h-screen flex-col bg-white">
        <Navbar mode={mode} onChangeMode={setMode} onScrollTo={goTo} />

        {mode === 'website' ? (
          <main className="flex-1">
            <HeroSection onExploreWork={() => goTo('work')} />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <SocialsSection />
            <BrandsSection />
            <ExperienceSection />
            <RatesSection />
            <ContactSection />
            <Footer onScrollTo={goTo} onOpenDeck={() => setMode('deck')} />
          </main>
        ) : (
          <div className="flex-1 px-2 py-3 md:px-4 md:py-4">
            <DeckToolbar />
            <SlideGrid />
            <footer className="no-print mx-auto mt-10 max-w-[1400px] border-t border-slate-200 py-6 text-xs text-slate-500">
              <div className="flex flex-col items-center justify-between gap-3 px-1 sm:flex-row">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-navy">{PROFILE.name.toUpperCase()}</span>
                  <span className="text-slate-400">·</span>
                  <span>{PROFILE.roleLine} ({PROFILE.handle})</span>
                </div>
                <button type="button" onClick={() => setMode('website')} className="cursor-pointer font-bold text-navy hover:underline">Switch to Website View →</button>
              </div>
            </footer>
          </div>
        )}
      </div>
    </UIProvider>
  );
}
