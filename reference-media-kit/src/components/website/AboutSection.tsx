import { useState } from 'react';
import { IMAGES } from '../../data/portfolioData';

export function AboutSection() {
  const [activePolaroid, setActivePolaroid] = useState<number | null>(null);

  const polaroids = [
    {
      id: 1,
      url: IMAGES.eduGraduation,
      label: 'Graduation Day',
      rotation: '-rotate-6 hover:rotate-0',
      desc: 'Commencement Ceremony at Harvard Yard',
    },
    {
      id: 2,
      url: IMAGES.eduClass20,
      label: "Class of '20",
      rotation: 'rotate-4 hover:rotate-0',
      desc: 'Bachelor of Arts in Media & Communications',
    },
    {
      id: 3,
      url: IMAGES.eduYard,
      label: 'Harvard Yard',
      rotation: '-rotate-2 hover:rotate-0',
      desc: 'Master of Social Management & Social Behavioral (2024)',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F9FA] text-slate-800 relative overflow-hidden">
      {/* Subtle Circular Watermarks */}
      <div className="circular-text text-[#173664]/20 -top-8 -left-8 w-56 h-56 rounded-full border border-dashed border-[#173664]/20 flex items-center justify-center text-center p-4">
        vibing with visuals • editing
      </div>
      <div className="circular-text text-[#173664]/20 -bottom-8 -right-8 w-56 h-56 rounded-full border border-dashed border-[#173664]/20 flex items-center justify-center text-center p-4">
        it's not just editing it's vibes
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#173664] font-bold block mb-2">
            01. Bio &amp; Background
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#173664] tracking-tight font-body">
            About me
          </h2>
        </div>

        {/* 2-Column Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Seated Portrait & Footnote */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                alt="Hannah Elise Studio Portrait"
                referrerPolicy="no-referrer"
                src={IMAGES.aboutPhoto}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-200">
                <span className="text-[10px] tracking-widest text-[#173664] font-bold uppercase font-mono block">
                  Studio Headquarters
                </span>
                <span className="text-xs font-bold text-slate-800">
                  EST. 2020 • NYC &amp; Los Angeles
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Academic Milestones & Polaroids */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#173664] leading-snug mb-4">
              Turning everyday moments into engaging, conversion-driven visual stories.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-4">
              I'm <strong className="text-[#173664] font-semibold">Hannah Elise</strong>, a passionate content creator who loves turning everyday moments into engaging stories. From lifestyle and beauty to fashion and trends, I create authentic content that connects with audiences and brings brands to life.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
              Beyond creating content, I enjoy bringing ideas to life through creative video editing, photography, and visual storytelling. I'm always exploring new trends and experimenting with fresh ideas to make every piece of content engaging, relatable, and visually appealing.
            </p>

            {/* Academic Credentials Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#173664] flex items-center gap-2">
                  <i className="fa-solid fa-graduation-cap text-base"></i>
                  <span>Education &amp; Academic Credentials</span>
                </span>
                <span className="text-xs font-mono text-slate-400">Harvard Alum</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="pl-4 border-l-2 border-[#173664]">
                  <span className="text-xl font-bold font-mono text-[#173664] block">2020</span>
                  <span className="text-xs font-bold text-slate-800 block">Harvard University</span>
                  <p className="text-xs text-slate-500 mt-1">
                    Bachelor of Arts in Media &amp; Communications
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-[#173664]">
                  <span className="text-xl font-bold font-mono text-[#173664] block">2024</span>
                  <span className="text-xs font-bold text-slate-800 block">Harvard University</span>
                  <p className="text-xs text-slate-500 mt-1">
                    Master of Social Management &amp; Social Behavioral
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Polaroids Strip */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                Snapshots from Harvard Campus · Click to expand
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {polaroids.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setActivePolaroid(activePolaroid === p.id ? null : p.id)}
                    className={`bg-white p-2 pb-5 rounded shadow-md border border-slate-200 cursor-pointer transition-all duration-300 w-28 sm:w-32 transform ${
                      activePolaroid === p.id
                        ? 'scale-125 z-30 shadow-2xl rotate-0 ring-2 ring-[#173664]'
                        : `${p.rotation} hover:scale-105 hover:z-20`
                    }`}
                  >
                    <img
                      alt={p.label}
                      referrerPolicy="no-referrer"
                      src={p.url}
                      className="w-full h-24 sm:h-28 object-cover rounded-sm"
                    />
                    <span className="block text-[9px] text-slate-700 font-mono text-center mt-2 font-bold">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
