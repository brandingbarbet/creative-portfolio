import { IMAGES } from '../../data/portfolioData';

export function SocialsSection() {
  const socials = [
    {
      platform: 'Instagram',
      handle: '@halenella',
      followers: '2,000,000',
      badge: '2M Followers',
      er: '7.8% Engagement',
      demographics: '76% Female · 18-34 Focus',
      color: 'from-amber-400 via-pink-500 to-purple-600',
      icon: 'fa-brands fa-instagram',
      link: 'https://instagram.com',
    },
    {
      platform: 'TikTok',
      handle: '@halenella',
      followers: '3,000,000',
      badge: '3M Followers',
      er: '9.4% Engagement',
      demographics: '82% Female · Gen Z & Young Pro',
      color: 'from-slate-900 to-black',
      icon: 'fa-brands fa-tiktok',
      link: 'https://tiktok.com',
    },
    {
      platform: 'YouTube',
      handle: 'Hannah Elise',
      followers: '800,000',
      badge: '800K Subscribers',
      er: '11.2% Retention',
      demographics: 'Long-form Vlogs & Tech Reviews',
      color: 'from-red-600 to-red-700',
      icon: 'fa-brands fa-youtube',
      link: 'https://youtube.com',
    },
  ];

  return (
    <section id="socials" className="py-20 sm:py-28 bg-[#F8F9FA] text-slate-800 border-t border-slate-200 relative overflow-hidden">
      <div className="circular-text text-slate-400 top-10 right-10 hidden md:block">
        it's not just editing • visuals &amp; audience
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#173664] font-bold block mb-2">
            04. Social Reach &amp; Community
          </span>
          <h2 className="text-4xl sm:text-6xl font-condensed-impact tracking-normal uppercase text-[#173664] leading-none">
            SOCIALS ACOUNTS
          </h2>
        </div>

        {/* Device Screen Mockups & Stats Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left / Center: 3 Phone Mockups Showcase */}
          <div className="lg:col-span-7 flex items-center justify-center gap-3 sm:gap-4 py-4">
            {/* Phone 1 (Left Reel Card) */}
            <div className="w-24 sm:w-28 md:w-32 aspect-9/16 bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-3 border-slate-700 relative hover:-translate-y-2 transition-transform duration-300">
              <img
                alt="Social Post 1"
                referrerPolicy="no-referrer"
                src={IMAGES.socialsMockup1}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <i className="fa-regular fa-circle-play text-white text-2xl drop-shadow"></i>
              </div>
            </div>

            {/* Phone 2 (Center Hero Phone - Taller with notch) */}
            <div className="w-28 sm:w-36 md:w-40 aspect-9/18 bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 relative -translate-y-4 hover:-translate-y-6 transition-transform duration-300 z-10">
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2 bg-slate-700 rounded-full z-20"></div>
              <img
                alt="Social Post 2"
                referrerPolicy="no-referrer"
                src={IMAGES.socialsMockup2}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Phone 3 (Right Reel Card with 0:45) */}
            <div className="w-24 sm:w-28 md:w-32 aspect-9/16 bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-3 border-slate-700 relative hover:-translate-y-2 transition-transform duration-300">
              <img
                alt="Social Post 3"
                referrerPolicy="no-referrer"
                src={IMAGES.socialsMockup3}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 text-white text-[10px] bg-black/70 px-1.5 py-0.5 rounded font-mono font-bold">
                0:45
              </div>
            </div>
          </div>

          {/* Right: Metrics & Platform Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#173664] hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${s.color} text-white flex items-center justify-center text-base shadow`}
                    >
                      <i className={s.icon}></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#173664] group-hover:text-blue-900 transition-colors uppercase tracking-wider">
                        {s.platform}
                      </h4>
                      <span className="text-xs text-slate-500 font-mono">{s.handle}</span>
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl font-black font-condensed-impact text-[#173664] tracking-tight">
                    {s.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                  <span className="text-emerald-600 font-bold font-mono">
                    <i className="fa-solid fa-arrow-trend-up mr-1"></i>
                    {s.er}
                  </span>
                  <span className="text-slate-400">{s.demographics}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Global Audience Demographics Strip */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Audience Gender
            </span>
            <span className="text-xl font-bold text-[#173664] font-mono block">
              78% Female / 22% Male
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">High purchasing power</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Core Age Bracket
            </span>
            <span className="text-xl font-bold text-[#173664] font-mono block">
              18 – 34 Years (84%)
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Gen Z &amp; Young Millennials</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Top Geographies
            </span>
            <span className="text-xl font-bold text-[#173664] font-mono block">
              US (58%) · UK (18%)
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Canada &amp; Australia (14%)</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Content Niches
            </span>
            <span className="text-xl font-bold text-[#173664] font-mono block">
              Beauty · Tech · Fashion
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Aesthetic everyday storytelling</span>
          </div>
        </div>
      </div>
    </section>
  );
}
