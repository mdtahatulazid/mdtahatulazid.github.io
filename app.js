/* Fieldnotes: an independent, source-grounded personal portfolio. */
const ASSET = 'assets/';
const videoUrl = 'https://www.facebook.com/mdtahatulazid.litun01/videos/1319189045419602';
const portfolioRequest = 'mailto:litunurp18@gmail.com?subject=Request%20for%20Portfolio';

const projects = [
  {id:'shaheb-bazar',category:'planning',type:'ACADEMIC PLANNING STUDIO',place:'Rajshahi, Bangladesh',title:'Shaheb Bazar City Centre',subtitle:'Urban renewal & market-area revitalisation',image:'studio-06.jpg',page:6,summary:'A proposed urban-renewal concept for Rajshahi’s Shaheb Bazar and RDA Market precinct, responding to traffic conflict, narrow walkways and unorganised commerce.',context:'The study documented existing street-level conditions before developing a proposed site plan that considers pedestrian access, public space, street layout, parking and organised commercial activity. The design is an academic proposal, not a completed construction project.',contribution:'Urban planning studio analysis, site assessment, design visualisation and feasibility-oriented presentation.',tags:['Urban renewal','Site planning','Public space']},
  {id:'smart-village',category:'planning',type:'ACADEMIC DESIGN CONCEPT',place:'Bangladesh',title:'Smart Communal Living',subtitle:'Bridging tradition and innovation in villages',image:'studio-09.jpg',page:9,summary:'A smart-village planning concept integrating traditional communal life with better access to social infrastructure, connectivity and sustainable technology.',context:'The concept explores how community identity and new technology can coexist in rural settlements. Project materials include proposed designs and a separate original video.',contribution:'Conceptual rural planning, visual presentation and exploration of community-oriented development interventions.',tags:['Rural planning','Smart villages','Sustainability'],video:videoUrl},
  {id:'transport',category:'planning',type:'ACADEMIC TRANSPORT STUDIO',place:'Rajshahi, Bangladesh',title:'Nowdapara Amchottor Intersection',subtitle:'Intersection capacity & level-of-service assessment',image:'studio-08.jpg',page:8,summary:'Traffic-volume and intersection performance assessment using survey data, flow calculations and level-of-service analysis.',context:'The study examines movement at the Aam Chattar intersection in Rajshahi, using directional vehicle counts, peak-hour considerations, volume-to-capacity ratios and traffic-performance indicators.',contribution:'Transport planning studio survey analysis, level-of-service assessment and traffic visualisation.',tags:['Transportation','Traffic surveys','Spatial analysis']},
  {id:'kumarapara',category:'planning',type:'ACADEMIC RURAL PLANNING STUDIO',place:'Kumarapara, Premtoli, Rajshahi',title:'Community Health & Wellbeing',subtitle:'Rural health access and social resilience',image:'studio-07.jpg',page:7,summary:'A community study examining emotional, psychological and social wellbeing among traditional potter households.',context:'The portfolio describes a survey of 30 respondents and explores how access to health facilities and social support relates to community wellbeing and cultural livelihoods.',contribution:'Community-focused rural planning study, survey interpretation and presentation of wellbeing indicators.',tags:['Community wellbeing','Rural health','Survey research']},
  {id:'eptisa',category:'professional',type:'PROFESSIONAL ASSIGNMENT',place:'Southeastern Bangladesh',title:'Local Preparedness Planning',subtitle:'GIS mapping & municipal consultation',image:'field-22.jpg',page:22,summary:'GIS and facilitation support for hazard-specific local preparedness plans across multiple municipalities.',context:'While working with Eptisa on the Local Government COVID-19 Response and Recovery Project, Tahatul helped produce map layouts, analyse planning data and facilitate municipal consultations on flood, landslide, cyclone and lightning risks.',contribution:'GIS Expert & Senior Trainer: maps, stakeholder sessions, field information management and Local Preparedness Plan support.',tags:['GIS','Disaster preparedness','Municipal planning']},
  {id:'heat',category:'field',type:'FIELD RESEARCH',place:'Rajshahi City, Bangladesh',title:'Urban Heat Hotspot Study',subtitle:'Perceptions, impacts & adaptive capacity',image:'field-29.jpg',page:29,summary:'Field-survey support for a research project on urban heat-wave perceptions and community capacity in Rajshahi.',context:'The research investigates the lived effects of heat exposure in urban hotspots. The supplied portfolio documents participation in field data collection under the RUET research team.',contribution:'Field enumerator; supported respondent engagement and structured survey data collection.',tags:['Urban heat','Climate vulnerability','Field survey']},
  {id:'housing',category:'field',type:'FIELD RESEARCH',place:'Rajshahi City, Bangladesh',title:'Sustainable Housing Affordability',subtitle:'Understanding the experiences of urban renters',image:'field-30.jpg',page:30,summary:'Survey work focused on housing affordability and the sustainability challenges experienced by renters in Rajshahi.',context:'The study examined how renters navigate cost, access and housing quality within a rapidly changing city. Project documentation identifies a BUET URP research context.',contribution:'Field enumerator for household-level data collection and survey implementation.',tags:['Housing','Urban livelihoods','Community surveys']},
  {id:'medical-waste',category:'field',type:'FIELD RESEARCH',place:'Rajshahi City, Bangladesh',title:'Medical Waste Governance',subtitle:'Accountability in health-sector waste systems',image:'field-31.jpg',page:31,summary:'A field investigation of how healthcare facilities manage and dispose of medical waste, with a focus on governance.',context:'The documented study consulted three public and three private medical facilities and the relevant city-corporation authority about waste segregation, handling and oversight.',contribution:'Field enumerator for information collection and governance-focused research.',tags:['Waste management','Governance','Public health']}
];

