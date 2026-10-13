import { IMAGES } from '../../data/portfolioData';

export function SkillsSection() {
  const tools = [
    { name: 'Adobe Photoshop', short: 'Ps', bg: '#001E36', fg: '#31A8FF' },
    { name: 'Adobe Illustrator', short: 'Ai', bg: '#330000', fg: '#FF9A00' },
    { name: 'Canva Pro', label: 'Canva', bg: '#00C4CC', fg: '#FFFFFF' },
    { name: 'Slack', icon: 'fa-brands fa-slack text-yellow-500' },
    { name: 'Adobe Premiere', short: 'Pr', bg: '#00005B', fg: '#9999FF' },
    { name: 'DaVinci Resolve', short: 'Da', bg: '#1E293B', fg: '#F59E0B' },
  ];

  const pillars = [
    {
      title: 'Social Media Marketing & Strategy',
      desc: 'Data-informed editorial calendars, trend forecasting, and high-conversion hooks designed specifically for TikTok, Instagram Reels, and YouTube Shorts algorithms.',
      tags: ['Trend Jacking', 'Audience Segmentation', 'Funnel Optimization'],
    },
    {
      title: 'High-Retention Video Editing & Creative Direction',
      desc: 'Cinematic pacing, custom sound design, macro speed-ramps, and clean color grading that keep average retention rate consistently above 70%.',
      tags: ['4K Cinema Capture', 'Color Grading', 'ASMR Audio Design'],
    },
    {
      title: 'Brand Collaborations & Campaign Execution',
      desc: 'Full-cycle sponsorship management from initial moodboards and scripted hooks to whitelisted ads, Spark Ads authorization, and ROI analytics reporting.',
      tags: ['End-to-End Execution', 'Whitelisting Rights', 'Performance Reports'],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header with Software Logos */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#173664] font-bold block mb-2">
              02. Capabilities &amp; Stack
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#173664] tracking-tight font-body">
              Skills &amp; Expertise
            </h2>
          </div>

          {/* Software Badges Bar */}
          <div className="flex flex-wrap items-center gap-2.5">
            {tools.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs text-xs font-semibold"
              >
                {t.short && (
                  <span
                    className="w-6 h-6 rounded flex items-center justify-center font-bold text-[11px]"
                    style={{ backgroundColor: t.bg, color: t.fg }}
                  >
                    {t.short}
                  </span>
                )}
                {t.label && (
                  <span
                    className="px-2 py-0.5 rounded text-[11px] font-bold"
                    style={{ backgroundColor: t.bg, color: t.fg }}
                  >
                    {t.label}
                  </span>
                )}
                {t.icon && <i className={`${t.icon} text-base`}></i>}
                <span className="text-slate-700">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Centerpiece Layout with Camera Portrait & Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left / Center: Camera Portrait Cutout */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-[#F8F9FA] shadow-2xl group">
              <img
                alt="Hannah Elise with Camera"
                referrerPolicy="no-referrer"
                src={IMAGES.skillsCamera}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="text-white text-xs font-mono font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  Sony A7IV · G-Master Glass
                </span>
              </div>
            </div>
            <span className="mt-4 text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Production Standard: 4K 60FPS Cinema
            </span>
          </div>

          {/* Right: 3 Core Discipline Cards */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8F9FA] border border-slate-200/80 hover:border-[#173664] transition-all hover:shadow-md group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#173664]">
                    {p.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {p.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
