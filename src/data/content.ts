/**
 * All editable copy for the portfolio lives here.
 * Both the Pitch Deck view and the Website view read from this file.
 */

export const PROFILE = {
  name: 'Hannah Elise',
  handle: '@halenella',
  email: 'HALENELLA@GMAIL.COM',
  roleLine: 'Content Creator, Video Editor & Influencer',
  established: 'EST. 2020 • NYC & LA',
  establishedLong: 'EST. 2020 • NYC & Los Angeles',
  bio: [
    'a passionate content creator who loves turning everyday moments into engaging stories. From lifestyle and beauty to fashion and trends, I create authentic content that connects with audiences and brings brands to life.',
    "Beyond creating content, I enjoy bringing ideas to life through creative video editing, photography, and visual storytelling. I'm always exploring new trends and experimenting with fresh ideas to make every piece of content engaging, relatable, and visually appealing.",
  ],
} as const;

export const COVER_TAGS = ['social media', 'influencer', 'video editor', 'graphic designer'] as const;

/** Kicker + stat strip (website hero / deck toolbar). Edit freely. */
export const STATS = [
  { value: '5.8M+', label: 'Total Community Reach', short: 'Cross-Platform Reach' },
  { value: '7.2%', label: 'Average Engagement Rate', short: 'Avg Engagement Rate' },
  { value: '120M+', label: 'Organic Video Views', short: 'Organic Video Views' },
  { value: 'HARVARD', label: "Alum · Media & Behavioral '20/'24", short: "Harvard Alum '20 & '24" },
] as const;

export type SlideTheme = 'navy' | 'light';
export interface SlideMeta {
  id: number;
  title: string;
  theme: SlideTheme;
}

export const SLIDES: SlideMeta[] = [
  { id: 1, title: 'Portfolio Cover', theme: 'navy' },
  { id: 2, title: 'About Me', theme: 'light' },
  { id: 3, title: 'Education Background', theme: 'navy' },
  { id: 4, title: 'Skills & Expertise', theme: 'light' },
  { id: 5, title: 'Previous Projects – Velora Beauty', theme: 'navy' },
  { id: 6, title: 'Socials Accounts', theme: 'light' },
  { id: 7, title: 'Brands', theme: 'navy' },
  { id: 8, title: 'Working Experience', theme: 'light' },
  { id: 9, title: 'Passion Project – Lumière Beauty', theme: 'navy' },
  { id: 10, title: "Let's Work Together", theme: 'light' },
];

export const EDUCATION = [
  { year: '2020', school: 'Harvard University', degree: 'Bachelor of Arts in Media & Communications' },
  { year: '2024', school: 'Harvard University', degree: 'Master of Social Management & Social Behavioral' },
] as const;

export const POLAROIDS = [
  { key: 'eduGraduation', label: 'Graduation Day', desc: 'Commencement Ceremony at Harvard Yard' },
  { key: 'eduClass20', label: "Class of '20", desc: 'Bachelor of Arts in Media & Communications' },
  { key: 'eduYard', label: 'Harvard Yard', desc: 'Master of Social Management & Social Behavioral (2024)' },
] as const;

export const TOOLS = [
  { name: 'Adobe Photoshop', short: 'Ps', bg: '#001E36', fg: '#31A8FF' },
  { name: 'Adobe Illustrator', short: 'Ai', bg: '#330000', fg: '#FF9A00' },
  { name: 'Canva Pro', label: 'Canva', bg: '#00C4CC', fg: '#FFFFFF' },
  { name: 'Slack', icon: 'fa-brands fa-slack', iconColor: '#ECB22E' },
  { name: 'Adobe Premiere', short: 'Pr', bg: '#00005B', fg: '#9999FF' },
  { name: 'DaVinci Resolve', short: 'Da', bg: '#1E293B', fg: '#F59E0B' },
] as const;

export const SKILL_PILLARS = [
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
] as const;

export const PROJECT_SPOTLIGHT = {
  client: 'VELORA BEAUTY',
  intro:
    'Omnichannel campaign launch covering product unboxing, skincare tutorial reels, and high-converting educational infographics.',
  bullets: [
    "Created engaging social media content aligned with the brand's visual identity.",
    'Planned and developed content for Instagram and other social platforms.',
    'Created reels, posts, and educational graphics to increase engagement.',
  ],
  reach: '5.2M Total Campaign Reach',
  lift: '+184% Inbound Leads',
  categories: ['All', 'Product Spotlight', 'Tutorial Video', 'Editorial Stills', 'Brand Story'],
} as const;

export const SOCIALS = [
  {
    platform: 'Instagram',
    handle: '@halenella',
    stat: '2M FOLLOWERS',
    badge: '2M Followers',
    er: '7.8% Engagement',
    demographics: '76% Female · 18-34 Focus',
    gradient: 'from-amber-400 via-pink-500 to-purple-600',
    icon: 'fa-brands fa-instagram',
    link: 'https://instagram.com',
  },
  {
    platform: 'TikTok',
    handle: '@halenella',
    stat: '3M FOLLOWERS',
    badge: '3M Followers',
    er: '9.4% Engagement',
    demographics: '82% Female · Gen Z & Young Pro',
    gradient: 'from-slate-900 to-black',
    icon: 'fa-brands fa-tiktok',
    link: 'https://tiktok.com',
  },
  {
    platform: 'YouTube',
    handle: 'Hannah Elise',
    stat: '800K SUBSCRIBERS',
    badge: '800K Subscribers',
    er: '11.2% Retention',
    demographics: 'Long-form Vlogs & Tech Reviews',
    gradient: 'from-red-600 to-red-700',
    icon: 'fa-brands fa-youtube',
    link: 'https://youtube.com',
  },
] as const;