const publications = [
  {year:'2026',type:'chapter',title:'Quantifying Green Infrastructure’s Contribution to Urban Sustainability in Rajshahi City Using GIS-Based Multi-criteria Analysis',venue:'Green Policies for a Sustainable World · Springer',url:'https://doi.org/10.1007/978-3-032-08828-4_8'},
  {year:'2026',type:'chapter',title:'Integrating Urban Green Space Policies for Sustainable Environmental Quality: A Case Study of Dhaka',venue:'Green Policies for a Sustainable World · Springer',url:'https://www.researchgate.net/publication/400057054_Integrating_Urban_Green_Space_Policies_for_Sustainable_Environmental_Quality_A_Case_Study_of_Dhaka'},
  {year:'2026',type:'conference',title:'Integrating Nature-Based Solutions for Urban Heat Mitigation: A Geospatial Study in Dhaka',venue:'8th International Conference on Sustainable Development',url:'https://www.researchgate.net/publication/404775309_Integrating_Nature-Based_Solutions_for_Urban_Heat_Mitigation_A_Geospatial_Study_in_Dhaka_for_presentation_at_the_8th_International_Conference_on_Sustainable_Development'},
  {year:'2025',type:'chapter',title:'Geospatial Analysis of Flood and Drought Vulnerability in Rajshahi District: A Formal Regionalization and GIS-Based Approach for Upazila-Level Assessment',venue:'Surface, Sub-Surface Hydrology and Management · Springer',url:'https://doi.org/10.1007/978-3-031-62376-9_11'},
  {year:'2025',type:'journal',title:'Performances of Standing Committees of Union Parishad in Bangladesh: A Descriptive Analysis',venue:'Research article',url:'https://www.researchgate.net/publication/396047753_Per-formances_of_standing_committees_of_Union_Parishad_UP_in_Bangladesh_A_descriptive_analysis'},
  {year:'2024',type:'conference',title:'Women and Flood Resilience in Feni: Vulnerabilities, Empowerment, and Gender-Sensitive Adaptation',venue:'10th International Conference on Water and Flood Management',url:'https://www.researchgate.net/publication/387056930_Women_and_Flood_Resilience_in_Feni_Vulnerabilities_Empowerment_and_Gender-Sensitive_Adaptation'},
  {year:'2024',type:'conference',title:'Evaluating the Impact of Padma Garden and Other Riverside Areas on River Bank Erosion and Sustainable Infrastructure Development in Rajshahi',venue:'10th International Conference on Water and Flood Management',url:'https://www.researchgate.net/publication/387057848_Evaluating_the_Impact_of_Padma_Garden_and_Other_Riverside_Areas_on_River_Bank_Erosion_and_Sustainable_Infrastructure_Development_in_Rajshahi'},
  {year:'2024',type:'conference',title:'Assessing the Impact of River Erosion on Human Mobility: A Case Study of Khidirpur Char, Rajshahi',venue:'10th International Conference on Water and Flood Management',url:'https://www.researchgate.net/publication/387057081_Assessing_The_Impact_of_River_Erosion_on_Human_Mobility_Challenges_and_Solutions_-_A_Case_Study_on_Khidirpur_Char_Rajshahi'},
  {year:'2024',type:'conference',title:'Assessing Land Use and Land Cover Changes and Climatic Impacts with an NBS Framework in Cox’s Bazar',venue:'10th International Conference on Water and Flood Management',url:'https://www.researchgate.net/publication/387498104_Assessing_Land_Use_and_Land_Cover_Changes_and_Climatic_Impacts_with_NBS_Framework_in_Cox%27s_Bazar_Bangladesh'},
  {year:'2024',type:'journal',title:'Passengers’ Satisfaction Level on Bus Services in Chittagong City Using Multiple Linear Regression',venue:'Journal of Transportation Systems · 9(1)',url:'https://www.researchgate.net/publication/380167750_Passengers_Satisfaction_Level_on_Bus_Services_in_Chittagong_City_Using_Multiple_Linear_Regression'},
  {year:'2024',type:'conference',title:'Assessing the Socio-economic Implications of Climate Change on Betel Leaf Cultivation in Mohanpur Upazila, Rajshahi',venue:'7th ICCESD · KUET',url:'https://www.researchgate.net/publication/378138862_ASSESSING_THE_SOCIO-ECONOMIC_IMPLICATIONS_OF_CLIMATE_CHANGE_ON_BETEL_LEAF_CULTIVATION_IN_MOHANPUR_UPAZILA_RAJSHAHI'},
  {year:'2023',type:'conference',title:'Impact of Traffic Congestion in Roundabout: A Study on Gazipur Chowrasta',venue:'4th International Conference on Planning, Architecture & Civil Engineering',url:'https://www.researchgate.net/publication/373255029_Impact_of_Traffic_Congestion_in_Roundabout_A_study_on_Gazipur_Chowrasta'},
  {year:'2023',type:'journal',title:'Critical Gap Distribution Estimation for Different Types of Vehicles in Rajshahi City, Bangladesh',venue:'Journal of Interior Designing and Regional Planning · 8(1)',url:'https://www.researchgate.net/publication/368287446_Critical_Gap_Distribution_Estimation_for_Different_Types_of_Vehicles_in_Rajshahi_City_Bangladesh'}
];

