import { PACKAGES, PROFILE } from '../../data/content';
import { PackageCard } from '../ui/PackageCard';
import { CloseButton, Modal, ModalPanel } from '../ui/Modal';

export function RateCardModal({ onClose, onBook }: { onClose: () => void; onBook: (label: string) => void }) {
  return (
    <Modal onClose={onClose} label="Creator rate card">
      <ModalPanel className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl md:p-8">
        <CloseButton onClose={onClose} className="absolute top-4 right-4 h-8 w-8 text-slate-400 hover:text-slate-800" />

        <div className="mx-auto mb-6 max-w-lg text-center">
          <span className="mb-1 block text-[11px] font-bold tracking-wider text-blue-600 uppercase">2026 / 2027 Official Partnership Guide</span>
          <h3 className="text-3xl font-extrabold tracking-tight text-navy">Creator Rate Card &amp; Deliverables</h3>
          <p className="mt-1 text-xs text-slate-500">
            Transparent packages tailored for high-impact brand awareness, authentic UGC, and high-retention social performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.title} pkg={pkg} index={i} variant="modal" onSelect={onBook} />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500 sm:flex-row">
          <div className="flex items-center gap-4">
            <span><i className="fa-solid fa-circle-check mr-1 text-blue-600" aria-hidden="true" /> 100% Organic &amp; Brand Safe</span>
            <span><i className="fa-solid fa-camera mr-1 text-blue-600" aria-hidden="true" /> 4K Cinema Production</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">Inquiries: {PROFILE.email}</span>
        </div>
      </ModalPanel>
    </Modal>
  );
}
