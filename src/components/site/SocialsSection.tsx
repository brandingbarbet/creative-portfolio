import { AUDIENCE, SOCIALS } from '../../data/content';
import { IMAGES } from '../../data/images';
import { CircularText } from '../ui/CircularText';
import { Img } from '../ui/Img';
import { SectionHeader } from './SectionHeader';

export function SocialsSection() {
  const side = 'relative aspect-9/16 w-24 overflow-hidden rounded-2xl border-[3px] border-slate-700 bg-slate-900 shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:w-28 md:w-32';
  return (
    <section id="socials" className="relative overflow-hidden border-t border-slate-200 bg-paper py-20 text-slate-800 sm:py-28">
      <CircularText text="it's not just editing • visuals & audience • " className="-top-24 -right-20 hidden w-80 md:block" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeader face="condensed" kicker="04. Social Reach & Community" className="mb-14 max-w-xl">SOCIALS ACCOUNTS</SectionHeader>

        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex items-center justify-center gap-3 py-4 sm:gap-4 lg:col-span-7">
            <div className={side}>
              <Img alt="Social post 1" src={IMAGES.socialsMockup1} className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25"><i className="fa-regular fa-circle-play text-2xl text-white drop-shadow" aria-hidden="true" /></div>
            </div>
            <div className="relative z-10 aspect-9/18 w-28 -translate-y-4 overflow-hidden rounded-3xl border-4 border-slate-800 bg-black shadow-2xl transition-transform duration-300 hover:-translate-y-6 sm:w-36 md:w-40">
              <div className="absolute top-1.5 left-1/2 z-20 h-2 w-12 -translate-x-1/2 rounded-full bg-slate-700" />
              <Img alt="Social post 2" src={IMAGES.socialsMockup2} className="h-full w-full object-cover" />
            </div>
            <div className={side}>
              <Img alt="Social post 3" src={IMAGES.socialsMockup3} className="h-full w-full object-cover" />
              <span className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">0:45</span>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            {SOCIALS.map((s) => (
              <a key={s.platform} href={s.link} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-navy hover:shadow-md sm:p-6">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr text-base text-white shadow ${s.gradient}`}><i className={s.icon} aria-hidden="true" /></div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wider text-navy uppercase transition-colors group-hover:text-navy-dark">{s.platform}</h4>
                      <span className="font-mono text-xs text-slate-500">{s.handle}</span>
                    </div>
                  </div>
                  <span className="font-condensed text-lg tracking-tight text-navy sm:text-xl">{s.badge}</span>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs font-medium text-slate-600">
                  <span className="font-mono font-bold text-emerald-600"><i className="fa-solid fa-arrow-trend-up mr-1" aria-hidden="true" />{s.er}</span>
                  <span className="text-right text-slate-400">{s.demographics}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 md:grid-cols-4">
          {AUDIENCE.map((a) => (
            <div key={a.label}>
              <dt className="mb-1 block text-[11px] font-bold tracking-wider text-slate-400 uppercase">{a.label}</dt>
              <dd className="block font-mono text-xl font-bold text-navy">{a.value}</dd>
              <dd className="mt-0.5 block text-[11px] text-slate-500">{a.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