const timeline = [
  {
    date:'SEP 2026 — PRESENT',title:'Deputy Project Manager',logo:'assets/brands/intelis.jpeg',logoAlt:'Intelis Solution Ltd. logo',brand:'intelis',
    companies:[{name:'Intelis Solution Ltd.',url:'https://intelissolution.com/'}],
    summary:'Coordinate project teams, consultants and client communication; track workplans, technical reports, deliverables and day-to-day project progress.',
    focus:['Project delivery','Team coordination'],status:'CURRENT · FULL-TIME',current:true
  },
  {
    date:'JAN 2026 — PRESENT',title:'Executive — Carbon Credit',logo:'assets/brands/netzero.png',logoAlt:'NetZero circular-economy mark',brand:'netzero',
    companies:[{name:'NetZero Carbon Ltd. (NZC)',url:'https://netzerocarbon.com.bd/'}],
    summary:'Support climate and carbon-credit project development, emissions-related research, environmental documentation and waste-to-resource concepts.',
    note:'Continuing part-time since 20 October 2026 · Associated with B&F Group',
    focus:['Climate & environment','Carbon credits'],status:'CURRENT · PART-TIME',current:true
  },
  {
    date:'JAN — 19 OCT 2026',title:'Executive — Administration & Operations',logo:'assets/brands/bnf.png',logoAlt:'B&F Group logo',brand:'bnf',
    companies:[{name:'B&F Group',url:'https://bnf.com.bd/'}],
    summary:'Managed office correspondence, meeting arrangements, records and documentation; assisted administrative workflows, internal coordination and project operations.',
    focus:['Administration','Operations'],status:'COMPLETED · FULL-TIME'
  },
  {
    date:'JAN — AUG 2025',title:'GIS Expert & Trainer',logo:'assets/brands/eptisa.png',logoAlt:'Eptisa logo',brand:'eptisa',
    companies:[{name:'Eptisa Servicios de Ingeniería S.L.',url:'https://www.eptisa.com/'}],
    summary:'Produced GIS road maps and technical-report inputs; adapted training materials and facilitated community preparedness sessions under LGCRRP.',
    focus:['GIS mapping','Local preparedness']
  },
  {
    date:'NOV 2023 — APR 2024',title:'Programme Intern',logo:'assets/brands/tib.png',logoAlt:'Transparency International Bangladesh logo',brand:'tib',
    companies:[{name:'Transparency International Bangladesh',url:'https://www.ti-bangladesh.org/en'}],
    summary:'Assisted PACTA field activities, civic-engagement coordination, community participation and assessment of digital public services in Rajshahi.',
    focus:['Civic engagement','Field coordination']
  },
  {
    date:'APR — JUL & NOV — DEC 2022',title:'Master Trainer & Facilitator',logo:'assets/brands/wave.png',logoAlt:'WAVE Foundation logo',brand:'wave',
    companies:[{name:'WAVE Foundation',url:'https://wavefoundationbd.org/'}],
    summary:'Trained survey volunteers, reviewed data quality and schedules, compiled records and led citizen-led assessment workshops.',
    focus:['Training','Survey quality']
  },
  {
    date:'2019 — 2024',title:'Youth Civic Engagement Volunteer',logo:'assets/brands/tib.png',logoAlt:'Transparency International Bangladesh logo',brand:'tib',
    companies:[{name:'Transparency International Bangladesh',url:'https://www.ti-bangladesh.org/en'}],
    summary:'Supported youth-led anti-corruption awareness, transparency campaigns, community outreach and public-service monitoring.',
    focus:['Youth leadership','Community outreach']
  },
  {
    date:'2018 — 2023',title:'ICT & Science Instructor',logo:'assets/brands/kaathpencil.png',logoAlt:'KaathPencil educational logo',brand:'kaathpencil',
    companies:[{name:'KaathPencil Online Education Centre'},{name:'Advance Education Centre'}],
    summary:'Delivered ICT and science lessons, prepared study materials and guided students through interactive classroom and online learning.',
    focus:['ICT & science','Teaching']
  }
];

