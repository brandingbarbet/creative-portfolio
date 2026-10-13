/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { DeckToolbar } from './components/DeckToolbar';

// Website View Components
import { HeroSection } from './components/website/HeroSection';
import { AboutSection } from './components/website/AboutSection';
import { SkillsSection } from './components/website/SkillsSection';
import { PortfolioSection } from './components/website/PortfolioSection';
import { SocialsSection } from './components/website/SocialsSection';
import { BrandsSection } from './components/website/BrandsSection';
import { ExperienceSection } from './components/website/ExperienceSection';
import { RatesSection } from './components/website/RatesSection';
import { ContactSection } from './components/website/ContactSection';
import { WebsiteFooter } from './components/website/WebsiteFooter';

// Deck View Components (10 Slide Grid)
import { Slide1Cover } from './components/slides/Slide1Cover';
import { Slide2About } from './components/slides/Slide2About';
import { Slide3Education } from './components/slides/Slide3Education';
import { Slide4Skills } from './components/slides/Slide4Skills';
import { Slide5PreviousProjects } from './components/slides/Slide5PreviousProjects';
import { Slide6Socials } from './components/slides/Slide6Socials';
import { Slide7Brands } from './components/slides/Slide7Brands';
import { Slide8Experience } from './components/slides/Slide8Experience';
import { Slide9PassionProject } from './components/slides/Slide9PassionProject';
import { Slide10Contact } from './components/slides/Slide10Contact';

// Interactive Modals
import { ProjectModal } from './components/modals/ProjectModal';
import { ReelModal } from './components/modals/ReelModal';
import { BookingModal } from './components/modals/BookingModal';
import { RateCardModal } from './components/modals/RateCardModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { SlidePresentationModal } from './components/modals/SlidePresentationModal';

