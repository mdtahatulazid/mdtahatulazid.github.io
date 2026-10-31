/* EXPERIENCE REDESIGN — user-supplied visual archive and privacy-safe evidence.
   All published contract references are permanently masked JPEG excerpts;
   private, complete agreements are never bundled with the public website. */
(() => {
  'use strict';
  const photo = (file, title, body, tag = 'FIELD EVIDENCE') => ({image: file ? (file.startsWith('assets/') ? file : 'assets/experience/' + file + '.jpg') : '',title,body,tag});
  const legacy = (file, title, body, tag = 'PORTFOLIO ARCHIVE') => photo('assets/claude/' + file + '.jpg', title, body, tag);
  const note = (title, body, tag = 'ROLE & CONTRIBUTION') => photo('', title, body, tag);
  const contract = (file, title, body) => ({...photo(file, title, body, 'PUBLIC CONTRACT EXCERPT'),document:'assets/experience/'+file+'.jpg'});
  const entries = [
    {
      id:'intelis',category:'professional',org:'Intelis Solution Ltd.',position:'Deputy Project Manager',
      period:'SEP 2026 — PRESENT',location:'Bangladesh',logo:'assets/brands/intelis.jpeg',cover:'',
      label:'CURRENT / PROJECT MANAGEMENT',
      summary:'Coordinating delivery, consultants, client communication and technical documentation across multidisciplinary assignments.',
      detail:'My work spans project coordination, workplan tracking, deliverable review and bridging technical teams with clients and partners.',
      skills:['Project management','Technical coordination','Reporting'],
      stories:[
        contract('contract-intelis-redacted','My Deputy Project Manager appointment','A public excerpt of my Intelis employment agreement. Financial details, service duration, confidential clauses and personal contacts have been permanently removed from this public image.'),
        photo('intelis-jeremy-call','Coordinating expert input with Jeremy J. Davis','A documented online working discussion with international adviser Jeremy J. Davis connected to consultant coordination and technical assignment planning. This photograph records the meeting, not the result of an engagement.','INTERNATIONAL EXPERT COORDINATION'),
        note('Keeping complex assignments moving','As Deputy Project Manager, I support day-to-day consultancy delivery: coordinating teams, tracking technical outputs, consolidating information and communicating with project stakeholders.')
      ]
    },
    {
      id:'nzc',category:'professional',org:'NetZero Carbon Limited (NZC)',position:'Executive — Carbon Credit',
      period:'JAN 2026 — PRESENT',location:'Dhaka & Matuail, Bangladesh',logo:'assets/brands/netzero.png',
      cover:'assets/experience/nzc-ifc-room.jpg',label:'CLIMATE / CIRCULAR ECONOMY',
      summary:'Carbon-credit development, waste-to-resource field research, international technical engagement and investment pitching.',
      detail:'This work includes industrial exposure, Matuail waste-characterization exercises, visiting Korean technical teams and stakeholder engagement around the proposed Dhaka Resource Circulation Industrial Park (DRCIP).',
      skills:['Carbon markets','Waste characterization','Investment pitching'],
      stories:[
        contract('contract-nzc-redacted','NetZero Carbon appointment evidence','The NZC appointment agreement is represented by a redacted, selected public cover excerpt. Original private terms, compensation and employment duration are not distributed.'),
        photo('nzc-first-factory','My first factory visit with the NZC team','An early industrial site visit helped me observe the production environment, site operations and material-handling practices in person. The material shown is not identified in the available documentation.','INDUSTRIAL EXPOSURE'),
        photo('nzc-first-team','Understanding operations on the ground','I joined colleagues during my first NZC factory visit to understand the industrial context and practical questions behind project development.','INDUSTRIAL EXPOSURE'),
        photo('nzc-matuail-sort','First waste segregation at Matuail','Our field team sorted mixed municipal waste to begin identifying its visible composition and characteristics. The purpose was to build practical evidence for resource-circulation planning; no quantitative test result is asserted here.','WASTE CHARACTERIZATION'),
        photo('nzc-matuail-scale','Separating and weighing waste fractions','Manual sorting and field weighing helped examine different waste fractions during the initial characterization exercise at Matuail Landfill.','WASTE CHARACTERIZATION'),
        photo('nzc-korean-group','Supporting visiting Korean delegates','I helped welcome and orient visiting Korean technical delegates during their Bangladesh visit and related discussions about the proposed resource-circulation initiative.','INTERNATIONAL ENGAGEMENT'),
        photo('nzc-korean-site','Matuail site walk with the delegation','I accompanied visiting experts during a site walk, helping connect local site observations with the technical discussions.','INTERNATIONAL ENGAGEMENT'),
        photo('nzc-carbobon','Exploring collaboration with CarboBon','A meeting with the CarboBon team explored possible areas of climate and carbon-market collaboration. This documents a discussion, not a signed partnership.','COLLABORATION'),
        photo('nzc-ifc-group','Taking the DRCIP concept to IFC Dhaka','I participated in the team meeting at the International Finance Corporation (IFC), a member of the World Bank Group, in Dhaka.','INVESTMENT ENGAGEMENT'),
        photo('nzc-ifc-docs','Reviewing the project proposal and materials','The team and IFC participants examined project materials during a discussion of the proposed Dhaka Resource Circulation Industrial Park.','INVESTMENT ENGAGEMENT'),
        photo('nzc-ifc-room','Leading the DRCIP investment pitch','I personally led the investment presentation at IFC’s Dhaka office, outlining the waste-to-resource vision, proposed implementation approach and potential financing opportunities. The meeting itself does not imply an investment or financing commitment.','MY CONTRIBUTION / LEAD PRESENTER'),
        photo('nzc-kora-group','Technical visit with the KORA delegation','I accompanied visiting representatives associated with the Korea Resource Circulation Service Agency (KORA) at Matuail. The field activity was designed to help them observe local waste conditions.','KOREAN DELEGATION'),
        photo('nzc-kora-sort','Joint waste segregation and observation','The on-site team separated visible waste fractions while the visiting delegation observed and documented the process. This was a further characterization exercise, separate from our initial field sorting.','KOREAN DELEGATION')
      ]
    },
    {
      id:'bnf',category:'professional',org:'B&F Group',position:'Executive — Administration & Operations',
      period:'JAN — 19 OCT 2026',location:'Dhaka, Bangladesh',logo:'assets/brands/bnf.png',cover:'assets/experience/bnf-dscc-present.jpg',
      label:'OPERATIONS / PROJECT DEVELOPMENT',
      summary:'Operational coordination, industrial site reviews and project presentations for the DRCIP/DRCP waste-to-resource initiative.',
      detail:'At B&F, I supported daily administration while contributing to meetings, factory visits and government-facing presentations. The Dhaka Resource Circulation Industrial Park is a proposed resource-circulation initiative around Matuail Landfill.',
      skills:['Stakeholder meetings','Operations','DRCIP presentations'],
      stories:[
        photo('bnf-solix','SoliX project coordination meeting','A B&F team discussion about the SoliX project formed part of my coordination and administrative exposure.','INTERNAL COORDINATION'),
        photo('bnf-biogreen-line','Inside B&F BioGreen Industries','I visited the associated BioGreen briquette facility in Keraniganj to observe the production environment and the handling of wood residues and sawdust.','FACTORY REVIEW'),
        photo('bnf-biogreen-process','Following the production workflow','The visit introduced the sequence of materials handling and mechanical processing involved in producing biomass briquettes.','FACTORY REVIEW'),
        photo('bnf-biogreen-material','From sawdust to a renewable solid fuel','I observed the feeding and handling of biomass residues used in briquette production. This was a process-review visit, not an equipment-operating assignment.','FACTORY REVIEW'),
        photo('bnf-biogreen-exterior','Reviewing the facility context','An exterior view documents the physical setting of the associated BioGreen industrial facility.','FACTORY REVIEW'),
        photo('bnf-secretariat','DRCIP concept at the Bangladesh Secretariat','I served as the main presenter during a Local Government Division meeting on 16 July 2026, discussing the proposed Matuail waste-to-resource initiative with government stakeholders.','GOVERNMENT PRESENTATION'),
        photo('bnf-secretariat-discussion','Engaging stakeholders on implementation','The Secretariat discussion covered the concept and potential implementation considerations. The photographs document a presentation and consultation, not project completion.','GOVERNMENT PRESENTATION'),
        photo('bnf-dscc-present','Presenting the vision at DSCC','I presented the Matuail resource-circulation proposal to Dhaka South City Corporation stakeholders, supporting ongoing technical discussions and partnership development.','MY CONTRIBUTION / LEAD PRESENTER'),
        photo('bnf-dscc-meeting','Working through the proposal together','B&F representatives, DSCC officials and international visitors discussed the proposed DRCIP/DRCP approach in a formal meeting.','STAKEHOLDER ENGAGEMENT'),
        photo('bnf-matuail-board','On site at the proposed resource-circulation park','A field visit at Matuail brought together officials and stakeholders at public project displays and helped orient discussions around the site.','FIELD VISIT'),
        photo('bnf-matuail-briefing','Site briefing and public engagement','A site gathering and media interactions accompanied project-site activities. The exact inauguration context is not independently established from this photograph.','FIELD ENGAGEMENT'),
        photo('bnf-director-inspection','Operational inspection with the B&F team','I joined a factory/site review with B&F Director Md. Saiful Islam and colleagues to look through site-related documentation and processes.','SITE INSPECTION'),
        photo('bnf-dscc-progress','Returning to DSCC for a progress update','A subsequent formal meeting with DSCC provided an opportunity to review progress and present the DRCIP concept’s development.','FOLLOW-UP PRESENTATION'),
        photo('bnf-dscc-slide','Explaining the proposed project flow','Project-flow materials were reviewed during the follow-up discussion, placing the proposed processing and resource-recovery components in context.','FOLLOW-UP PRESENTATION')
      ]
    },
    {
      id:'eptisa',category:'professional',org:'Eptisa Servicios de Ingeniería S.L.',position:'GIS Expert & Senior Trainer',
      period:'JAN — AUG 2025',location:'Dhaka & Chattogram region',logo:'assets/brands/eptisa.png',
      cover:'assets/claude/ep-team.jpg',label:'WORLD BANK / LGCRRP',
      summary:'Geospatial analysis and participatory local preparedness planning under the LGED-led LGCRRP project.',
      detail:'I worked on the World Bank-supported Local Government COVID-19 Response and Recovery Project with the Eptisa–ADSL–DPDS joint venture, first as a GIS specialist and then also as a training facilitator.',
      skills:['GIS','Hazard planning','Training'],
      stories:[
        contract('contract-eptisa-gis-redacted','GIS Expert — appointment evidence','A safe excerpt from my initial Eptisa appointment letter for GIS work on LGCRRP. Salary, appointment period and other confidential information are excluded.'),
        photo('eptisa-gis-project-sign','The World Bank-supported LGCRRP project','A project sign documenting the Local Government COVID-19 Response and Recovery Project (LGCRRP), the institutional context for my GIS work.','PROJECT CONTEXT'),
        photo('eptisa-gis-team','With colleagues at the LGCRRP project office','A team photograph at the project office during the GIS assignment, representing collaborative mapping and planning work.','GIS EXPERT'),
        photo('eptisa-gis-data-archive','Organizing municipality-level GIS data','A workstation view of municipal project folders and geospatial documentation used in the GIS support work.','GIS DATA MANAGEMENT'),
        legacy('ep-team','GIS expertise in a multidisciplinary team','From January 2025, I prepared spatial layouts and mapping inputs, analysed geospatial data and supported technical reporting for municipal planning.','GIS EXPERT'),
        legacy('ep-sign','Supporting technical mapping and project documentation','The GIS role linked spatial analysis with reporting and practical guidance for the wider project team.','GIS EXPERT'),
        contract('contract-eptisa-trainer-redacted','Senior Trainer — second appointment letter','A separate public excerpt documents my later training and facilitation responsibilities. The actual appointment duration, financial figures and personal contact details have been withheld.'),
        legacy('ep-m1','Moving into stakeholder facilitation','As Senior Trainer (Facilitator), I supported meetings with local governments and communities across southeastern Bangladesh.','SENIOR TRAINER'),
        legacy('ep-m2','Listening to local hazard concerns','Consultations in Paurashavas explored locally experienced hazards such as flooding, landslides, cyclones and lightning.','STAKEHOLDER CONSULTATION'),
        legacy('ep-m3','Turning discussions into preparedness inputs','I combined field consultations with municipal information to help prepare context-specific Local Preparedness Plans.','LOCAL PREPAREDNESS'),
        legacy('ep-m4','Facilitating participatory planning','Discussion with local participants helped identify practical priorities for preparedness and community resilience.','SENIOR TRAINER'),
        legacy('ep-m5','Documenting and validating field information','Collected information was organized and checked in the project’s web-based documentation system.','TECHNICAL DOCUMENTATION'),
        legacy('ep-m6','Supporting municipal capacity','Training and guidance were directed toward more usable disaster-preparedness planning and local implementation capacity.','CAPACITY BUILDING')
      ]
    },
    {
      id:'wave',category:'professional',org:'WAVE Foundation',position:'Surveyor → Master Trainer → Facilitator',
      period:'FEB 2022 — OCT 2023',location:'Rajshahi, Khulna & Dhaka',logo:'assets/brands/wave.png',
      cover:'assets/claude/wv-3.jpg',label:'CITIZEN-LED ASSESSMENT',
      summary:'A progression from household pilot surveys to leading volunteer training, field monitoring and education-governance facilitation.',
      detail:'I contributed to citizen-led assessment initiatives associated with WAVE Foundation, Street Child and the broader education-accountability movement, taking on responsibilities as a surveyor, Master Trainer and Facilitator.',
      skills:['Training delivery','Survey methods','Community advocacy'],
      stories:[
        legacy('wv-1','Starting with a rural pilot survey','In February 2022, I helped collect household-level information in a rural Rajshahi community, listening to residents and recording local needs.','VOLUNTEER SURVEYOR'),
        legacy('wv-2','Building confidence in field research','The pilot introduced practical questionnaire work, field validation and direct community engagement.','VOLUNTEER SURVEYOR'),
        legacy('wv-3','Joining the Master Trainer programme','I served as a Master Trainer at a three-day foundation training on Citizen-Led Assessment in Khulna in April 2022.','MASTER TRAINER'),
        legacy('wv-4','Preparing volunteers for data collection','Training covered survey methods, questionnaire handling, ethical considerations and careful interactions with households.','MASTER TRAINER'),
        legacy('wv-5','Training the Rajshahi cohort','I subsequently delivered training to 22 volunteers in Rajshahi, helping them prepare for field surveys.','MASTER TRAINER'),
        legacy('wv-6','Mentoring the next field team','Interactive sessions built practical skills in community engagement and consistent recording of findings.','MASTER TRAINER'),
        legacy('wv-7','Additional training programme moment','An additional archived image from WAVE Foundation field training and citizen-led assessment activities.','PHOTO ARCHIVE'),
        legacy('wv-f1','Monitoring surveys in the field','During May–June 2022 I monitored volunteer fieldwork, checked questionnaire quality and helped address practical challenges.','FIELD MONITORING'),
        legacy('wv-f2','Supporting data quality at the source','Field supervision helped teams maintain consistent processes while working across Rajshahi communities.','FIELD MONITORING'),
        legacy('wv-f3','On-the-spot guidance and feedback','My work included mentoring field volunteers and feeding observed issues back into project coordination.','FIELD MONITORING'),
        legacy('wv-f4','Additional fieldwork documentation','A further archived photograph from the citizen-led assessment monitoring period.','PHOTO ARCHIVE'),
        legacy('wv-8','Facilitation under Education Out Loud','In November 2022 I joined facilitation training at Dnet in Dhaka to strengthen participatory education-monitoring methods.','FACILITATOR'),
        legacy('wv-9','Delivering citizen leadership sessions','I later facilitated rural training sessions about education quality and citizen participation, engaging more than 50 participants across activities.','FACILITATOR'),
        legacy('wv-10','Turning awareness into dialogue','The sessions encouraged participants to examine education challenges and understand opportunities for collective advocacy.','FACILITATOR'),
        legacy('wv-11','Facilitation and community exchange','An additional WAVE Foundation activity photograph preserved from the original portfolio archive.','PHOTO ARCHIVE'),
        legacy('wv-12','Closing exchange in Rajshahi','At the October 2023 exchange meeting, project stakeholders reflected on lessons from the citizen-led assessment and training process.','EXCHANGE MEETING')
      ]
    },
    {
      id:'tib-research',category:'professional',org:'Transparency International Bangladesh',position:'Field Enumerator — Medical Waste Governance',
      period:'PROJECT-BASED FIELD RESEARCH',location:'Rajshahi, Bangladesh',logo:'assets/brands/tib.png',cover:'',
      label:'RESEARCH / PUBLIC ACCOUNTABILITY',summary:'Field research on governance challenges in medical-waste handling across healthcare institutions in Rajshahi.',
      detail:'This was a separate professional/project-based research assignment, distinct from my later six-month internship and long-term YES volunteering.',
      skills:['Research','Medical waste','Governance'],
      stories:[
        note('Assessing medical-waste management in practice','I collected field information from three government and three non-government healthcare facilities, examining segregation, color-coded bins and the pathways used to handle medical waste.','FIELD ENUMERATION'),
        note('Connecting facilities with governance questions','The study also incorporated input from the relevant city-corporation waste-management authority to understand oversight and accountability challenges.','FIELD ENUMERATION')
      ]
    },
    {
      id:'education',category:'professional',org:'KaathPencil & Advance Education Centre',position:'ICT & Science Instructor',
      period:'2018 — 2023',location:'Bangladesh',logo:'assets/brands/kaathpencil.png',cover:'',
      label:'TEACHING / KNOWLEDGE SHARING',
      summary:'Teaching ICT and science, preparing learning materials and guiding students in physical and online learning environments.',
      detail:'An earlier teaching chapter that strengthened my ability to translate complex subjects into simple, actionable explanations.',
      skills:['Teaching','Communication','Curriculum'],
      stories:[
        note('Making technical ideas approachable','I prepared lessons and study materials in ICT and science, supporting students through classroom and online instruction.','TEACHING'),
        note('A foundation for facilitation','The teaching experience shaped my later work in community training, presentations and stakeholder communication.','KNOWLEDGE SHARING')
      ]
    },
    {
      id:'tib-intern',category:'internship',org:'Transparency International Bangladesh',position:'Programme Intern — PACTA',
      period:'NOV 2023 — APR 2024',location:'Rajshahi, Bangladesh',logo:'assets/brands/tib.png',cover:'assets/claude/tib-intern.jpg',
      label:'SIX-MONTH INTERNSHIP',
      summary:'A six-month placement supporting citizen participation, PACTApp data collection and local governance accountability.',
      detail:'During this internship I worked with TIB’s Participatory Action Against Corruption – Towards Transparency and Accountability (PACTA) activities.',
      skills:['PACTApp','Civic engagement','Community coordination'],
      stories:[
        legacy('tib-intern','Beginning the six-month placement','From November 2023 to April 2024, I worked as a Programme Intern with TIB in Rajshahi, supporting participatory anti-corruption and transparency activities.','INTERNSHIP'),
        legacy('tibv-5','Connecting citizen groups and local institutions','I assisted field coordination, meetings and civic-engagement activities involving Active Citizens Group members and local stakeholders.','PACTA PROJECT'),
        legacy('tibv-6','Digital evidence for accountable services','My responsibilities included supporting use of PACTApp, a mobile tool that captures community-reported governance problems for follow-up and learning.','PACTAPP')
      ]
    },
    {
      id:'tib-volunteer',category:'volunteering',org:'Transparency International Bangladesh',position:'YES Member — Youth Engagement & Support',
      period:'DEC 2019 — MAY 2024',location:'Rajshahi, Bangladesh',logo:'assets/brands/tib.png',cover:'assets/claude/tibv-1.jpg',
      label:'YOUTH ENGAGEMENT / ACCOUNTABILITY',
      summary:'Sustained youth volunteering through anti-corruption advocacy, Right to Information campaigns and public-service monitoring.',
      detail:'My YES volunteering was distinct from both my professional TIB field assignment and my PACTA internship.',
      skills:['Youth leadership','Transparency','Public awareness'],
      stories:[
        legacy('tibv-1','Growing through youth-led civic engagement','Across more than four years, I participated in regular TIB YES activities and community engagement around transparency and public accountability.','YES VOLUNTEER'),
        legacy('tibv-2','Government web portal analysis','I helped review Rajshahi District web-portal information in 2021 and 2022 with other volunteers to consider service accessibility and transparency.','DIGITAL GOVERNANCE'),
        legacy('tibv-3','Supporting public awareness','I participated in awareness activities, community meetings and Right to Information-oriented outreach.','COMMUNITY ACTION'),
        legacy('tibv-4','Building participation through events','Youth-led seminars and collective outreach provided opportunities to discuss civic rights and responsible public services.','YOUTH LEADERSHIP')
      ]
    },
    {
      id:'undp',category:'volunteering',org:'UNDP — Movers4Climate',position:'Climate Action Volunteer',
      period:'VOLUNTEER PROGRAMME',location:'Bangladesh / Asia-Pacific initiative',logo:'',cover:'assets/claude/undp-1.jpg',
      label:'CLIMATE ACTION / YOUTH',
      summary:'Participated in the Movers4Climate challenge, completing climate-focused actions and peer-learning activities.',
      detail:'Through the UNDP Youth Empowerment Portfolio in Asia and the Pacific initiative, I took part in a youth-oriented climate action challenge.',
      skills:['Climate action','Youth participation'],
      stories:[
        legacy('undp-1','Taking practical climate actions','The Movers4Climate challenge connected young people to accessible climate actions and learning. My portfolio records completion of ten actions.','MOVERS4CLIMATE'),
        legacy('undp-2','Learning with a regional youth network','The initiative brought opportunities to build climate literacy and connect with fellow young advocates in the Asia-Pacific region.','YOUTH LEADERSHIP')
      ]
    },
    {
      id:'save-student',category:'volunteering',org:'Save the Student',position:'Divisional Coordinator',
      period:'DEC 2019 — JUN 2020',location:'Rajshahi Division, Bangladesh',logo:'',cover:'assets/claude/sts.jpg',
      label:'STUDENT DEVELOPMENT / LEADERSHIP',
      summary:'Coordinated student-focused activities and skills programmes, mentoring groups and representing the network across Rajshahi Division.',
      detail:'An early leadership experience focused on education access, student participation and organizing development activities.',
      skills:['Coordination','Mentoring','Student leadership'],
      stories:[
        legacy('sts','Coordinating opportunities for students','As Divisional Coordinator, I helped organize activities and skills-development programmes, facilitated participation and represented the organization across the division.','VOLUNTEER LEADERSHIP')
      ]
    }
  ];

  // Every additional original B&F / NZC photograph is retained in an extended
  // archive after the editor's main visual narrative. Document/contact-card
  // photographs are pixel-masked by the asset-preparation script.
  const bnfArchive = [
    ['055216','Conveyors and handling equipment at BioGreen','A further view of the biomass-processing line during the factory visit.'],
    ['055220','Processing equipment during the BioGreen visit','The industrial tour continued through a different section of the facility.'],
    ['055227','Material-handling activity at BioGreen','Another angle on biomass feedstock handling and production workflow.'],
    ['055231','A closer look at the facility','Machinery and stored material observed during the site review.'],
    ['055244','BioGreen storage and materials','Sacks and other material-handling arrangements visible at the plant.'],
    ['055259','Factory systems and work areas','A further factory-floor view from the industrial visit.'],
    ['060302','B&F professional card — contacts obscured','The original visiting-card image is retained as a permanently obscured archival view to protect contact details.'],
    ['060308','B&F organization card — contacts obscured','A second company-card view; the image is intentionally obscured to avoid publishing telephone and other identifiers.'],
    ['080051','Bangladesh Secretariat — meeting overview','An additional view of the government discussion on the proposed Matuail initiative.'],
    ['080116','Bangladesh Secretariat — project discussion','Meeting participants reviewing the resource-circulation presentation.'],
    ['080217','Government meeting notice — details obscured','The official meeting notice is retained as masked evidence; private phone numbers and other document details are not published.'],
    ['081133','Arriving at Dhaka South City Corporation','Exterior photograph establishing the setting of the stakeholder meeting.'],
    ['081241','Following the DSCC presentation','A team photograph at Nagar Bhaban after the project discussion.'],
    ['081608','At the proposed Matuail project site','An additional image from the site-level stakeholder visit.'],
    ['081735','Media and stakeholder activity at Matuail','A broader public gathering around project-site activities.'],
    ['082329','Additional DSCC meeting angle','An alternate view documenting the stakeholder discussion.'],
    ['082441','Factory inspection — another perspective','A second photograph of the operational site review with B&F colleagues.'],
    ['082638','Progress discussion and presentation materials','An additional view of the DRCIP follow-up meeting at DSCC.'],
    ['082649','Technical discussion at DSCC','A side angle of the project-review session.'],
    ['082657','Following up with DSCC stakeholders','An additional official meeting and greeting photograph.'],
    ['082845','Wider view of the DSCC progress meeting','Further documentation of the project-flow discussion and review.']
  ];
  const nzcArchive = [
    ['090213','First Matuail waste-characterization exercise','An additional field angle from the initial on-site waste-sorting work.'],
    ['090246','Korean delegation in Bangladesh','An additional photograph of the visiting Korean delegation and the local team.'],
    ['090256','Accompanying Korean visitors at the site','Another frame from the delegation site visit.'],
    ['090319','CarboBon collaboration discussion','A second photograph from the exploratory coordination meeting.'],
    ['090345','IFC meeting — reviewing supporting material','An additional view of the investment discussion at the IFC Dhaka office.'],
    ['090352','IFC meeting — presentation and questions','Another frame documenting the DRCIP investment pitch and project conversation.'],
    ['090415','KORA delegation field visit','A second photograph of the Korean visiting team observing waste conditions at Matuail.']
  ];
  entries.find(item=>item.id==='bnf').stories.push(...bnfArchive.map(([id,title,body])=>photo('bnf-archive-'+id,title,body,'EXTENDED PHOTO ARCHIVE')));
  entries.find(item=>item.id==='nzc').stories.push(...nzcArchive.map(([id,title,body])=>photo('nzc-archive-'+id,title,body,'EXTENDED PHOTO ARCHIVE')));

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const esc = text => String(text == null ? '' : text).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const meta = {
    professional:{label:'TRACK 01 / THE CAREER',heading:'Professional <em>chapters.</em>',summary:'Building ideas in the field and carrying them into practice — through teams, projects and cross-sector collaborations.'},
    internship:{label:'TRACK 02 / LEARNING BY DOING',heading:'A formative <em>internship.</em>',summary:'Six months of direct programme experience in citizen engagement and accountability work.'},
    volunteering:{label:'TRACK 03 / SERVICE & LEADERSHIP',heading:'Showing up for <em>community.</em>',summary:'Commitments beyond the office: transparency, climate action and student development.'}
  };
  let currentCategory='professional';
  let currentEntry=null;
  let currentMoment=0;
  let previousFocus=null;

  function card(item, index) {
    const cover = item.cover
      ? '<img class="xp-cover" src="'+esc(item.cover)+'" alt="'+esc(item.org)+' documented experience" loading="lazy">'
      : '<img class="xp-card-brand-image" src="'+esc(item.logo || 'assets/tahatul.jpg')+'" alt="'+esc(item.org)+' logo" loading="lazy">';
    const tags=item.skills.slice(0,2).map(tag=>'<span>'+esc(tag)+'</span>').join('');
    return '<article class="xp-card'+(index===0?' xp-card-featured':'')+'">'
       +'<div class="xp-card-media'+(!item.cover?' xp-cover-brand':'')+'">'+cover+'<span class="xp-card-number">'+String(index+1).padStart(2,'0')+' / '+String(entries.filter(e=>e.category===currentCategory).length).padStart(2,'0')+'</span><span class="xp-card-chip">'+esc(item.label)+'</span></div>'
       +'<div class="xp-card-body"><div class="xp-card-identity">'+(item.logo?'<img class="xp-card-logo" src="'+esc(item.logo)+'" alt="">':'')+'<span class="xp-card-org">'+esc(item.org)+'</span></div>'
       +'<div class="xp-card-period">'+esc(item.period)+' · '+esc(item.location)+'</div><h3>'+esc(item.position)+'</h3>'
       +'<p class="xp-card-summary">'+esc(item.summary)+'</p><div class="xp-card-bottom"><div class="xp-card-tags">'+tags+'</div>'
       +'<button class="xp-card-open" type="button" data-xp-open="'+esc(item.id)+'" aria-label="Explore '+esc(item.org)+' experience">EXPLORE STORY <b aria-hidden="true">↗</b></button></div></div></article>';
  }

  function renderCategory(category) {
    if (!meta[category]) return;
    currentCategory=category;
    const m=meta[category];
    const filtered=entries.filter(item=>item.category===category);
    $('#xp-active-overline').textContent=m.label;
    $('#xp-active-heading').innerHTML=m.heading;
    $('#xp-active-summary').textContent=m.summary;
    $('#xp-list').innerHTML=filtered.map(card).join('');
    $('#xp-list').setAttribute('aria-labelledby','xp-tab-'+category);
    $('#xp-visible-count').textContent='SHOWING '+String(filtered.length).padStart(2,'0')+' CHAPTERS';
    $$('.xp-category').forEach(button=>{
      const active=button.dataset.category===category;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-selected',String(active));
      button.tabIndex=active?0:-1;
    });
  }

  function openEntry(id) {
    const item=entries.find(entry=>entry.id===id);
    if(!item)return;
    previousFocus=document.activeElement;
    currentEntry=item;
    currentMoment=0;
    $('#xp-modal-organization').textContent=item.org.toUpperCase();
    $('#xp-modal-title').textContent=item.position;
    $('#xp-modal-deck').textContent=item.detail;
    $('#xp-modal-period').textContent=item.period;
    $('#xp-modal-location').textContent=item.location;
    $('#xp-modal-eyebrow').textContent=item.category.toUpperCase()+' / THE VISUAL STORY';
    $('#xp-modal').classList.remove('is-hidden');
    document.body.classList.add('locked');
    renderMoment();
    $('#xp-modal-close').focus({preventScroll:true});
  }

  function renderMoment() {
    const item=currentEntry;
    if(!item)return;
    const moment=item.stories[currentMoment];
    const count=item.stories.length;
    const img=$('#xp-story-image');
    const art=$('#xp-story-art');
    const frame=$('.xp-story-frame');
    if(moment.image) {
      frame.style.setProperty('--xp-story-backdrop','url("'+moment.image+'")');
      img.src=moment.image;
      img.alt=moment.title+' — '+item.org;
      img.classList.remove('is-hidden');
      art.classList.add('is-hidden');
    } else {
      frame.style.setProperty('--xp-story-backdrop','none');
      img.removeAttribute('src');
      img.classList.add('is-hidden');
      art.classList.remove('is-hidden');
      const logo=$('#xp-story-logo');
      logo.src=item.logo||'assets/tahatul.jpg';
      logo.alt=item.org;
    }
    $('#xp-story-title').textContent=moment.title;
    $('#xp-story-body').textContent=moment.body;
    const documentLink=$('#xp-story-document');
    if(moment.document){
      documentLink.href=moment.document;
      documentLink.download=moment.document.split('/').pop();
      documentLink.textContent='DOWNLOAD REDACTED CONTRACT IMAGE ↓';
      documentLink.classList.remove('is-hidden');
    }else{
      documentLink.removeAttribute('href');
      documentLink.classList.add('is-hidden');
    }
    $('#xp-story-track').textContent=moment.tag+' / '+String(currentMoment+1).padStart(2,'0');
    $('#xp-story-counter').textContent=String(currentMoment+1).padStart(2,'0')+' / '+String(count).padStart(2,'0');
    $('#xp-story-tags').innerHTML=item.skills.map(tag=>'<span>'+esc(tag)+'</span>').join('');
    $('#xp-story-prev').disabled=count<2;
    $('#xp-story-next').disabled=count<2;
    $('#xp-story-mini-nav').innerHTML=item.stories.map((story,index)=>'<button type="button" class="'+(index===currentMoment?'is-active':'')+'" data-xp-moment="'+index+'" aria-label="Moment '+(index+1)+': '+esc(story.title)+'" aria-current="'+(index===currentMoment?'step':'false')+'">'+(index+1)+'</button>').join('');
  }

  function moveMoment(direction) {
    if(!currentEntry)return;
    const n=currentEntry.stories.length;
    currentMoment=(currentMoment+direction+n)%n;
    renderMoment();
  }
  function closeEntry() {
    if($('#xp-modal').classList.contains('is-hidden'))return;
    $('#xp-modal').classList.add('is-hidden');
    document.body.classList.remove('locked');
    currentEntry=null;
    previousFocus?.focus({preventScroll:true});
  }

  $$('.xp-category').forEach(button=>button.addEventListener('click',()=>renderCategory(button.dataset.category)));
  $('.xp-category-bar').addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    const order=['professional','internship','volunteering'];
    let i=order.indexOf(currentCategory);
    if(event.key==='Home')i=0;
    else if(event.key==='End')i=order.length-1;
    else i=(i+(event.key==='ArrowRight'?1:-1)+order.length)%order.length;
    renderCategory(order[i]);
    $('#xp-tab-'+order[i]).focus();
  });
  $('#xp-list').addEventListener('click',event=>{
    const button=event.target.closest('[data-xp-open]');
    if(button)openEntry(button.dataset.xpOpen);
  });
  $('#xp-modal-close').addEventListener('click',closeEntry);
  $('[data-xp-close]').addEventListener('click',closeEntry);
  $('#xp-story-prev').addEventListener('click',()=>moveMoment(-1));
  $('#xp-story-next').addEventListener('click',()=>moveMoment(1));
  $('#xp-story-mini-nav').addEventListener('click',event=>{
    const button=event.target.closest('[data-xp-moment]');
    if(!button)return;
    currentMoment=Number(button.dataset.xpMoment);
    renderMoment();
  });
  document.addEventListener('keydown',event=>{
    if($('#xp-modal').classList.contains('is-hidden'))return;
    if(event.key==='Escape'){event.preventDefault();closeEntry();return;}
    if(event.key==='ArrowRight'){event.preventDefault();moveMoment(1);return;}
    if(event.key==='ArrowLeft'){event.preventDefault();moveMoment(-1);return;}
    if(event.key==='Tab'){
      const controls=$$('#xp-modal button:not([disabled]), #xp-modal a[href]').filter(el=>el.getClientRects().length);
      const first=controls[0],last=controls[controls.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });

  for(const cat of Object.keys(meta)) {
    const count=entries.filter(e=>e.category===cat).length;
    $('#xp-count-'+cat).textContent=String(count).padStart(2,'0');
  }
  renderCategory('professional');
})();