const archive = [
  {image:'studio-06.jpg',label:'Shaheb Bazar — proposed site plan',sub:'PLANNING STUDIO · PDF P. 06',group:'studio'},
  {image:'studio-09.jpg',label:'Smart Communal Living',sub:'RURAL DESIGN · PDF P. 09',group:'studio'},
  {image:'field-22.jpg',label:'Municipal consultations',sub:'DISASTER PREPAREDNESS · PDF P. 22',group:'field'},
  {image:'field-29.jpg',label:'Urban heat survey',sub:'FIELD RESEARCH · PDF P. 29',group:'field'},
  {image:'field-24.jpg',label:'Volunteer training',sub:'COMMUNITY ENGAGEMENT · PDF P. 24',group:'community'}
].concat(window.HYBRID_GALLERY||[]);

const $ = (selector,root=document)=>root.querySelector(selector);
const $$ = (selector,root=document)=>[...root.querySelectorAll(selector)];

/* Keep the reading order in navigation and on the home chapter grid in sync. */
const chapterOrder=['about.html','experience.html','fieldwork.html','projects.html','research.html','gallery.html','recognition.html','contact.html'];
$$('.desktop-nav, .mobile-nav').forEach(nav=>{
  const about=nav.querySelector('a[href="about.html"]');
  const experience=nav.querySelector('a[href="experience.html"]');
  if(about&&experience)about.after(experience);
});
const homeChapters=$('#chapter-rail');
if(homeChapters){
  chapterOrder.forEach((href,index)=>{
    const card=homeChapters.querySelector(`a[href="${href}"]`);
    if(!card)return;
    homeChapters.appendChild(card);
    const number=String(index+1).padStart(2,'0');
    if(card.querySelector('.chapter-num'))card.querySelector('.chapter-num').textContent=number;
    if(card.querySelector('.chapter-meta small'))card.querySelector('.chapter-meta small').textContent=`EPISODE ${number}`;
  });
}

