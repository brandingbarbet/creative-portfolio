import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const cfg = window.PORTFOLIO_CONFIG || {};
const configured = /^https:\/\/.+\.supabase\.co$/.test(cfg.SUPABASE_URL || '') && (cfg.SUPABASE_ANON_KEY || '').length > 20 && !String(cfg.SUPABASE_ANON_KEY).includes('YOUR_');
const supabase = configured ? createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY) : null;
const $ = id => document.getElementById(id);
const esc = (v='') => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let content = null;

function notice(message, error=false) {
  const el=$('message'); el.textContent=message; el.classList.remove('hidden','error'); if(error)el.classList.add('error');
  window.scrollTo({top:0,behavior:'smooth'});
}
function changed() { $('save-status').textContent='Unsaved changes'; }
function hideAll() { ['login-panel','config-panel','editor-panel'].forEach(id=>$(id).classList.add('hidden')); }
function showEditor() { hideAll(); $('editor-panel').classList.remove('hidden'); $('header-actions').innerHTML='<button class="button secondary" id="logout-button">Sign out</button>'; renderAll(); }
function field(label,value,kind,index,key,opts={}) {
  const type=opts.type||'text'; const full=opts.full?' full':''; const data=`data-kind="${kind}" data-index="${index}" data-field="${key}"`;
  if(type==='textarea') return `<div class="field${full}"><label>${esc(label)}<textarea ${data} rows="${opts.rows||3}" placeholder="${esc(opts.placeholder||'')}">${esc(value)}</textarea></label></div>`;
  if(type==='select') return `<div class="field${full}"><label>${esc(label)}<select ${data}>${opts.options.map(o=>`<option value="${esc(o.value)}" ${String(value)===String(o.value)?'selected':''}>${esc(o.label)}</option>`).join('')}</select></label></div>`;
  if(type==='checkbox') return `<div class="field${full}"><label class="inline-check"><input type="checkbox" ${data} ${value?'checked':''}> ${esc(label)}</label></div>`;
  return `<div class="field${full}"><label>${esc(label)}<input type="${type}" ${data} value="${esc(value)}" placeholder="${esc(opts.placeholder||'')}"></label></div>`;
}
function imageField(label,value,kind,index,key) {
  return `<div class="field full"><label>${esc(label)}</label><div class="asset-row"><input type="url" data-kind="${kind}" data-index="${index}" data-field="${key}" value="${esc(value||'')}" placeholder="https://… or upload an image"><label class="button secondary upload-btn">Upload image<input type="file" accept="image/*" data-upload-kind="${kind}" data-index="${index}" data-field="${key}"></label></div>${value?`<div class="asset-preview"><img src="${esc(value)}" alt="Preview" loading="lazy"><span>${esc(value)}</span></div>`:''}</div>`;
}
function actions(kind,index,canRemove=true) {
 return `<div class="card-actions"><button type="button" class="button secondary small" data-action="up" data-kind="${kind}" data-index="${index}">↑</button><button type="button" class="button secondary small" data-action="down" data-kind="${kind}" data-index="${index}">↓</button>${canRemove?`<button type="button" class="button danger small" data-action="remove" data-kind="${kind}" data-index="${index}">Remove</button>`:''}</div>`;
}
function renderSiteFields() {
 const s=content.site ||= {};
 const fields=[
  field('Brand / logo text',s.brand,'site',0,'brand'),field('Browser title',s.title,'site',0,'title'),
  field('Subtitle',s.subtitle,'site',0,'subtitle'),field('Hero headline',s.hero_headline||'Portfolio','site',0,'hero_headline'),
  field('Hero annotation 1',s.hero_label_1||'social media','site',0,'hero_label_1'),field('Hero annotation 2',s.hero_label_2||'video editor','site',0,'hero_label_2'),
  field('Hero annotation 3',s.hero_label_3||'influencer','site',0,'hero_label_3'),field('Hero annotation 4',s.hero_label_4||'graphic designer','site',0,'hero_label_4'),
  field('Site description',s.description,'site',0,'description',{type:'textarea',full:true}),
  field('Background color (hex)',s.background,'site',0,'background',{placeholder:'#1a345c'}),field('Accent color (hex)',s.accent,'site',0,'accent',{placeholder:'#f8fafc'}),
  imageField('Hero portrait image',s.portrait,'site',0,'portrait'),
  field('Call-to-action label',s.cta,'site',0,'cta'),field('Call-to-action URL',s.cta_url,'site',0,'cta_url'),
  field('Contact email',s.email,'site',0,'email',{type:'email'}),field('Location text',s.location,'site',0,'location'),
  field('Instagram URL',s.instagram,'site',0,'instagram'),field('TikTok URL',s.tiktok,'site',0,'tiktok'),
  field('YouTube URL',s.youtube,'site',0,'youtube'),field('LinkedIn URL',s.linkedin,'site',0,'linkedin'),
  field('Footer text',s.footer,'site',0,'footer',{full:true})
 ];
 $('site-fields').innerHTML=fields.join('');
}
function renderNav() {
 $('nav-list').innerHTML=(content.nav||[]).map((n,i)=>`<div class="editor-card"><div class="editor-card-top"><strong>Navigation link ${i+1}</strong>${actions('nav',i)}</div><div class="field-grid compact">${field('Label',n.label,'nav',i,'label')}${field('Link / section ID',n.href,'nav',i,'href',{placeholder:'#about'})}</div></div>`).join('') || '<p>No navigation links yet. Use “Add link”.</p>';
}
function renderSections() {
 const types=[{value:'text',label:'Text'},{value:'cards',label:'Cards / services'},{value:'projects',label:'Projects grid'},{value:'contact',label:'Contact panel'},{value:'image',label:'Image + text'},{value:'gallery',label:'Image gallery'}];
 $('section-list').innerHTML=(content.sections||[]).map((s,i)=>{
  let extra='';
  if(s.type==='image') extra=imageField('Section image',s.image,'section',i,'image')+field('Image alt text',s.image_alt,'section',i,'image_alt');
  if(s.type==='gallery') extra=`<div class="subitems field full"><div class="section-head"><h4>Gallery images</h4><button class="button secondary small" type="button" data-action="add-gallery-item" data-index="${i}">+ Add image</button></div>${(s.items||[]).map((it,j)=>`<div class="subitem"><div class="editor-card-top"><strong>Gallery image ${j+1}</strong><button class="button danger small" type="button" data-action="remove-gallery-item" data-index="${i}" data-subindex="${j}">Remove</button></div><div class="field-grid compact">${imageField('Image URL',it.image,'gallery',i,'image',).replaceAll('data-index="'+i+'"','data-index="'+i+'" data-subindex="'+j+'"')}${field('Caption',it.caption,'gallery',i,'caption',{placeholder:'Image caption'}).replaceAll('data-index="'+i+'"','data-index="'+i+'" data-subindex="'+j+'"')}</div></div>`).join('')}</div>`;
  if(s.type==='cards') extra=field('Card items (comma-separated)',s.content,'section',i,'content',{type:'textarea',full:true,rows:3});
  if(s.type==='contact') extra=field('Contact button label',s.button_text||'Send an email','section',i,'button_text');
  return `<div class="editor-card"><div class="editor-card-top"><strong>Section ${i+1}: ${esc(s.title||s.id||'Untitled')}</strong>${actions('section',i)}</div><div class="field-grid compact">
   ${field('Section ID (used in #links)',s.id,'section',i,'id',{placeholder:'about'})}
   ${field('Section title',s.title,'section',i,'title')}
   ${field('Small eyebrow label',s.eyebrow,'section',i,'eyebrow')}
   ${field('Section type',s.type||'text','section',i,'type',{type:'select',options:types})}
   ${field('Visible on website',s.visible!==false,'section',i,'visible',{type:'checkbox',full:true})}
   ${s.type==='cards'?'':field('Main content / description',s.content,'section',i,'content',{type:'textarea',full:true,rows:3})}
   ${extra}
  </div></div>`;
 }).join('') || '<p>No sections yet. Use “Add section”.</p>';
}
function renderProjects() {
 $('project-list').innerHTML=(content.projects||[]).map((p,i)=>`<div class="editor-card"><div class="editor-card-top"><strong>Project ${i+1}: ${esc(p.title||'Untitled')}</strong>${actions('project',i)}</div><div class="field-grid compact">
  ${field('Project title',p.title,'project',i,'title')}${field('Category',p.category,'project',i,'category')}
  ${field('Project description',p.description,'project',i,'description',{type:'textarea',full:true,rows:2})}
  ${imageField('Project image',p.image,'project',i,'image')}
  ${field('Project URL',p.url,'project',i,'url',{placeholder:'https://… or #'})}
 </div></div>`).join('') || '<p>No projects yet. Use “Add project”.</p>';
}
function renderAll(){renderSiteFields();renderNav();renderSections();renderProjects();}
function setValue(el) {
 const kind=el.dataset.kind, index=Number(el.dataset.index), key=el.dataset.field;
 const value=el.type==='checkbox'?el.checked:el.value;
 if(kind==='site') content.site[key]=value;
 else if(kind==='nav') content.nav[index][key]=value;
 else if(kind==='section') content.sections[index][key]=value;
 else if(kind==='project') content.projects[index][key]=value;
 else if(kind==='gallery') {
   const subindex=Number(el.dataset.subindex); content.sections[index].items ||= []; content.sections[index].items[subindex] ||= {}; content.sections[index].items[subindex][key]=value;
 }
 changed();
}
function moveItem(list,index,delta){const next=index+delta;if(next<0||next>=list.length)return;[list[index],list[next]]=[list[next],list[index]];}
function doAction(button){const kind=button.dataset.kind,index=Number(button.dataset.index),action=button.dataset.action;
 if(action==='add-gallery-item'){content.sections[index].items ||= [];content.sections[index].items.push({image:'',caption:''});renderSections();changed();return;}
 if(action==='remove-gallery-item'){content.sections[index].items.splice(Number(button.dataset.subindex),1);renderSections();changed();return;}
 const list=kind==='nav'?content.nav:kind==='section'?content.sections:content.projects;
 if(action==='up'||action==='down'){moveItem(list,index,action==='up'?-1:1);renderAll();changed();return;}
 if(action==='remove'){
   if(kind==='section') {const id=content.sections[index].id;content.sections.splice(index,1);content.nav=(content.nav||[]).filter(n=>n.href!==`#${id}`);}
   else list.splice(index,1);
   renderAll();changed();
 }
}
async function loadDefaults(){const res=await fetch('./default-content.json',{cache:'no-cache'});return await res.json();}
async function loadContent(){const fallback=await loadDefaults();const {data,error}=await supabase.from('portfolio_content').select('content').eq('id','main').maybeSingle();if(error)console.warn('Using starter content until Supabase is configured:',error.message);return data?.content||fallback;}
async function checkAdmin(){const {data,error}=await supabase.rpc('is_portfolio_admin');if(error)throw new Error('Could not verify admin permissions. Run supabase/setup.sql and add your user UUID to portfolio_admins.');if(data!==true)throw new Error('This account is signed in but is not on the portfolio admin allowlist. Add its Auth user UUID to public.portfolio_admins.');}
async function startEditor(){try{await checkAdmin();content=await loadContent();showEditor();$('message').classList.add('hidden');}catch(e){await supabase.auth.signOut();hideAll();$('login-panel').classList.remove('hidden');notice(e.message,true);}}
async function login(e){e.preventDefault();const fd=new FormData(e.currentTarget);const {error}=await supabase.auth.signInWithPassword({email:fd.get('email'),password:fd.get('password')});if(error){notice(error.message,true);return;}await startEditor();}
async function save(){if(!content)return;const buttons=[$('save-button'),$('save-button-bottom')];buttons.forEach(b=>{b.disabled=true;b.textContent='Saving…'});try{
 const {error}=await supabase.from('portfolio_content').upsert({id:'main',content,updated_at:new Date().toISOString()},{onConflict:'id'});
 if(error)throw error;
 $('save-status').textContent='Saved successfully';notice('Your portfolio content has been saved. Refresh the public website to review it.');
 }catch(e){notice(`Save failed: ${e.message}`,true);}finally{buttons.forEach(b=>{b.disabled=false;b.textContent='Save all changes'});}}
