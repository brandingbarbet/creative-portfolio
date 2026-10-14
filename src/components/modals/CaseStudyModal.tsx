import { PASSION } from '../../data/content';
import { IMAGES } from '../../data/images';
import { Img } from '../ui/Img';
import { CloseButton, Modal, ModalPanel } from '../ui/Modal';

export function CaseStudyModal({ onClose }: { onClose: () => void }) {
  const cs = PASSION.caseStudy;
  return (
    <Modal onClose={onClose} label={cs.heading}>
      <ModalPanel className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl md:p-8">
        <CloseButton onClose={onClose} className="absolute top-4 right-4 h-8 w-8 text-slate-400 hover:text-slate-800" />

        <div className="mb-4 pr-8">
          <span className="mb-1 block text-[11px] font-bold tracking-wider text-blue-600 uppercase">Passion Project · Deep Dive</span>
          <h3 className="text-2xl font-extrabold tracking-tight text-navy">{cs.heading}</h3>
          <p className="mt-1 text-xs text-slate-500">{cs.intro}</p>
        </div>

        <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-slate-200 shadow-md">
          <Img alt="Lumière Beauty stills" src={IMAGES.laptopConcept} className="h-full w-full object-cover" />
          <div className="absolute bottom-3 left-3 rounded-md bg-black/70 px-3 py-1 font-mono text-xs text-white backdrop-blur-sm">
            Creative Direction &amp; Set Design by Hannah Elise
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cs.cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h4 className="mb-1 text-xs font-bold tracking-wider text-navy uppercase">{c.title}</h4>
              <p className="text-[11px] leading-relaxed text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="cursor-pointer rounded-xl bg-navy px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-navy-dark">
            Close Case Study
          </button>
        </div>
      </ModalPanel>
    </Modal>
  );
}
