import { useState } from 'react';
import { PASSION, PROJECT_SPOTLIGHT } from '../../data/content';
import { IMAGES } from '../../data/images';
import { useUI } from '../../context/UIContext';
import { cn } from '../../lib/cn';
import { CircularText } from '../ui/CircularText';
import { Img } from '../ui/Img';
import { SectionHeader } from './SectionHeader';

export function PortfolioSection() {
  const { openProject, openCaseStudy } = useUI();
  const [filter, setFilter] = useState<string>('All');

  const projects = IMAGES.projects.map((p, index) => ({ ...p, index }));
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <CircularText tone="light" text="editing • visuals • case studies • " className="-top-24 -right-20 hidden w-80 md:block" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader tone="dark" face="condensed" kicker="03. Selected Works & Case Studies">PREVIOUS PROJECTS</SectionHeader>

          <div role="group" aria-label="Filter projects" className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 p-1 backdrop-blur-md">
            {PROJECT_SPOTLIGHT.categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn('cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all', filter === c ? 'bg-white font-bold text-navy shadow-sm' : 'text-white/80 hover:bg-white/10 hover:text-white')}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-8 lg:col-span-5">
            <div>
              <span className="mb-1 block font-mono text-[11px] font-bold tracking-wider text-yellow-300 uppercase">Client Spotlight</span>
              <h3 className="text-2xl leading-tight font-bold sm:text-3xl">Social Media For<br />{PROJECT_SPOTLIGHT.client}</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/85 sm:text-sm">{PROJECT_SPOTLIGHT.intro}</p>
              <ul className="mt-5 space-y-2.5 text-xs text-white/90">
                {PROJECT_SPOTLIGHT.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-sm text-yellow-300" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-6 font-mono text-xs">
              <span className="text-white/70">{PROJECT_SPOTLIGHT.reach}</span>
              <span className="font-bold text-yellow-300">{PROJECT_SPOTLIGHT.lift}</span>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-8 lg:col-span-7">
            <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <span className="block font-mono text-[11px] font-bold tracking-wider text-blue-300 uppercase">Passion Project · Creative Direction</span>
                <h4 className="font-condensed text-xl tracking-normal uppercase sm:text-2xl">{PASSION.title}</h4>
              </div>
              <button type="button" onClick={openCaseStudy} className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-white/20 px-3.5 py-1.5 text-xs font-bold transition-colors hover:bg-white/30">
                <span>Deep Dive Stills</span>
                <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
              </button>
            </div>

            <div className="my-auto py-2">
              <div className="relative mx-auto w-full max-w-xl rounded-t-xl border-2 border-slate-700 bg-[#1a1a1a] p-2 shadow-2xl sm:p-2.5">
                <div className="mx-auto mb-1.5 h-2.5 w-2.5 rounded-full bg-slate-600" />
                <div className="group relative aspect-16/10 overflow-hidden rounded bg-slate-900">
                  <Img alt="Lumière Beauty laptop mockup" src={IMAGES.laptopConcept} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-2 rounded bg-black/70 px-3 py-1 font-mono text-[11px] backdrop-blur-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" aria-hidden="true" />
                    <span>{PASSION.captionLong}</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto h-3.5 w-[104%] max-w-[620px] rounded-b-lg border-t border-slate-400 bg-slate-300 shadow-md">
                <div className="mx-auto h-1.5 w-20 rounded-b bg-slate-400" />
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/80">{PASSION.siteBlurb}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs font-semibold tracking-wider text-white/70 uppercase" aria-live="polite">
            Campaign Asset Gallery ({shown.length}) · Click any tile to inspect
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {shown.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => openProject(p.index)}
                aria-label={`Inspect ${p.title}`}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/5 text-left shadow-lg transition-all duration-300 hover:border-white/70 hover:shadow-2xl"
              >
                <Img alt={p.title} src={p.url} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="flex justify-end">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs backdrop-blur-md"><i className="fa-solid fa-magnifying-glass-plus" aria-hidden="true" /></span>
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] font-bold tracking-wider text-yellow-300 uppercase">{p.category}</span>
                    <span className="line-clamp-1 block text-sm font-bold">{p.title}</span>
                    <span className="mt-1 block font-mono text-[11px] text-white/80">{p.stats}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
