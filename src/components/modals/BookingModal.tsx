import { useState } from 'react';
import { PROFILE } from '../../data/content';
import { InquiryForm } from '../ui/InquiryForm';
import { CloseButton, Modal, ModalPanel } from '../ui/Modal';

export function BookingModal({ initialPackage, onClose }: { initialPackage?: string; onClose: () => void }) {
  const [sent, setSent] = useState<{ brand: string; email: string } | null>(null);

  return (
    <Modal onClose={onClose} label="Partnership inquiry">
      <ModalPanel className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl md:p-8">
        <CloseButton onClose={onClose} className="absolute top-4 right-4 h-8 w-8 text-slate-400 hover:text-slate-800" />

        {sent ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600 shadow-sm">
              <i className="fa-solid fa-check" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-navy">Inquiry Ready!</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
              Thank you, <strong className="text-slate-800">{sent.brand || 'partner'}</strong>! Send the message from your mail app and
              Hannah's team will reply to <span className="font-mono text-slate-700">{sent.email || 'your email'}</span> within 24 hours with the
              full media kit and availability.
            </p>
            <button type="button" onClick={onClose} className="mt-6 cursor-pointer rounded-xl bg-navy px-5 py-2.5 text-xs font-semibold text-white shadow transition-all hover:bg-navy-dark">
              Back to Portfolio
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <span className="mb-1 block text-[11px] font-bold tracking-wider text-blue-600 uppercase">Partnership Inquiry · 2026 Season</span>
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">Work With {PROFILE.name}</h3>
              <p className="mt-1 text-xs text-slate-500">Reach over 5.8M+ dedicated lifestyle, beauty &amp; tech community members.</p>
            </div>
            <InquiryForm
              size="sm"
              showTimeline
              initialPackage={initialPackage}
              submitLabel="Submit Inquiry"
              briefLabel="Brief Overview / Goals"
              briefPlaceholder="Tell us about your product, campaign message, and creative wishes..."
              footnote={<><i className="fa-solid fa-lock mr-1 text-[9px]" aria-hidden="true" /> NDA Protected</>}
              onSent={setSent}
            />
          </div>
        )}
      </ModalPanel>
    </Modal>
  );
}
