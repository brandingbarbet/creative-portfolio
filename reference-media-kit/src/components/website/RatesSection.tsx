import { PACKAGES } from '../../data/portfolioData';

interface RatesSectionProps {
  onSelectPackage: (pkgTitle: string) => void;
}

export function RatesSection({ onSelectPackage }: RatesSectionProps) {
  return (
    <section id="rates" className="py-20 sm:py-28 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#173664] font-bold block mb-2">
            07. Partnership Packages &amp; Deliverables
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#173664] tracking-tight font-body">
            Creator Rate Card
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
            Transparent pricing tailored for premium lifestyle, skincare, fashion, and tech brands. All rates include end-to-end production, scriptwriting, and performance analytics.
          </p>
        </div>

        {/* 4 Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'border-[#173664] bg-blue-50/50 shadow-lg ring-2 ring-[#173664]'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {pkg.popular ? (
                    <span className="text-[10px] font-extrabold bg-[#173664] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Tier 0{idx + 1}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#173664] leading-snug mb-2">
                  {pkg.title}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black font-condensed-impact text-[#173664] tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    / {pkg.turnaround}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-green-600 text-[10px] mt-1 shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectPackage(`${pkg.title} (${pkg.price})`)}
                className={`w-full py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  pkg.popular
                    ? 'bg-[#173664] hover:bg-blue-900 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <span>Select &amp; Inquire</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Guarantees & Terms */}
        <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-certificate text-blue-600"></i>
              <span className="font-semibold">Perpetual Ad Spark Authorization Available</span>
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-bolt text-blue-600"></i>
              <span className="font-semibold">Fast Turnaround (5–7 Business Days)</span>
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-shield-halved text-blue-600"></i>
              <span className="font-semibold">Strict Brand Category Exclusivity Options</span>
            </span>
          </div>
          <span className="font-mono text-slate-400 text-[11px]">
            Inquiries: HALENELLA@GMAIL.COM
          </span>
        </div>
      </div>
    </section>
  );
}
