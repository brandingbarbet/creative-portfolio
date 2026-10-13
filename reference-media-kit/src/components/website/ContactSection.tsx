import { useState } from 'react';

interface ContactSectionProps {
  onOpenBookingModal: () => void;
}

export function ContactSection({ onOpenBookingModal }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [packageType, setPackageType] = useState('TikTok & Short-Form Video ($4,200)');
  const [budget, setBudget] = useState('$5k - $10k');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('HALENELLA@GMAIL.COM');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F9FA] text-slate-800 border-t border-purple-200/60 relative overflow-hidden">
      {/* Decorative Watermarks */}
      <div className="circular-text text-purple-400/40 bottom-6 left-6 hidden md:block">
        editing it's vibing with visuals
      </div>
      <div className="circular-text text-purple-400/40 top-6 right-6 hidden md:block">
        it's not just editing • visuals &amp; collaborate
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Huge Headline & Social Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#173664] font-bold block mb-4">
                08. Let's Connect · Open for Bookings
              </span>

              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-condensed-impact tracking-tight text-[#173664] uppercase leading-[0.98] mb-8">
                LET'S WORK TOGETHER
                <br />
                AND CREATE
                <br />
                SOMETHING GREAT!
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mb-8">
                Have a campaign brief or creative concept in mind? Let's develop an authentic storytelling package that connects your brand with millions of engaged viewers.
              </p>
            </div>

            {/* Social Links & Direct Email Badge */}
            <div className="space-y-3 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-[#173664] shadow-xs transition-all group mr-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center text-sm shadow">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Instagram</span>
                  <span className="text-xs font-bold text-[#173664] font-mono group-hover:underline">@HALENELLA</span>
                </div>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-[#173664] shadow-xs transition-all group mr-3"
              >
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm shadow">
                  <i className="fa-brands fa-tiktok"></i>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">TikTok</span>
                  <span className="text-xs font-bold text-[#173664] font-mono group-hover:underline">@HALENELLA</span>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-[#173664] shadow-xs transition-all group cursor-pointer"
                title="Click to copy email address"
              >
                <div className="w-8 h-8 rounded-lg bg-[#173664] text-white flex items-center justify-center text-sm shadow">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Direct Inquiries</span>
                  <span className="text-xs font-bold text-[#173664] font-mono">
                    {emailCopied ? 'Copied to Clipboard!' : 'HALENELLA@GMAIL.COM'}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Proposal Submission Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#173664]">Inquiry Submitted!</h3>
                <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out! Hannah's team has received your project details and will review your campaign brief within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2.5 bg-[#173664] text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    Direct Campaign Inquiry Form
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#173664] tracking-tight">
                    Start a Partnership
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Brand / Agency Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chanel, Sony, Glossier"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Package
                      </label>
                      <select
                        value={packageType}
                        onChange={(e) => setPackageType(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                      >
                        <option value="TikTok & Short-Form Video ($4,200)">
                          TikTok Short-Form Video ($4,200)
                        </option>
                        <option value="Integrated Multi-Platform Story ($7,500)">
                          Multi-Platform Story ($7,500)
                        </option>
                        <option value="Seasonal Brand Ambassador ($18,500)">
                          Brand Ambassador ($18,500)
                        </option>
                        <option value="UGC Creative Asset Pack ($3,600)">
                          UGC Creative Asset Pack ($3,600)
                        </option>
                        <option value="Custom Campaign Scope">Custom Campaign Scope</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                      >
                        <option value="$3k - $5k">$3,000 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Goals &amp; Brief
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share your deliverables timeline, campaign theme, and product details..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#173664] bg-slate-50 focus:bg-white"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">
                      Response within 24 hours
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#173664] hover:bg-blue-900 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Send Campaign Proposal</span>
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
