import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const cfg = window.PORTFOLIO_CONFIG || {};
const configured = /^https:\/\/.+\.supabase\.co$/.test(cfg.SUPABASE_URL || '') && (cfg.SUPABASE_ANON_KEY || '').length > 20 && !String(cfg.SUPABASE_ANON_KEY).includes('YOUR_');
const supabase = configured ? createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY) : null;
const DEFAULT_PATH = './default-content.json';
const esc = (v='') => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeHref = (v='') => /^(https?:|mailto:|tel:|#|\/)/i.test(String(v).trim()) ? esc(v) : '#';
const safeImage = (v='') => /^(https?:\/\/|\/)/i.test(String(v).trim()) ? esc(v) : '';
let siteData = null;

async function loadContent() {
  const fallbackResponse = await fetch(DEFAULT_PATH, {cache:'no-cache'});
  const fallback = await fallbackResponse.json();
  if (!supabase) return fallback;
  const { data, error } = await supabase.from('portfolio_content').select('content').eq('id','main').maybeSingle();
  if (error || !data?.content) return fallback;
  return data.content;
}

function renderNav(data) {
  const site = data.site || {};
  const nav = (data.nav || []).filter(n => n && n.label && n.href);
  const top = document.getElementById('topbar');
  top.innerHTML = `<a class="brand" href="#topbar"><span class="brand-dot"></span><span class="brand-text"><strong>${esc(site.brand || 'CREATIVE STUDIO')}</strong>${site.subtitle ? `<small>${esc(site.subtitle)}</small>` : ''}</span></a>
    <button class="mobile-menu" id="mobile-menu" aria-label="Toggle navigation" aria-expanded="false">☰</button>
    <nav class="nav" id="main-nav">${nav.map(n=>`<a href="${safeHref(n.href)}">${esc(n.label)}</a>`).join('')}</nav>
    <a class="pill top-cta" href="${safeHref(site.cta_url || '#contact')}">${esc(site.cta || 'Let’s work together')}</a>`;
  document.getElementById('mobile-menu').addEventListener('click',()=>{
    const navEl=document.getElementById('main-nav'); const opened=navEl.classList.toggle('open');
    document.getElementById('mobile-menu').setAttribute('aria-expanded',String(opened));
  });
  document.querySelectorAll('#main-nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('main-nav').classList.remove('open')));
}

function renderProjects(projects=[]) {
  return `<div class="projects">${projects.map(p=>`<article class="project">
    <a href="${safeHref(p.url || '#')}" ${/^https?:/i.test(p.url||'')?'target="_blank" rel="noopener noreferrer"':''} aria-label="${esc(p.title || 'Project')}">
      ${safeImage(p.image) ? `<img loading="lazy" src="${safeImage(p.image)}" alt="${esc(p.title || 'Project image')}">` : '<div class="project-placeholder"></div>'}
    </a><div class="project-copy"><small>${esc(p.category || 'Project')}</small><h3>${esc(p.title || 'Untitled project')}</h3><p>${esc(p.description || '')}</p>
    ${p.url && p.url !== '#' ? `<a class="project-link" href="${safeHref(p.url)}" target="_blank" rel="noopener noreferrer">View project ↗</a>` : ''}</div></article>`).join('')}</div>`;
}

function renderSection(section, data) {
  const type = section.type || 'text';
  const title = section.title ? `<h2>${esc(section.title)}</h2>` : '';
  const eyebrow = section.eyebrow ? `<div class="eyebrow">${esc(section.eyebrow)}</div>` : '';
  let body = '';
  if (type === 'projects') {
    body = `${section.content ? `<p class="lead">${esc(section.content)}</p>` : ''}${renderProjects(data.projects || [])}`;
  } else if (type === 'cards') {
    const items = Array.isArray(section.items) ? section.items : String(section.content || '').split(',').map(s=>s.trim()).filter(Boolean);
    body = `${section.content && Array.isArray(section.items) ? `<p class="lead">${esc(section.content)}</p>` : ''}<div class="cards">${items.map(item=>`<div class="service">${esc(typeof item === 'string' ? item : item.title || '')}</div>`).join('')}</div>`;
  } else if (type === 'contact') {
    const site = data.site || {};
    body = `<div class="contact-panel"><div>${section.content ? `<p>${esc(section.content)}</p>` : ''}<strong>${esc(site.email || '')}</strong>${site.location ? `<p class="contact-location">${esc(site.location)}</p>` : ''}</div><a class="pill" href="mailto:${esc(site.email || '')}">${esc(section.button_text || 'Send an email')} ↗</a></div>`;
  } else if (type === 'image') {
    body = `${section.content ? `<p class="lead">${esc(section.content)}</p>` : ''}${safeImage(section.image) ? `<img class="section-image" loading="lazy" src="${safeImage(section.image)}" alt="${esc(section.image_alt || section.title || '')}">` : ''}`;
  } else if (type === 'gallery') {
    body = `${section.content ? `<p class="lead">${esc(section.content)}</p>` : ''}<div class="gallery">${(section.items || []).map(item=>`<figure>${safeImage(item.image) ? `<img loading="lazy" src="${safeImage(item.image)}" alt="${esc(item.caption || section.title || '')}">` : ''}${item.caption ? `<figcaption>${esc(item.caption)}</figcaption>` : ''}</figure>`).join('')}</div>`;
  } else {
    body = section.content ? `<p class="lead">${esc(section.content)}</p>` : '';
  }
  return `<section class="section" id="${esc(section.id || 'section')}"><div class="wrap">${eyebrow}${title}${body}</div></section>`;
}

function renderSite(data) {
  siteData = data;
  const site = data.site || {};
  document.documentElement.style.setProperty('--navy', /^#[\da-f]{6}$/i.test(site.background || '') ? site.background : '#1a345c');
  document.documentElement.style.setProperty('--accent', /^#[\da-f]{6}$/i.test(site.accent || '') ? site.accent : '#f8fafc');
  document.title = `${site.title || 'Creative Portfolio'} | ${site.brand || 'Creative Studio'}`;
  const meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = site.description || '';
  renderNav(data);
  const heroParams = new URLSearchParams();
  if (site.portrait) heroParams.set('portrait', site.portrait);
  if (site.hero_headline) heroParams.set('headline', site.hero_headline);
  for (let i=1;i<=4;i++) if (site[`hero_label_${i}`]) heroParams.set(`label${i}`, site[`hero_label_${i}`]);
  document.getElementById('site-main').innerHTML = `<section class="hero-frame" id="home"><iframe src="hero.html?${heroParams.toString()}" title="Portfolio hero artwork" loading="eager"></iframe></section>
    ${(data.sections || []).filter(s=>s && s.visible !== false).map(s=>renderSection(s,data)).join('')}`;
  const socials = ['instagram','tiktok','youtube','linkedin'].filter(key=>site[key] && site[key] !== '#');
  document.getElementById('site-footer').innerHTML = `<span>${esc(site.footer || '')}</span><div class="socials">${socials.map(key=>`<a href="${safeHref(site[key])}" target="_blank" rel="noopener noreferrer">${esc(key[0].toUpperCase()+key.slice(1))}</a>`).join('')}</div><a href="/admin">Admin</a>`;
}

function showToast(message) {
  const el = document.getElementById('site-toast'); if (!el) return;
  el.textContent = message; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),3200);
}

try {
  const data = await loadContent();
  renderSite(data);
  if (configured && data) {
    const {data:sessionData} = await supabase.auth.getSession();
    // The public page remains readable even when the visitor is not signed in.
  }
} catch (err) {
  console.error(err);
  document.getElementById('site-main').innerHTML = '<div class="loading">Could not load the portfolio. Check the deployment configuration.</div>';
}