async function uploadImage(file,kind,index,key,subindex){
 if(!file)return;if(!file.type.startsWith('image/')){notice('Choose an image file.',true);return;}if(file.size>10*1024*1024){notice('Image must be 10 MB or smaller.',true);return;}
 const ext=(file.name.split('.').pop()||'jpg').toLowerCase().replace(/[^a-z0-9]/g,'')||'jpg';const path=`${kind}/${crypto.randomUUID()}.${ext}`;
 notice('Uploading image…');
 const {error}=await supabase.storage.from('portfolio-assets').upload(path,file,{cacheControl:'3600',upsert:false,contentType:file.type});
 if(error){notice(`Upload failed: ${error.message}`,true);return;}
 const {data}=supabase.storage.from('portfolio-assets').getPublicUrl(path);const url=data.publicUrl;
 if(kind==='site')content.site[key]=url;
 else if(kind==='project')content.projects[index][key]=url;
 else if(kind==='section')content.sections[index][key]=url;
 else if(kind==='gallery'){content.sections[index].items[subindex][key]=url;}
 renderAll();changed();notice('Image uploaded. Save all changes to publish the new image.');
}

if(!configured){hideAll();$('config-panel').classList.remove('hidden');notice('Supabase configuration is missing. Edit config.js before using the admin panel.',true);}
else {
 $('login-form').addEventListener('submit',login);
 $('save-button').addEventListener('click',save);$('save-button-bottom').addEventListener('click',save);
 $('add-nav').addEventListener('click',()=>{content.nav ||= [];content.nav.push({label:'NEW LINK',href:'#new-section'});renderNav();changed();});
 $('add-section').addEventListener('click',()=>{content.sections ||= [];let id='new-section';let n=2;while(content.sections.some(s=>s.id===id)){id=`new-section-${n++}`;}content.sections.push({id,title:'New section title',eyebrow:'NEW SECTION',type:'text',visible:true,content:'Add your content here.'});content.nav ||= [];content.nav.push({label:'NEW SECTION',href:`#${id}`});renderAll();changed();});
 $('add-project').addEventListener('click',()=>{content.projects ||= [];content.projects.push({title:'New project',category:'Category',description:'Write a short project description.',image:'',url:'#'});renderProjects();changed();});
 document.addEventListener('input',e=>{if(e.target.matches('[data-kind]'))setValue(e.target);});
 document.addEventListener('change',e=>{const el=e.target;if(el.matches('[data-kind]')){setValue(el);if(el.dataset.kind==='section'&&el.dataset.field==='type')renderSections();}if(el.matches('input[type="file"][data-upload-kind]'))uploadImage(el.files?.[0],el.dataset.uploadKind,Number(el.dataset.index),el.dataset.field,el.dataset.subindex===undefined?undefined:Number(el.dataset.subindex));});
 document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(b)doAction(b);if(e.target.closest('#logout-button'))supabase.auth.signOut().then(()=>location.reload());});
 supabase.auth.getSession().then(async({data})=>{if(data.session)await startEditor();else{$('login-panel').classList.remove('hidden');}});
}
