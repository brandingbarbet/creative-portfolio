import { PROFILE, STATS } from '../../data/content';
import { useUI } from '../../context/UIContext';
import { useCopy } from '../../hooks/useCopy';
import { useVinyl } from '../../hooks/useVinyl';
import { cn } from '../../lib/cn';

export function DeckToolbar() {
  const { present, openRates } = useUI();
  const { playing, toggle } = useVinyl();
  const { copied, copy } = useCopy(2200);
  const btn =
    'flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100';

  return (
    <div className="no-print mx-auto mb-3 max-w-[1400px] md:mb-4">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="font-mono font-bold text-navy">{STATS[0].value}</span>
            <span className="text-slate-500">{STATS[0].short}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono font-bold text-navy">{STATS[1].value}</span>
            <span className="text-slate-500">{STATS[1].short}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-graduation-cap text-slate-400" aria-hidden="true" />
            <span className="font-medium">{STATS[3].short}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-location-dot text-slate-400" aria-hidden="true" />
            <span className="font-medium">NYC &amp; Los Angeles</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={toggle}
            aria-pressed={playing}
            title="Vinyl Music: The 1975 Ambient Lofi Progression"
            className={cn(btn, playing && 'border-amber-300 bg-amber-50 text-amber-900 shadow-sm hover:bg-amber-50')}
          >
            <i className={cn('fa-solid fa-compact-disc', playing ? 'animate-spin-slow text-amber-600' : 'text-slate-400')} aria-hidden="true" />
            <span>{playing ? 'Vinyl Playing ♪' : 'Play Vinyl Track'}</span>
          </button>
          <button type="button" onClick={openRates} className={btn}>
            <i className="fa-solid fa-file-invoice-dollar text-slate-400" aria-hidden="true" />
            <span>Rates &amp; Packages</span>
          </button>
          <button
            type="button"
            onClick={() => present(1)}
            className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-navy-dark"
          >
            <i className="fa-solid fa-expand text-[10px]" aria-hidden="true" />
            <span>Present Slides</span>
          </button>
          <button type="button" onClick={() => window.print()} title="Print or Save as PDF" aria-label="Print or save as PDF" className={cn(btn, 'px-2.5 font-medium')}>
            <i className="fa-solid fa-print" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => copy(window.location.href)} title={`Copy ${PROFILE.name} media kit link`} aria-label="Copy media kit link" className={cn(btn, 'px-2.5 font-medium')}>
            <i className={`fa-solid ${copied ? 'fa-check text-green-600' : 'fa-share-nodes'}`} aria-hidden="true" />
            {copied && <span className="text-[10px] font-semibold text-green-600">Copied!</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
