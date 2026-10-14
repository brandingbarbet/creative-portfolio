import { useState } from 'react';
import { EDUCATION, POLAROIDS, PROFILE, WATERMARKS } from '../../data/content';
import { IMAGES } from '../../data/images';
import { cn } from '../../lib/cn';
import { CircularText } from '../ui/CircularText';
import { Img } from '../ui/Img';
import { SectionHeader } from './SectionHeader';

const TILT = ['-rotate-6', 'rotate-4', '-rotate-2'];

export function AboutSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="about" className="relative overflow-hidden bg-paper py-20 text-slate-800 sm:py-28">
      <CircularText text={WATERMARKS[0]} className="-top-24 -left-24 w-80" />
      <CircularText text={WATERMARKS[2]} className="-right-24 -bottom-24 w-80" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeader kicker="01. Bio & Background" className="mb-14 max-w-xl">About me</SectionHeader>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-center sm:items-start lg:col-span-5">
            <div className="group relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Img alt="Hannah Elise studio portrait" src={IMAGES.aboutPhoto} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-slate-200 bg-white/90 p-3.5 shadow-lg backdrop-blur-md">
                <span className="block font-mono text-[10px] font-bold tracking-widest text-navy uppercase">Studio Headquarters</span>
                <span className="text-xs font-bold text-slate-800">{PROFILE.establishedLong}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <h3 className="mb-4 text-2xl leading-snug font-bold text-navy sm:text-3xl">
              Turning everyday moments into engaging, conversion-driven visual stories.
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              I'm <strong className="font-semibold text-navy">{PROFILE.name}</strong>, {PROFILE.bio[0]}
            </p>
            <p className="mb-8 text-xs leading-relaxed text-slate-500 sm:text-sm">{PROFILE.bio[1]}</p>

            <div className="mb-8 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="flex items-center gap-2 text-xs font-bold tracking-wider text-navy uppercase">
                  <i className="fa-solid fa-graduation-cap text-base" aria-hidden="true" />
                  <span>Education &amp; Academic Credentials</span>
                </span>
                <span className="font-mono text-xs text-slate-400">Harvard Alum</span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {EDUCATION.map((e) => (
                  <div key={e.year} className="border-l-2 border-navy pl-4">
                    <span className="block font-mono text-xl font-bold text-navy">{e.year}</span>
                    <span className="block text-xs font-bold text-slate-800">{e.school}</span>
                    <p className="mt-1 text-xs text-slate-500">{e.degree}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-3 block font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Snapshots from Harvard Campus · Click to expand
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {POLAROIDS.map((p, i) => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setActive(active === i ? null : i)}
                    aria-pressed={active === i}
                    title={p.desc}
                    className={cn(
                      'w-28 cursor-pointer rounded border border-slate-200 bg-white p-2 pb-5 shadow-md transition-all duration-300 sm:w-32',
                      active === i ? 'z-30 scale-125 rotate-0 shadow-2xl ring-2 ring-navy' : cn(TILT[i], 'hover:z-20 hover:scale-105 hover:rotate-0'),
                    )}
                  >
                    <Img alt={p.label} src={IMAGES[p.key]} className="h-24 w-full rounded-sm object-cover sm:h-28" />
                    <span className="mt-2 block text-center font-mono text-[9px] font-bold text-slate-700">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