export default function App() {
  // View mode: 'website' or 'deck'
  const [viewMode, setViewMode] = useState<'website' | 'deck'>('website');

  // Modal states
  const [activeSlidePresentation, setActiveSlidePresentation] = useState<number | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [selectedReelIndex, setSelectedReelIndex] = useState<number | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<string | undefined>();
  const [isRateCardOpen, setIsRateCardOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  // Smooth scroll handler
  const handleScrollToSection = (id: string) => {
    if (viewMode === 'deck' && id !== 'hero') {
      setViewMode('website');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (packageTitle?: string) => {
    setSelectedPackageForBooking(packageTitle);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EDEDED] flex flex-col font-body selection:bg-blue-200">
      {/* Top Header Navigation */}
      <Navbar
        currentViewMode={viewMode}
        onChangeViewMode={(mode) => setViewMode(mode)}
        onOpenRateCard={() => setIsRateCardOpen(true)}
        onOpenInquiry={() => handleOpenBooking()}
        onPresentSlideshow={() => setActiveSlidePresentation(1)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Viewport: Website Mode vs Slide Deck Mode */}
      {viewMode === 'website' ? (
        <main className="flex-1">
          {/* Section 0: Hero with vinyl player & floating tags */}
          <HeroSection
            onOpenBooking={() => handleOpenBooking()}
            onExploreWork={() => handleScrollToSection('work')}
          />

          {/* Section 1: About Me & Harvard Background */}
          <AboutSection />

          {/* Section 2: Skills & Creative Stack */}
          <SkillsSection />

          {/* Section 3: Selected Works & Case Studies Bento */}
          <PortfolioSection
            onSelectProject={(idx) => setSelectedProjectIndex(idx)}
            onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
          />

          {/* Section 4: Socials & Audience Insights */}
          <SocialsSection />

          {/* Section 5: Brand Partnerships & Video Reels Showcase */}
          <BrandsSection onSelectReel={(idx) => setSelectedReelIndex(idx)} />

          {/* Section 6: Working Experience Timeline */}
          <ExperienceSection />

          {/* Section 7: Creator Rate Card */}
          <RatesSection onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

          {/* Section 8: Let's Work Together & Proposal Form */}
          <ContactSection onOpenBookingModal={() => handleOpenBooking()} />

          {/* Website Footer */}
          <WebsiteFooter
            onScrollTo={handleScrollToSection}
            onOpenDeckMode={() => setViewMode('deck')}
          />
        </main>
      ) : (
        /* Pitch Deck View (2-Column Slide Cards layout from screenshots) */
        <div className="px-3 md:px-8 py-6 flex-1">
          <DeckToolbar
            onPresentDeck={() => setActiveSlidePresentation(1)}
            onOpenRateCard={() => setIsRateCardOpen(true)}
            onOpenInquiry={() => handleOpenBooking()}
          />

          <main
            className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
            data-purpose="portfolio-deck"
          >
            {/* Slide 1 */}
            <div id="slide-1" className="relative group/slide">
              <Slide1Cover onSlideClick={() => setActiveSlidePresentation(1)} />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(1)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 01
              </button>
            </div>

            {/* Slide 2 */}
            <div id="slide-2" className="relative group/slide">
              <Slide2About onSlideClick={() => setActiveSlidePresentation(2)} />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(2)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 02
              </button>
            </div>

            {/* Slide 3 */}
            <div id="slide-3" className="relative group/slide">
              <Slide3Education onSlideClick={() => setActiveSlidePresentation(3)} />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(3)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 03
              </button>
            </div>

            {/* Slide 4 */}
            <div id="slide-4" className="relative group/slide">
              <Slide4Skills onSlideClick={() => setActiveSlidePresentation(4)} />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(4)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 04
              </button>
            </div>

            {/* Slide 5 */}
            <div id="slide-5" className="relative group/slide">
              <Slide5PreviousProjects
                onSlideClick={() => setActiveSlidePresentation(5)}
                onSelectProject={(idx) => setSelectedProjectIndex(idx)}
              />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(5)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 05
              </button>
            </div>

            {/* Slide 6 */}
            <div id="slide-6" className="relative group/slide">
              <Slide6Socials onSlideClick={() => setActiveSlidePresentation(6)} />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(6)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 06
              </button>
            </div>

            {/* Slide 7 */}
            <div id="slide-7" className="relative group/slide">
              <Slide7Brands
                onSlideClick={() => setActiveSlidePresentation(7)}
                onSelectReel={(idx) => setSelectedReelIndex(idx)}
              />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(7)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 07
              </button>
            </div>

            {/* Slide 8 */}
            <div id="slide-8" className="relative group/slide">
              <Slide8Experience onSlideClick={() => setActiveSlidePresentation(8)} />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(8)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 08
              </button>
            </div>

            {/* Slide 9 */}
            <div id="slide-9" className="relative group/slide">
              <Slide9PassionProject
                onSlideClick={() => setActiveSlidePresentation(9)}
                onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
              />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(9)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 09
              </button>
            </div>

            {/* Slide 10 */}
            <div id="slide-10" className="relative group/slide">
              <Slide10Contact
                onSlideClick={() => setActiveSlidePresentation(10)}
                onOpenInquiry={() => handleOpenBooking()}
              />
              <button
                type="button"
                onClick={() => setActiveSlidePresentation(10)}
                className="absolute top-3 right-3 z-30 opacity-0 group-hover/slide:opacity-100 bg-black/40 hover:bg-black/70 text-white rounded-md px-2 py-1 text-[11px] font-mono transition-opacity no-print cursor-pointer"
              >
                <i className="fa-solid fa-expand mr-1"></i> Expand 10
              </button>
            </div>
          </main>

          {/* Footer in Deck View */}
          <footer className="mt-12 py-6 border-t border-slate-300 text-center text-xs text-slate-500 no-print">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#173664]">HANNAH ELISE</span>
                <span className="text-slate-400">·</span>
                <span>Content Creator, Video Editor &amp; Influencer (@halenella)</span>
              </div>
              <button
                type="button"
                onClick={() => setViewMode('website')}
                className="text-[#173664] font-bold hover:underline cursor-pointer"
              >
                Switch to Website View →
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* Interactive Modals */}
      <ProjectModal
        projectIndex={selectedProjectIndex}
        onClose={() => setSelectedProjectIndex(null)}
        onSelectProject={(idx) => setSelectedProjectIndex(idx)}
      />

      <ReelModal
        reelIndex={selectedReelIndex}
        onClose={() => setSelectedReelIndex(null)}
        onSelectReel={(idx) => setSelectedReelIndex(idx)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialPackage={selectedPackageForBooking}
      />

      <RateCardModal
        isOpen={isRateCardOpen}
        onClose={() => setIsRateCardOpen(false)}
        onBookPackage={(pkg) => handleOpenBooking(pkg)}
      />

      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />

      <SlidePresentationModal
        currentSlide={activeSlidePresentation}
        onClose={() => setActiveSlidePresentation(null)}
        onNavigate={(slideNum) => setActiveSlidePresentation(slideNum)}
        onSelectProject={(idx) => setSelectedProjectIndex(idx)}
        onSelectReel={(idx) => setSelectedReelIndex(idx)}
        onOpenInquiry={() => handleOpenBooking()}
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
      />
    </div>
  );
}
