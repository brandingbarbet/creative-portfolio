import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export function BookingModal({ isOpen, onClose, initialPackage }: BookingModalProps) {
  if (!isOpen) return null;

  const [brandName, setBrandName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState(
    initialPackage || 'TikTok & Short-Form Video ($4,200)'
  );
  const [budgetRange, setBudgetRange] = useState('$5k - $10k');
  const [timeline, setTimeline] = useState('Within 30 Days');
  const [projectBrief, setProjectBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative border border-slate-200 text-slate-800"
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

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#173664] tracking-tight">
              Inquiry Received!
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-800">{brandName || 'partner'}</strong>!
              Hannah's management team will review your proposal and respond to{' '}
              <span className="font-mono text-slate-700">{contactEmail || 'your email'}</span>{' '}
              within 24 hours with our full media kit and availability.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 bg-[#173664] hover:bg-blue-900 text-white font-semibold text-xs rounded-xl shadow transition-all cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Partnership Inquiry · 2026 Season
              </span>
              <h3 className="text-2xl font-extrabold text-[#173664] tracking-tight">
                Work With Hannah Elise
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Reach over 5.8M+ dedicated lifestyle, beauty &amp; tech community members.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Brand / Agency Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Glossier, Canon, Prada"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="brand@domain.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Deliverable Package Scope
                </label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                >
                  <option value="TikTok & Short-Form Video ($4,200)">
                    TikTok &amp; Short-Form Video ($4,200)
                  </option>
                  <option value="Integrated Multi-Platform Story ($7,500)">
                    Integrated Multi-Platform Story ($7,500)
                  </option>
                  <option value="Seasonal Brand Ambassador ($18,500)">
                    Seasonal Brand Ambassador ($18,500)
                  </option>
                  <option value="UGC Creative Asset Pack ($3,600)">
                    UGC Creative Asset Pack ($3,600)
                  </option>
                  <option value="Custom Project Scope">Custom Project Scope</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                  >
                    <option value="$3k - $5k">$3,000 - $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                  >
                    <option value="Urgent (Next 7-14 Days)">Urgent (Next 7-14 Days)</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="Q3 / Q4 Campaign">Upcoming Quarter Campaign</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Overview / Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your product, campaign message, and creative wishes..."
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  <i className="fa-solid fa-lock text-[9px] mr-1"></i> NDA Protected
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#173664] hover:bg-blue-900 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
