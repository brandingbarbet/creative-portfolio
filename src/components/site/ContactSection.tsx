import { useState } from 'react';
import { PROFILE, SOCIALS, WATERMARKS } from '../../data/content';
import { useCopy } from '../../hooks/useCopy';
import { CircularText } from '../ui/CircularText';
import { InquiryForm } from '../ui/InquiryForm';

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const { copied, copy } = useCopy();
  const card = 'group mr-3 inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xs transition-all hover:border-navy';

  return (
    <section id="contact" className="relative overflow-hidden border-t border-purple-200/60 bg-paper py-20 text-slate-800 sm:py-28">
      <CircularText tone="lavender" text={WATERMARKS[0]} className="-bottom-24 -left-24 hidden w-96 md:block" />
      <CircularText tone="lavender" text={WATERMARKS[1]} className="-top-24 -right-24 hidden w-96 md:block" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <span className="mb-4 block font-mono text-xs font-bold tracking-[0.2em] text-navy uppercase">08. Let's Connect · Open for Bookings</span>
              <h2 className="font-condensed mb-8 text-5xl leading-[0.98] tracking-tight text-navy uppercase sm:text-7xl lg:text-8xl">
                LET'S WORK TOGETHER<br />AND CREATE<br />SOMETHING GREAT!
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                Have a campaign brief or creative concept in mind? Let's develop an authentic storytelling package that connects your brand with millions of engaged viewers.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <a href={SOCIALS[0].link} target="_blank" rel="noopener noreferrer" className={card}>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-sm text-white shadow"><i className="fa-brands fa-instagram" aria-hidden="true" /></span>
                <span>
                  <span className="block font-mono text-[10px] font-bold text-slate-400 uppercase">Instagram</span>
                  <span className="font-mono text-xs font-bold text-navy group-hover:underline">{PROFILE.handle.toUpperCase()}</span>
                </span>
              </a>
              <a href={SOCIALS[1].link} target="_blank" rel="noopener noreferrer" className={card}>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-sm text-white shadow"><i className="fa-brands fa-tiktok" aria-hidden="true" /></span>
                <span>
                  <span className="block font-mono text-[10px] font-bold text-slate-400 uppercase">TikTok</span>
                  <span className="font-mono text-xs font-bold text-navy group-hover:underline">{PROFILE.handle.toUpperCase()}</span>
                </span>
              </a>
              <button type="button" onClick={() => copy(PROFILE.email)} title="Click to copy email address" className="group inline-flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xs transition-all hover:border-navy">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-sm text-white shadow"><i className="fa-regular fa-envelope" aria-hidden="true" /></span>
                <span className="text-left">
                  <span className="block font-mono text-[10px] font-bold text-slate-400 uppercase">Direct Inquiries</span>
                  <span className="font-mono text-xs font-bold text-navy" aria-live="polite">{copied ? 'Copied to Clipboard!' : PROFILE.email}</span>
                </span>
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl sm:p-10 lg:col-span-6">
            {sent ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600 shadow-sm"><i className="fa-solid fa-check" aria-hidden="true" /></div>
                <h3 className="text-2xl font-bold text-navy">Inquiry Ready!</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                  Send the pre-filled message from your mail app and Hannah's team will review your campaign brief within 24 hours.
                </p>
                <button type="button" onClick={() => setSent(false)} className="mt-6 cursor-pointer rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-navy-dark">Send Another Message</button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="mb-1 block text-[11px] font-bold tracking-wider text-blue-600 uppercase">Direct Campaign Inquiry Form</span>
                  <h3 className="text-2xl font-extrabold tracking-tight text-navy">Start a Partnership</h3>
                </div>
                <InquiryForm
                  submitLabel="Send Campaign Proposal"
                  briefLabel="Project Goals & Brief"
                  briefPlaceholder="Share your deliverables timeline, campaign theme, and product details..."
                  briefRequired
                  footnote={<span className="font-mono">Response within 24 hours</span>}
                  onSent={() => setSent(true)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
