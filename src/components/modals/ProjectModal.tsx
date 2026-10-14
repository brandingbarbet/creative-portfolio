import { IMAGES } from '../../data/images';
import { Img } from '../ui/Img';
import { CloseButton, Modal, ModalPanel } from '../ui/Modal';

interface Props {
  index: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

export function ProjectModal({ index, onSelect, onClose }: Props) {
  const project = IMAGES.projects[index];
  const total = IMAGES.projects.length;
  if (!project) return null;

  const navBtn =
    'flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-navy disabled:pointer-events-none disabled:opacity-30';

  return (
    <Modal
      onClose={onClose}
      label={project.title}
      onKey={(e) => {
        if (e.key === 'ArrowRight' && index < total - 1) onSelect(index + 1);
        if (e.key === 'ArrowLeft' && index > 0) onSelect(index - 1);
      }}
    >
      <ModalPanel className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl md:flex-row">
        <CloseButton onClose={onClose} className="absolute top-3 right-3 z-20 h-8 w-8 bg-black/60 text-white hover:bg-black" />

        <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-950 md:w-1/2">
          <Img alt={project.title} src={project.url} className="h-full w-full object-cover" />
          <div className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-sm">
            Shot on Sony A7IV · 35mm f/1.4
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white p-6 text-slate-800 md:w-1/2 md:p-8">
          <div>
            <div className="mb-2 flex items-center justify-between pr-8">
              <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-bold tracking-wider text-navy uppercase">{project.category}</span>
              <span className="font-mono text-xs text-slate-400">{String(project.id).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
            </div>
            <h3 className="font-body text-2xl font-bold tracking-tight text-navy">{project.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              Curated for Velora Beauty's omnichannel product rollout. Seamlessly aligned clean visual aesthetic with
              high-retention video hooks, resulting in viral community shares and elevated brand consideration.
            </p>
            <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
              <span className="mb-1 block text-[10px] font-bold tracking-wider text-slate-400 uppercase">Campaign Performance</span>
              <span className="block font-mono text-sm font-extrabold text-navy">{project.stats}</span>
            </div>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
              {['4K ProRes Master + Mobile 9:16 Cuts', 'Custom Color Grading & Sound Mix', 'Whitelisting Authorization Approved'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[11px] text-green-600" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-6">
            <button type="button" disabled={index === 0} onClick={() => onSelect(index - 1)} className={navBtn}>
              <i className="fa-solid fa-chevron-left text-[10px]" aria-hidden="true" />
              <span>Previous</span>
            </button>
            <button type="button" disabled={index === total - 1} onClick={() => onSelect(index + 1)} className={navBtn}>
              <span>Next</span>
              <i className="fa-solid fa-chevron-right text-[10px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </ModalPanel>
    </Modal>
  );
}
