import { useState } from 'react';
import { IMAGES } from '../../data/portfolioData';

interface PortfolioSectionProps {
  onSelectProject: (idx: number) => void;
  onOpenCaseStudy: () => void;
}

export function PortfolioSection({ onSelectProject, onOpenCaseStudy }: PortfolioSectionProps) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Product Spotlight', 'Tutorial Video', 'Editorial Stills', 'Brand Story'];

  const filteredProjects =
    filter === 'All'
      ? IMAGES.projects
      : IMAGES.projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#173664] text-white relative overflow-hidden">
      <div className="circular-text text-white/20 top-12 right-12 hidden md:block">
        editing • visuals • case studies
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70 font-bold block mb-2">
              03. Selected Works &amp; Case Studies
            </span>
            <h2 className="text-4xl sm:text-6xl font-condensed-impact tracking-normal uppercase text-white leading-none">
              PREVIOUS PROJECTS
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/10 rounded-xl backdrop-blur-md border border-white/15">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-white text-[#173664] shadow-sm font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Dual-Spotlight Bento: Velora Beauty & Lumière Beauty Laptop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Spotlight 1: Velora Beauty Narrative Card */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 flex flex-col justify-between">
            <div>
              <span className="text-[11px] tracking-wider uppercase text-yellow-300 font-mono font-bold block mb-1">
                Client Spotlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Social Media For
                <br />
                VELORA BEAUTY
              </h3>
              <p className="text-xs sm:text-sm text-white/85 mt-3 leading-relaxed">
                Omnichannel campaign launch covering product unboxing, skincare tutorial reels, and high-converting educational infographics.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs text-white/90">
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-yellow-300 text-sm mt-0.5 shrink-0"></i>
                  <span>Created engaging social media content aligned with the brand's visual identity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-yellow-300 text-sm mt-0.5 shrink-0"></i>
                  <span>Planned and developed content for Instagram and other social platforms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-yellow-300 text-sm mt-0.5 shrink-0"></i>
                  <span>Created reels, posts, and educational graphics to increase engagement.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono">
              <span className="text-white/70">5.2M Total Campaign Reach</span>
              <span className="text-yellow-300 font-bold">+184% Inbound Leads</span>
            </div>
          </div>

          {/* Spotlight 2: Passion Project Laptop Concept Screen */}
          <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-[11px] tracking-wider uppercase text-blue-300 font-mono font-bold block">
                  Passion Project · Creative Direction
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white uppercase font-condensed-impact tracking-normal">
                  LUMIÈRE BEAUTY CONCEPT
                </h4>
              </div>
              <button
                type="button"
                onClick={onOpenCaseStudy}
                className="text-xs font-bold bg-white/20 hover:bg-white/30 text-white px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Deep Dive Stills</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>

            {/* Laptop Screen Realistic Frame */}
            <div className="my-auto py-2">
              <div className="w-full max-w-xl mx-auto bg-[#1A1A1A] p-2 sm:p-2.5 rounded-t-xl border-2 border-slate-700 shadow-2xl relative">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600 mx-auto mb-1.5"></div>
                <div className="aspect-16/10 bg-slate-900 rounded overflow-hidden relative group">
                  <img
                    alt="Lumiere Beauty Laptop Mockup"
                    referrerPolicy="no-referrer"
                    src={IMAGES.laptopConcept}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-sm text-[11px] px-3 py-1 rounded text-white font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Lumière Beauty Cam 01 · 4K Rec</span>
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="w-[104%] max-w-[620px] mx-auto h-3.5 bg-slate-300 rounded-b-lg shadow-md border-t border-slate-400 relative">
                <div className="w-20 h-1.5 bg-slate-400 mx-auto rounded-b"></div>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed mt-4">
              Developed an organic social media concept focused on tactile visual identity, raw textures, and product storytelling across modern platforms.
            </p>
          </div>
        </div>

        {/* 9-Item Media Grid (Hover Zoom + Lightbox Click) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-white/70 font-semibold">
              Campaign Asset Gallery ({filteredProjects.length}) · Click any tile to inspect
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id - 1)}
                className="aspect-square rounded-2xl overflow-hidden border border-white/20 bg-white/5 relative group cursor-pointer hover:border-white/70 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <img
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  src={project.url}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center text-xs">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-yellow-300 tracking-wider font-mono block">
                      {project.category}
                    </span>
                    <h5 className="text-sm font-bold text-white line-clamp-1">
                      {project.title}
                    </h5>
                    <span className="text-[11px] text-white/80 font-mono mt-1 block">
                      {project.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