/* An individually curated, accessible moving fieldnote beneath every subpage hero. */
const pageMarquees={
  about:['PEOPLE BEFORE PLANS','CURIOSITY ABOUT CITIES','CLIMATE RESILIENCE','EVIDENCE & EMPATHY','PLANNING WITH COMMUNITIES'],
  fieldwork:['COMMUNITY CONSULTATIONS','MAPPING IN THE FIELD','LOCAL PREPAREDNESS','SURVEY & LISTENING','PEOPLE-CENTRED PLANNING'],
  projects:['URBAN DESIGN','SMART COMMUNITIES','TRANSPORT PLANNING','SUSTAINABLE SETTLEMENTS','GEOSPATIAL SOLUTIONS'],
  research:['FLOOD VULNERABILITY','URBAN GREEN SPACE','CLIMATE ADAPTATION','RESEARCH PUBLICATIONS','GIS-BASED EVIDENCE'],
  gallery:['FIELD MOMENTS','PLANNING STUDIOS','COMMUNITY STORIES','VISUAL NOTES','BEHIND THE MAPS'],
  recognition:['PUBLICATIONS','CONFERENCES','TRAINING','RESEARCH CONTRIBUTIONS','COMMUNITY SERVICE'],
  contact:['LET’S COLLABORATE','CITIES & CLIMATE','RESEARCH PARTNERSHIPS','GIS & PLANNING','IDEAS INTO ACTION']
};
const experienceMarquee=[
  {name:'INTELIS SOLUTION',url:'https://intelissolution.com/',logo:'assets/brands/intelis.jpeg'},
  {name:'B&F GROUP',url:'https://bnf.com.bd/',logo:'assets/brands/bnf.png'},
  {name:'NETZERO CARBON',url:'https://netzerocarbon.com.bd/',logo:'assets/brands/netzero.png'},
  {name:'EPTISA',url:'https://www.eptisa.com/',logo:'assets/brands/eptisa.png'},
  {name:'TRANSPARENCY INTERNATIONAL BANGLADESH',url:'https://www.ti-bangladesh.org/en',logo:'assets/brands/tib.png'},
  {name:'WAVE FOUNDATION',url:'https://wavefoundationbd.org/',logo:'assets/brands/wave.png'},
  {name:'KAATHPENCIL EDUCATION',logo:'assets/brands/kaathpencil.png'}
];
const pageId=document.body.dataset.page;
const subpageHero=$('.subpage-hero');
if(subpageHero){
  const items=pageId==='experience'?experienceMarquee:(pageMarquees[pageId]||[]).map(name=>({name}));
  if(items.length){
    const marqueeItems=items.map(item=>{
      const mark=item.logo?`<img loading="lazy" src="${item.logo}" alt=""/>`:`<span class="page-marquee-symbol">${item.mark||'✳'}</span>`;
      const inside=`${mark}<span>${item.name}</span><span class="page-marquee-separator">✳</span>`;
      return item.url?`<a class="page-marquee-item" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${item.name}">${inside}</a>`:`<span class="page-marquee-item">${inside}</span>`;
    }).join('');
    subpageHero.insertAdjacentHTML('afterend',`<section class="page-marquee" aria-label="${pageId==='experience'?'Organisations in my professional journey':'Themes on this page'}"><div class="page-marquee-track"><div class="page-marquee-group">${marqueeItems}</div><div class="page-marquee-group" aria-hidden="true" inert>${marqueeItems}</div></div></section>`);
  }
  const newEpisode=chapterOrder.indexOf(`${pageId}.html`)+1;
  if(newEpisode>0){
    const prefix=String(newEpisode).padStart(2,'0');
    const index=subpageHero.querySelector('.subpage-index');
    if(index)index.textContent=`FIELDNOTES / ${prefix}`;
    const sectionEpisode=$('main .section-heading .eyebrow');
    if(sectionEpisode&&/^EPISODE \d{2}/.test(sectionEpisode.textContent))sectionEpisode.textContent=sectionEpisode.textContent.replace(/^EPISODE \d{2}/,`EPISODE ${prefix}`);
  }
}
let introTimer;
let lastFocused = null;
const intro = $('#intro');
const chooser = $('#chooser');
const site = $('#site');
const introReadyPanel = $('#intro-ready-panel');
const introEnterButton = $('#enter-portfolio');