export const AUDIENCE = [
  { label: 'Audience Gender', value: '78% Female / 22% Male', note: 'High purchasing power' },
  { label: 'Core Age Bracket', value: '18 – 34 Years (84%)', note: 'Gen Z & Young Millennials' },
  { label: 'Top Geographies', value: 'US (58%) · UK (18%)', note: 'Canada & Australia (14%)' },
  { label: 'Content Niches', value: 'Beauty · Tech · Fashion', note: 'Aesthetic everyday storytelling' },
] as const;

export const BRAND_WORDMARKS = { serif: 'maslostudio', mono: 'fuse' } as const;
export const BRAND_PILLS = ['florica', 'unearth', 'lumi'] as const;

export const EXPERIENCE = [
  {
    year: '2026',
    roleLines: ['CONTENT CREATION &', 'PHOTOGRAPHY'],
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
    roleLines: ['VIDEO EDITOR', '& CREATIVE'],
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
    year: '2027–PRESENT',
    roleLines: ['BRAND AMBASSADOR', '& COLLABORATIONS'],
    company: 'Global Brand Representation',
    description:
      'Collaborated with brands and creators to develop authentic social media content that connects with audiences. Created promotional posts, product-focused videos, and lifestyle content while maintaining a consistent visual identity.',
    highlights: [
      'Long-term multi-platform ambassador contracts with Florica, Lumi & Unearth',
      'End-to-end campaign direction including Spark Ads whitelisting',
      'Speaker at digital creator summits on algorithmic visual retention',
    ],
  },
] as const;

export const PASSION = {
  title: 'LUMIÈRE BEAUTY CONCEPT',
  caption: 'Lumière Beauty Cam 01',
  captionLong: 'Lumière Beauty Cam 01 · 4K Rec',
  slideBlurb:
    'Developed a social media concept focused on creating a cohesive visual identity for a beauty brand. The project explores content planning, product storytelling, and engaging visual communication across social platforms.',
  siteBlurb:
    'Developed an organic social media concept focused on tactile visual identity, raw textures, and product storytelling across modern platforms.',
  caseStudy: {
    heading: 'Lumière Beauty — Brand Visual Direction',
    intro:
      'Artisanal skincare brand concept focusing on earth tones, tactile textures, and mindful lifestyle rituals.',
    cards: [
      {
        title: '01. The Challenge',
        text: 'Break through sterile, clinical beauty advertising by infusing warmth, artisan leatherwork textures, and natural studio sunlight.',
      },
      {
        title: '02. Visual Strategy',
        text: 'Macro product focus, warm terracotta & cognac palette, ASMR audio pacing, and documentary-style behind-the-bench photography.',
      },
      {
        title: '03. Impact',
        text: 'Concept featured in independent creator showcases; over 120,000 saves on Pinterest and moodboard communities worldwide.',
      },
    ],
  },
} as const;

export interface Package {
  title: string;
  price: string;
  turnaround: string;
  popular?: boolean;
  features: string[];
}

export const PACKAGES: Package[] = [
  {
    title: 'TikTok & Short-Form Video',
    price: '$4,200',
    turnaround: '5-7 business days',
    features: [
      '1x Dedicated High-Retention TikTok / Reel (30–60s)',
      'Scripting, filming, color grading & custom sound integration',
      'Usage rights for 30 days organic + paid boost permission',
      'Full post-campaign performance analytics report',
    ],
  },
  {
    title: 'Integrated Multi-Platform Story',
    price: '$7,500',
    popular: true,
    turnaround: '7-10 business days',
    features: [
      '1x Instagram Reel + 1x TikTok cross-post',
      '1x Curated 4-part Instagram Story sequence with direct link stickers',
      '1x Static carousel aesthetic feature',
      'Whitelisting / Spark Ads authorization (60 days)',
    ],
  },
  {
    title: 'Seasonal Brand Ambassador',
    price: '$18,500',
    turnaround: '3-Month Retainer',
    features: [
      '3x Dedicated Monthly Reels/TikToks (9 videos total)',
      'Monthly Story Takeovers & Q&A sessions',
      'Exclusive brand exclusivity within product category',
      'Live event coverage or experiential studio shoot',
    ],
  },
  {
    title: 'UGC Creative Asset Pack',
    price: '$3,600',
    turnaround: '5 business days',
    features: [
      '3x Raw + Edited UGC videos for brand ad account',
      'Hook testing (3 different openings per video)',
      'Perpetual digital ad usage rights included',
      'Delivered in 4K ProRes + vertical mobile format',
    ],
  },
];

export const packageLabel = (p: Package) => `${p.title} (${p.price})`;

export const BUDGETS = [
  { value: '$3k - $5k', label: '$3,000 - $5,000' },
  { value: '$5k - $10k', label: '$5,000 - $10,000' },
  { value: '$10k - $25k', label: '$10,000 - $25,000' },
  { value: '$25k+', label: '$25,000+' },
] as const;
export const TIMELINES = ['Urgent (Next 7-14 Days)', 'Within 30 Days', 'Upcoming Quarter Campaign'] as const;

export const WATERMARKS = [
  "it's vibing with visuals • editing • ",
  "it's not just editing • visuals & vibes • ",
  'vibing with visuals • not just editing • ',
] as const;
