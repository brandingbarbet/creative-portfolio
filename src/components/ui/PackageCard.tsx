import type { Package } from '../../data/content';
import { packageLabel } from '../../data/content';
import { cn } from '../../lib/cn';

interface Props {
  pkg: Package;
  index: number;
  onSelect: (label: string) => void;
  /** "modal" uses the denser card from the Rate Card dialog. */
  variant?: 'section' | 'modal';
}

export function PackageCard({ pkg, index, onSelect, variant = 'section' }: Props) {
  const modal = variant === 'modal';
  return (
    <div
      className={cn(
        'flex flex-col justify-between border transition-all',
        modal ? 'rounded-xl p-5' : 'rounded-2xl p-6',
        pkg.popular
          ? cn('border-navy', modal ? 'bg-blue-50/40 shadow-md ring-1 ring-navy' : 'bg-blue-50/50 shadow-lg ring-2 ring-navy')
          : cn('border-slate-200 bg-white hover:border-slate-300', !modal && 'hover:shadow-md'),
      )}
    >
      <div>
        <div className={cn('flex items-center justify-between', modal ? 'mb-2' : 'mb-3')}>
          {modal && <h4 className="text-base font-bold text-navy">{pkg.title}</h4>}
          {pkg.popular ? (
            <span className="rounded-full bg-navy px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider text-white uppercase">
              {modal ? 'Most Requested' : 'Most Popular'}
            </span>
          ) : (
            !modal && (
              <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Tier 0{index + 1}
              </span>
            )
          )}
        </div>

        {!modal && <h3 className="mb-2 text-lg leading-snug font-bold text-navy">{pkg.title}</h3>}

        <div className={cn('flex items-baseline gap-2', modal ? 'mb-3' : 'mb-4')}>
          <span className={cn('text-navy', modal ? 'font-mono text-2xl font-black' : 'font-condensed text-3xl tracking-tight')}>
            {pkg.price}
          </span>
          <span className="text-[11px] text-slate-400 font-mono">/ {pkg.turnaround}</span>
        </div>

        <ul className={cn('text-xs text-slate-600', modal ? 'space-y-2' : 'mb-6 space-y-2.5')}>
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <i className="fa-solid fa-check mt-1 shrink-0 text-[10px] text-green-600" aria-hidden="true" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => onSelect(packageLabel(pkg))}
        className={cn(
          'flex w-full cursor-pointer items-center justify-center gap-1.5 text-xs font-bold transition-all',
          modal ? 'mt-5 rounded-lg py-2.5' : 'rounded-xl py-2.5',
          pkg.popular ? 'bg-navy text-white shadow-md hover:bg-navy-dark' : 'bg-slate-100 text-slate-800 hover:bg-slate-200',
        )}
      >
        <span>Select &amp; Inquire</span>
        <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
      </button>
    </div>
  );
}