function revealIntroReady(){
  if(!intro)return;
  intro.classList.add('is-ready');
  introReadyPanel?.setAttribute('aria-hidden','false');
  if(introEnterButton){introEnterButton.disabled=false;introEnterButton.removeAttribute('tabindex');}
}
function resetIntroReady(){
  intro?.classList.remove('is-ready');
  introReadyPanel?.setAttribute('aria-hidden','true');
  if(introEnterButton){introEnterButton.disabled=true;introEnterButton.tabIndex=-1;}
}
function showChooser(){if(!intro||!chooser)return;clearTimeout(introTimer);intro.classList.add('is-hidden');chooser.classList.remove('is-hidden');document.body.classList.add('locked');}
function startExperience(mode){
  if(!intro||!chooser)return;
  chooser.classList.add('is-hidden');intro.classList.add('is-hidden');site.classList.remove('is-inert');document.body.classList.remove('locked');
  const destinations={research:'research.html',partner:'fieldwork.html',explorer:'gallery.html'};
  if(destinations[mode]){window.location.href=destinations[mode];return;}
  window.scrollTo({top:0,behavior:'instant'});
}
function enterPortfolio(){clearTimeout(introTimer);startExperience('overview');}
function replay(){
  if(!intro||!chooser)return;
  clearTimeout(introTimer);resetIntroReady();
  site.classList.add('is-inert');chooser.classList.add('is-hidden');intro.classList.remove('is-hidden');
  document.body.classList.add('locked');window.scrollTo({top:0,behavior:'instant'});
  introTimer=setTimeout(revealIntroReady,window.matchMedia('(prefers-reduced-motion: reduce)').matches?50:4200);
}
if(intro && chooser){
  $('#skip-intro')?.addEventListener('click',enterPortfolio);
  introEnterButton?.addEventListener('click',enterPortfolio);
  $$('.profile').forEach(button=>button.addEventListener('click',()=>startExperience(button.dataset.profile)));
  $('#switch-profile')?.addEventListener('click',showChooser);
  $('#watch-again')?.addEventListener('click',replay);
  if(window.location.hash==='#profiles')window.history.replaceState(null,'',window.location.pathname+window.location.search);
  introTimer=setTimeout(revealIntroReady,window.matchMedia('(prefers-reduced-motion: reduce)').matches?50:4200);
  document.body.classList.add('locked');
}

