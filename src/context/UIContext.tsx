import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ProjectModal } from '../components/modals/ProjectModal';
import { ReelModal } from '../components/modals/ReelModal';
import { BookingModal } from '../components/modals/BookingModal';
import { RateCardModal } from '../components/modals/RateCardModal';
import { CaseStudyModal } from '../components/modals/CaseStudyModal';
import { PresentationModal } from '../components/modals/PresentationModal';

interface UIActions {
  openProject: (index: number) => void;
  openReel: (index: number) => void;
  openBooking: (packageLabel?: string) => void;
  openRates: () => void;
  openCaseStudy: () => void;
  present: (slide?: number) => void;
}

const UIContext = createContext<UIActions | null>(null);

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used inside <UIProvider>');
  return ctx;
}

/** Owns every modal's open-state so no component needs prop-drilled callbacks. */
export function UIProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<number | null>(null);
  const [reel, setReel] = useState<number | null>(null);
  const [booking, setBooking] = useState<{ pkg?: string } | null>(null);
  const [rates, setRates] = useState(false);
  const [caseStudy, setCaseStudy] = useState(false);
  const [slide, setSlide] = useState<number | null>(null);

  const actions = useMemo<UIActions>(
    () => ({
      openProject: setProject,
      openReel: setReel,
      openBooking: (pkg) => setBooking({ pkg }),
      openRates: () => setRates(true),
      openCaseStudy: () => setCaseStudy(true),
      present: (n = 1) => setSlide(n),
    }),
    [],
  );

  const closeProject = useCallback(() => setProject(null), []);
  const closeReel = useCallback(() => setReel(null), []);

  return (
    <UIContext.Provider value={actions}>
      {children}

      {slide !== null && <PresentationModal slide={slide} onNavigate={setSlide} onClose={() => setSlide(null)} />}
      {project !== null && <ProjectModal index={project} onSelect={setProject} onClose={closeProject} />}
      {reel !== null && <ReelModal key={reel} index={reel} onSelect={setReel} onClose={closeReel} />}
      {rates && (
        <RateCardModal
          onClose={() => setRates(false)}
          onBook={(label) => {
            setRates(false);
            setBooking({ pkg: label });
          }}
        />
      )}
      {caseStudy && <CaseStudyModal onClose={() => setCaseStudy(false)} />}
      {booking && <BookingModal initialPackage={booking.pkg} onClose={() => setBooking(null)} />}
    </UIContext.Provider>
  );
}
