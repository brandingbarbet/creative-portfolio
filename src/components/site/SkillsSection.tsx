import { SKILL_PILLARS, TOOLS } from '../../data/content';
import { IMAGES } from '../../data/images';
import { Img } from '../ui/Img';
import { SectionHeader } from './SectionHeader';

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-200 bg-white py-20 text-slate-800 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <SectionHeader kicker="02. Capabilities & Stack">Skills &amp; Expertise</SectionHeader>

          <ul className="flex flex-wrap items-center gap-2.5">
            {TOOLS.map((t) => (
              <li key={t.name} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold shadow-xs">
                {'short' in t && <span className="flex h-6 w-6 items-center justify-center rounded text-[11px] font-bold" style={{ background: t.bg, color: t.fg }}>{t.short}</span>}
                {'label' in t && <span className="rounded px-2 py-0.5 text-[11px] font-bold" style={{ background: t.bg, color: t.fg }}>{t.label}</span>}
                {'icon' in t && <i className={`${t.icon} text-base`} style={{ color: t.iconColor }} aria-hidden="true" />}
                <span className="text-slate-700">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col items-center justify-center lg:col-span-5">
            <div className="group relative h-64 w-64 overflow-hidden rounded-full border-8 border-paper shadow-2xl sm:h-80 sm:w-80">
              <Img alt="Hannah Elise with camera" src={IMAGES.skillsCamera} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent pb-6 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-black/50 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm">Sony A7IV · G-Master Glass</span>
              </div>
            </div>
            <span className="mt-4 font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">Production Standard: 4K 60FPS Cinema</span>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {SKILL_PILLARS.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-slate-200/80 bg-paper p-6 transition-all hover:border-navy hover:shadow-md sm:p-7">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-navy sm:text-xl">{p.title}</h3>
                  <span className="font-mono text-xs font-semibold text-slate-400">0{i + 1}</span>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-slate-600 sm:text-sm">{p.desc}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => <span key={t} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
