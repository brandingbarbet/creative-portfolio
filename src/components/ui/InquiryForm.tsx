import { useId, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { BUDGETS, PACKAGES, PROFILE, TIMELINES, packageLabel } from '../../data/content';
import { cn } from '../../lib/cn';

interface Props {
  initialPackage?: string;
  /** Adds the "Target Timeline" field (booking dialog). */
  showTimeline?: boolean;
  /** Compact (dialog) vs roomy (contact section) field sizing. */
  size?: 'sm' | 'md';
  submitLabel: string;
  footnote: ReactNode;
  briefLabel: string;
  briefPlaceholder: string;
  briefRequired?: boolean;
  onSent: (info: { brand: string; email: string }) => void;
}

/**
 * Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree URL) to POST inquiries as JSON.
 * Without it the form opens a pre-filled email draft addressed to the creator.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export function InquiryForm({
  initialPackage,
  showTimeline,
  size = 'md',
  submitLabel,
  footnote,
  briefLabel,
  briefPlaceholder,
  briefRequired,
  onSent,
}: Props) {
  const uid = useId();
  const [brand, setBrand] = useState('');
  const [email, setEmail] = useState('');
  const [pkg, setPkg] = useState(initialPackage ?? packageLabel(PACKAGES[0]));
  const [budget, setBudget] = useState<string>(BUDGETS[1].value);
  const [timeline, setTimeline] = useState<string>(TIMELINES[1]);
  const [brief, setBrief] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const field = cn(
    'w-full border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-navy focus:outline-none',
    size === 'sm' ? 'rounded-lg px-3 py-2 text-xs' : 'rounded-xl px-3.5 py-2.5 text-xs',
  );
  const label = cn('mb-1 block text-xs text-slate-700', size === 'sm' ? 'font-semibold' : 'font-bold');

  const budgetSelect = (text: string) => (
    <div>
      <label htmlFor={`${uid}-budget`} className={label}>{text}</label>
      <select id={`${uid}-budget`} value={budget} onChange={(e) => setBudget(e.target.value)} className={field}>
        {BUDGETS.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
      </select>
    </div>
  );

  const options = PACKAGES.map(packageLabel);
  // keep a pre-selected package selectable even if it's not in the list
  const pkgOptions = options.includes(pkg) ? options : [pkg, ...options];

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError('');
    const payload = { brand, email, package: pkg, budget, timeline: showTimeline ? timeline : undefined, brief };

    if (ENDPOINT) {
      setBusy(true);
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
        onSent({ brand, email });
      } catch {
        setError(`Couldn't send right now. Please email ${PROFILE.email} directly.`);
      } finally {
        setBusy(false);
      }
      return;
    }

    const body = [
      `Brand / Agency: ${brand}`,
      `Work email: ${email}`,
      `Package: ${pkg}`,
      `Budget: ${budget}`,
      showTimeline ? `Timeline: ${timeline}` : '',
      '',
      brief,
    ]
      .filter((l, i) => l !== '' || i > 0)
      .join('\n');
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(`Partnership inquiry – ${brand}`)}&body=${encodeURIComponent(body)}`;
    onSent({ brand, email });
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <div>
          <label htmlFor={`${uid}-brand`} className={label}>Brand / Agency Name *</label>
          <input id={`${uid}-brand`} type="text" required placeholder="e.g. Glossier, Canon, Prada" value={brand} onChange={(e) => setBrand(e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={label}>Work Email *</label>
          <input id={`${uid}-email`} type="email" required placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
        </div>
      </div>

      <div className={cn('grid grid-cols-1 gap-3 sm:gap-4', !showTimeline && 'sm:grid-cols-2')}>
        <div>
          <label htmlFor={`${uid}-pkg`} className={label}>{showTimeline ? 'Deliverable Package Scope' : 'Preferred Package'}</label>
          <select id={`${uid}-pkg`} value={pkg} onChange={(e) => setPkg(e.target.value)} className={field}>
            {pkgOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            <option value="Custom Campaign Scope">Custom Campaign Scope</option>
          </select>
        </div>
        {!showTimeline && budgetSelect('Budget Range')}
      </div>

      {showTimeline && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {budgetSelect('Estimated Budget Range')}
          <div>
            <label htmlFor={`${uid}-timeline`} className={label}>Target Timeline</label>
            <select id={`${uid}-timeline`} value={timeline} onChange={(e) => setTimeline(e.target.value)} className={field}>
              {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor={`${uid}-brief`} className={label}>{briefLabel}</label>
        <textarea id={`${uid}-brief`} rows={3} required={briefRequired} placeholder={briefPlaceholder} value={brief} onChange={(e) => setBrief(e.target.value)} className={cn(field, 'p-3.5')} />
      </div>

      {error && <p role="alert" className="text-xs font-semibold text-red-600">{error}</p>}

      <div className="flex items-center justify-between gap-3 pt-2">
        <span className="text-[11px] text-slate-400">{footnote}</span>
        <button
          type="submit"
          disabled={busy}
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-navy px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-navy-dark disabled:opacity-60"
        >
          <span>{busy ? 'Sending…' : submitLabel}</span>
          <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
