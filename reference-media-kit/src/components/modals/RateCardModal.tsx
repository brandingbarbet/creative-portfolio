import { PACKAGES } from '../../data/portfolioData';

interface RateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookPackage: (packageTitle: string) => void;
}

export function RateCardModal({ isOpen, onClose, onBookPackage }: RateCardModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full p-6 md:p-8 shadow-2xl relative border border-slate-200 text-slate-800 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        <div className="mb-6 text-center max-w-lg mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
            2026 / 2027 Official Partnership Guide
          </span>
          <h3 className="text-3xl font-extrabold text-[#173664] tracking-tight">
            Creator Rate Card &amp; Deliverables
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Transparent packages tailored for high-impact brand awareness, authentic UGC, and high-retention social performance.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'border-[#173664] bg-blue-50/40 shadow-md ring-1 ring-[#173664]'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-[#173664]">{pkg.title}</h4>
                  {pkg.popular && (
                    <span className="text-[10px] font-extrabold bg-[#173664] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Most Requested
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-[#173664] font-mono">
                    {pkg.price}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    / {pkg.turnaround}
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
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
                onClick={() => {
                  onBookPackage(`${pkg.title} (${pkg.price})`);
                  onClose();
                }}
                className={`mt-5 w-full py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  pkg.popular
                    ? 'bg-[#173664] hover:bg-blue-900 text-white shadow'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <span>Select &amp; Inquire</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-4">
            <span>
              <i className="fa-solid fa-circle-check text-blue-600 mr-1"></i> 100% Organic &amp; Brand Safe
            </span>
            <span>
              <i className="fa-solid fa-camera text-blue-600 mr-1"></i> 4K Cinema Production
            </span>
          </div>
          <span className="font-mono text-slate-400 text-[11px]">
            Inquiries: HALENELLA@GMAIL.COM
          </span>
        </div>
      </div>
    </div>
  );
}
