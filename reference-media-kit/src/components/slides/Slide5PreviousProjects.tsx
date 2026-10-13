import { IMAGES } from '../../data/portfolioData';

interface SlideProps {
  onSlideClick?: () => void;
  onSelectProject?: (projectIndex: number) => void;
}

export function Slide5PreviousProjects({ onSlideClick, onSelectProject }: SlideProps) {
  return (
    <article
      onClick={onSlideClick}
      className="slide-card bg-[#173664] text-white p-6 md:p-7 flex flex-col justify-between cursor-pointer group"
      data-purpose="slide-previous-projects"
    >
      <div className="grid grid-cols-12 h-full gap-4 items-center">
        {/* Left Side: Brand Narrative & Big Condensed Header */}
        <div className="col-span-5 flex flex-col justify-between h-full py-1">
          <div>
            <span className="text-[11px] tracking-wider uppercase text-white/60 font-semibold block mb-1">
              Client Spotlight
            </span>
            <h3 className="text-base font-bold text-white leading-tight">
              Social Media For
              <br />
              VELORA BEAUTY
            </h3>
            <ul className="mt-3 space-y-1.5 text-[10px] md:text-[11px] text-white/80 leading-normal list-disc list-inside">
              <li>Created engaging social media content aligned with the brand's visual identity.</li>
              <li>Planned and developed content for Instagram and other social platforms.</li>
              <li>Created reels, posts, and educational graphics to increase engagement.</li>
            </ul>
          </div>

          {/* Bottom Big Header */}
          <div className="mt-4">
            <h2 className="text-3xl md:text-5xl font-condensed-impact tracking-normal text-white uppercase leading-none">
              PREVIOUS
              <br />
              PROJECTS
            </h2>
          </div>
        </div>

        {/* Right Side: 3x3 Media Thumbnail Grid */}
        <div className="col-span-7 grid grid-cols-3 gap-2 bg-white/5 p-2 rounded-xl backdrop-blur-sm border border-white/10">
          {IMAGES.projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={(e) => {
                if (onSelectProject) {
                  e.stopPropagation();
                  onSelectProject(idx);
                }
              }}
              className="aspect-square rounded-lg overflow-hidden border border-white/20 relative group/item cursor-pointer hover:border-white/60 transition-all shadow-sm"
              title={`View ${project.title}`}
            >
              <img
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/item:scale-115 transition-transform duration-300"
                src={project.url}
              />
              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover/item:opacity-100">
                <i className="fa-solid fa-magnifying-glass-plus text-white text-xs"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
