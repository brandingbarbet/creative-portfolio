import { IMAGES } from '../../data/portfolioData';

interface ProjectModalProps {
  projectIndex: number | null;
  onClose: () => void;
  onSelectProject: (idx: number) => void;
}

export function ProjectModal({ projectIndex, onClose, onSelectProject }: ProjectModalProps) {
  if (projectIndex === null) return null;

  const project = IMAGES.projects[projectIndex];
  if (!project) return null;

  const total = IMAGES.projects.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-200 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          title="Close (Esc)"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        {/* Media Preview (Left / Top) */}
        <div className="md:w-1/2 bg-slate-950 relative aspect-square flex items-center justify-center overflow-hidden">
          <img
            alt={project.title}
            referrerPolicy="no-referrer"
            src={project.url}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md font-mono">
            Shot on Sony A7IV · 35mm f/1.4
          </div>
        </div>

        {/* Narrative & Metrics (Right / Bottom) */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white text-slate-800">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#173664] bg-blue-50 px-2 py-0.5 rounded">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                0{project.id} / 0{total}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#173664] tracking-tight font-body">
              {project.title}
            </h3>

            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              Curated for Velora Beauty's omnichannel product rollout. Seamlessly aligned
              clean visual aesthetic with high-retention video hooks, resulting in viral community shares and
              elevated brand consideration.
            </p>

            <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                Campaign Performance
              </span>
              <span className="text-sm font-extrabold text-[#173664] font-mono block">
                {project.stats}
              </span>
            </div>

            <div className="mt-4 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-green-600 text-[11px]"></i>
                <span>4K ProRes Master + Mobile 9:16 Cuts</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-green-600 text-[11px]"></i>
                <span>Custom Color Grading &amp; Sound Mix</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-green-600 text-[11px]"></i>
                <span>Whitelisting Authorization Approved</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-4">
            <button
              type="button"
              disabled={projectIndex === 0}
              onClick={() => onSelectProject(projectIndex - 1)}
              className="text-xs font-semibold text-slate-600 hover:text-[#173664] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5"
            >
              <i className="fa-solid fa-chevron-left text-[10px]"></i>
              <span>Previous</span>
            </button>
            <button
              type="button"
              disabled={projectIndex === total - 1}
              onClick={() => onSelectProject(projectIndex + 1)}
              className="text-xs font-semibold text-slate-600 hover:text-[#173664] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5"
            >
              <span>Next</span>
              <i className="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