function renderProjects(filter='all'){
  const chosen=filter==='all'?projects:projects.filter(p=>p.category===filter);
  $('#projects-grid').innerHTML=chosen.map((p,i)=>`<article class="project-card"><div class="project-media"><img loading="lazy" src="${ASSET+p.image}" alt="Original portfolio page showing ${p.title}"><span class="project-type">${p.type}</span><span class="project-media-number">${String(i+1).padStart(2,'0')}</span></div><div class="project-body"><span class="project-eyebrow">${p.place.toUpperCase()}</span><h3>${p.title}</h3><p>${p.summary}</p><div class="project-bottom"><span>${p.subtitle}</span><button type="button" data-project="${p.id}" aria-label="View ${p.title} project details">VIEW CASE ↗</button></div></div></article>`).join('');
}
if($('#projects-grid'))renderProjects();
$('#project-filters')?.addEventListener('click',e=>{const button=e.target.closest('button[data-filter]');if(!button)return;$$('#project-filters button').forEach(b=>b.classList.remove('is-active'));button.classList.add('is-active');renderProjects(button.dataset.filter);});

function renderPublications(type='all'){
  const chosen=type==='all'?publications:publications.filter(p=>p.type===type);
  const display={chapter:'BOOK CHAPTER',journal:'JOURNAL ARTICLE',conference:'CONFERENCE PAPER'};
  $('#publications-grid').innerHTML=chosen.map(p=>`<article class="publication-card"><div class="pub-top"><span class="pub-type">${display[p.type]}</span><span class="pub-year">${p.year}</span></div><h3>${p.title}</h3><p>${p.venue}</p><a href="${p.url}" target="_blank" rel="noopener noreferrer">VIEW PUBLICATION ↗</a></article>`).join('');
}
if($('#publications-grid'))renderPublications();
$('#publication-filters')?.addEventListener('click',e=>{const button=e.target.closest('button[data-type]');if(!button)return;$$('#publication-filters button').forEach(b=>b.classList.remove('is-active'));button.classList.add('is-active');renderPublications(button.dataset.type);});

if($('#timeline')){
  const introLabel=$('.journey-number');
  if(introLabel)introLabel.textContent='SELECTED ROLES / THE JOURNEY';
  $('#timeline').innerHTML=timeline.map((item,index)=>{
    const logo=item.logo?`<img src="${item.logo}" alt="${item.logoAlt||''}" loading="lazy">`:`<span>${item.mark}</span>`;
    const primaryUrl=item.companies.find(company=>company.url)?.url;
    const brandClass=`timeline-brand timeline-brand--${item.brand||'default'}`;
    const brand=primaryUrl?`<a class="${brandClass}" href="${primaryUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${item.companies[0].name}">${logo}</a>`:`<div class="${brandClass}">${logo}</div>`;
    const companies=item.companies.map(company=>company.url?`<a href="${company.url}" target="_blank" rel="noopener noreferrer">${company.name}<span aria-hidden="true"> ↗</span></a>`:`<span>${company.name}</span>`).join('<span class="timeline-company-divider">&</span>');
    const focus=(item.focus||[]).map(tag=>`<span>${tag}</span>`).join('');
    return `<article class="timeline-item${item.current?' is-current':''}" style="--card-index:${index}"><div class="timeline-card-top"><span class="timeline-card-index">${String(index+1).padStart(2,'0')} / EXPERIENCE</span><span class="timeline-time">${item.date}</span></div><div class="timeline-identity">${brand}<div class="timeline-company">${companies}</div></div><h3>${item.title}</h3><p class="timeline-description">${item.summary}</p>${item.note?`<p class="timeline-period">${item.note}</p>`:''}<div class="timeline-card-bottom"><div class="timeline-tags">${focus}</div>${item.status?`<span class="timeline-now${item.current?'':' is-secondary'}">${item.status}</span>`:''}</div></article>`;
  }).join('');
}

function renderGallery(filter='all'){
  const chosen=archive.map((item,i)=>({...item,index:i})).filter(item=>filter==='all'||item.group===filter);
  $('#archive-grid').innerHTML=chosen.map(item=>`<button class="archive-tile" type="button" data-image-index="${item.index}" aria-label="View ${item.label} portfolio image"><img src="${ASSET+item.image}" alt="${item.label}" loading="lazy"><span class="archive-caption"><span><small>${item.sub}</small><strong>${item.label}</strong></span><b>↗</b></span></button>`).join('');
}
if($('#archive-grid'))renderGallery();
$('#gallery-filters')?.addEventListener('click',e=>{const button=e.target.closest('[data-gallery-filter]');if(!button)return;$$('#gallery-filters button').forEach(b=>b.classList.remove('is-active'));button.classList.add('is-active');renderGallery(button.dataset.galleryFilter);});

