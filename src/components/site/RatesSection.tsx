import { PACKAGES, PROFILE } from '../../data/content';
import { useUI } from '../../context/UIContext';
import { PackageCard } from '../ui/PackageCard';
import { SectionHeader } from './SectionHeader';

export function RatesSection() {
  const { openBooking } = useUI();
  return (
    <section id="rates" className="border-t border-slate-200 bg-white py-20 text-slate-800 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionHeader align="center" kicker="07. Partnership Packages & Deliverables">Creator Rate Card</SectionHeader>
          <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-sm">
            Transparent pricing tailored for premium lifestyle, skincare, fashion, and tech brands. All rates include end-to-end production, scriptwriting, and performance analytics.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p, i) => <PackageCard key={p.title} pkg={p} index={i} onSelect={openBooking} />)}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-paper p-6 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-6">
            {[
              ['fa-certificate', 'Perpetual Ad Spark Authorization Available'],
              ['fa-bolt', 'Fast Turnaround (5–7 Business Days)'],
              ['fa-shield-halved', 'Strict Brand Category Exclusivity Options'],
            ].map(([icon, text]) => (
              <span key={text} className="flex items-center gap-2">
                <i className={`fa-solid ${icon} text-blue-600`} aria-hidden="true" />
                <span className="font-semibold">{text}</span>
              </span>
            ))}
          </div>
          <span className="font-mono text-[11px] text-slate-400">Inquiries: {PROFILE.email}</span>
        </div>
      </div>
    </section>
  );
}
