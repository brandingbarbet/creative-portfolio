import { EXPERIENCE } from '../../data/content';
import { cn } from '../../lib/cn';
import { CircularText } from '../ui/CircularText';

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-slate-200 bg-paper py-20 text-slate-800 sm:py-28">
      <CircularText text="it's not just editing • visuals & career • " className="-top-24 -right-20 hidden w-80 md:block" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-16 max-w-xl">
          <span className="mb-2 block font-mono text-xs font-bold tracking-[0.2em] text-navy uppercase">06. Career Timeline & Roles</span>
          <h2 className="font-condensed text-4xl leading-none tracking-normal text-navy uppercase sm:text-6xl">WORKING<br />EXPERIENCE</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {EXPERIENCE.map((e, i) => (
            <article key={e.year} className={cn('flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:border-navy hover:shadow-md sm:p-8', i > 0 && 'md:border-l-2 md:border-l-navy')}>
              <div>
                <span className="font-condensed block text-2xl tracking-tight text-navy sm:text-3xl">{e.year}</span>
                <span className="font-body mt-2 block text-xs font-extrabold tracking-wider text-navy uppercase sm:text-sm">{e.roleLines.join(' ')}</span>
                <span className="mb-4 block font-mono text-xs font-semibold text-slate-400">{e.company}</span>
                <p className="mb-6 text-xs leading-relaxed font-normal text-slate-600 sm:text-sm">{e.description}</p>
              </div>
              <ul className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                {e.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <i className="fa-solid fa-check mt-1 shrink-0 text-[10px] text-green-600" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