const modal = $('#detail-modal');
function openProject(id){
  const p=projects.find(item=>item.id===id);if(!p)return;
  lastFocused=document.activeElement;
  $('#modal-body').innerHTML=`<div class="modal-header"><p class="eyebrow">${p.type} / ${p.place.toUpperCase()}</p><h2 id="modal-title">${p.title}</h2><p>${p.summary}</p></div><img class="modal-img" src="${ASSET+p.image}" alt="Portfolio documentation for ${p.title}"><div class="modal-content"><div><h3>Project context</h3><p>${p.context}</p><h3>Documented contribution</h3><p>${p.contribution}</p><div class="modal-actions"><a href="${portfolioRequest}">REQUEST ORIGINAL PORTFOLIO ↗</a>${p.video?`<a class="secondary" href="${p.video}" target="_blank" rel="noopener noreferrer">WATCH PROJECT VIDEO ↗</a>`:''}</div></div><div><h3>Focus areas</h3><div class="modal-tags">${p.tags.map(tag=>`<span>${tag}</span>`).join('')}</div><p style="margin-top:23px">Visual from the supplied portfolio PDF, page ${p.page}. Professional projects and academic concepts are distinguished throughout the site.</p></div></div>`;
  modal.classList.remove('is-hidden');document.body.classList.add('locked');$('.modal-close').focus();
}
function closeModal(){modal.classList.add('is-hidden');document.body.classList.remove('locked');lastFocused?.focus();}
$('#projects-grid')?.addEventListener('click',e=>{const button=e.target.closest('[data-project]');if(button)openProject(button.dataset.project);});
$('.modal-close')?.addEventListener('click',closeModal);
$('.modal-backdrop')?.addEventListener('click',closeModal);

const lightbox = $('#image-lightbox');
function openLightbox(index){const item=archive[index];if(!item)return;lastFocused=document.activeElement;$('#lightbox-img').src=ASSET+item.image;$('#lightbox-img').alt=item.label;$('#lightbox-caption').textContent=item.label+' · '+item.sub;lightbox.classList.remove('is-hidden');document.body.classList.add('locked');$('#lightbox-close').focus();}
function closeLightbox(){lightbox.classList.add('is-hidden');document.body.classList.remove('locked');lastFocused?.focus();}
$('#archive-grid')?.addEventListener('click',e=>{const button=e.target.closest('[data-image-index]');if(button)openLightbox(Number(button.dataset.imageIndex));});
$('#lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
$$('.imported-content .strip img').forEach(img=>{
  img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label','Expand portfolio image');
  const expand=()=>{const relative=img.getAttribute('src')?.replace(/^assets\//,'');const idx=archive.findIndex(item=>item.image===relative);if(idx>=0)openLightbox(idx);};
  img.addEventListener('click',expand);
  img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();expand();}});
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(modal&&!modal.classList.contains('is-hidden'))closeModal();else if(lightbox&&!lightbox.classList.contains('is-hidden'))closeLightbox();else if(chooser&&!chooser.classList.contains('is-hidden')&&!site.classList.contains('is-inert')){chooser.classList.add('is-hidden');document.body.classList.remove('locked');}}});

const menuToggle=$('#menu-toggle');
menuToggle.addEventListener('click',()=>{const opened=$('#mobile-nav').classList.toggle('is-hidden')===false;menuToggle.setAttribute('aria-expanded',String(opened));});
$$('#mobile-nav a').forEach(a=>a.addEventListener('click',()=>{$('#mobile-nav').classList.add('is-hidden');menuToggle.setAttribute('aria-expanded','false');}));

/* The opening sequence never advances automatically; entry is a deliberate action. */
