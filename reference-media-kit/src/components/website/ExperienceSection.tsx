export function ExperienceSection() {
  const experiences = [
    {
      year: '2026',
      role: 'CONTENT CREATION & PHOTOGRAPHY',
      company: 'Independent Creator & Studio Lead',
      description:
        'Created engaging lifestyle, beauty, and fashion content for social media platforms. Developed creative concepts, planned content, and produced visually appealing posts and short-form videos tailored to audience interests.',
      highlights: [
        'Over 45M organic short-form impressions generated across platforms',
        'Built full camera and lighting rig for studio product macro shoots',
        'Developed signature natural-light aesthetic adopted across brand partners',
      ],
    },
    {
      year: '2025',
      role: 'VIDEO EDITOR & CREATIVE',
      company: 'Digital Editorial & Production',
      description:
        'Edited short-form videos, reels, and promotional content with a focus on storytelling and visual appeal. Experimented with transitions, music, pacing, and creative concepts to create engaging social media content.',
      highlights: [
        'Maintained 72% average retention rate across 30s-60s reels',
        'Pioneered ASMR sound pacing and rhythmic jump cuts for beauty tutorials',
        'Collaborated with agencies across New York and Los Angeles',
      ],
    },
    {
      year: '2027-PRESENT',
      role: 'BRAND AMBASSADOR & COLLABORATIONS',
      company: 'Global Brand Representation',
      description:
        'Collaborated with brands and creators to develop authentic social media content that connects with audiences. Created promotional posts, product-focused videos, and lifestyle content while maintaining a consistent visual identity.',
      highlights: [
        'Long-term multi-platform ambassador contracts with Florica, Lumi & Unearth',
        'End-to-end campaign direction including Spark Ads whitelisting',
        'Speaker at digital creator summits on algorithmic visual retention',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F8F9FA] text-slate-800 border-t border-slate-200 relative overflow-hidden">
      <div className="circular-text text-slate-400 top-10 right-10 hidden md:block">
        it's not just editing • visuals &amp; career
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#173664] font-bold block mb-2">
            06. Career Timeline &amp; Roles
          </span>
          <h2 className="text-4xl sm:text-6xl font-condensed-impact tracking-normal uppercase text-[#173664] leading-none">
            WORKING
            <br />
            EXPERIENCE
          </h2>
        </div>

        {/* 3-Column Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#173664] transition-all hover:shadow-md ${
                idx > 0 ? 'md:border-l-2 md:border-l-[#173664]' : ''
              }`}
            >
              <div>
                <span className="text-2xl sm:text-3xl font-black font-condensed-impact text-[#173664] tracking-tight block">
                  {exp.year}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#173664] uppercase tracking-wider mt-2 block font-body">
                  {exp.role}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold block mb-4">
                  {exp.company}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-green-600 text-[10px] mt-1 shrink-0"></i>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
