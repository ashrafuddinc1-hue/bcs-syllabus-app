const subjects = [
 {id:'bangla',icon:'অ',title:'বাংলা',subtitle:'ভাষা ও সাহিত্য • মান ৩০',chapters:[
  {title:'বাংলা ভাষা',lessons:['প্রয়োগ-অপপ্রয়োগ','বানান ও বাক্য শুদ্ধি','পরিভাষা','সমার্থক শব্দ','বিপরীতার্থক শব্দ','ধ্বনি','সন্ধি','বর্ণ','শব্দের শ্রেণিবিভাগ','পদ প্রকরণ','বাক্য প্রকরণ','প্রকৃতি ও প্রত্যয়','সমাস','বাংলা ভাষা ও লিপি','সাধু ও চলিত রীতি','ণত্ব ও ষত্ব বিধান','লিঙ্গ','বচন','কারক ও বিভক্তি','বাগধারা','বিরামচিহ্ন','ছন্দ ও অলঙ্কার']},
  {title:'বাংলা সাহিত্য',lessons:['প্রাচীন যুগ ও চর্যাপদ','মধ্যযুগ','আধুনিক যুগের উন্মেষ','পত্রিকা ও সম্পাদক','উপন্যাস','নাটক','প্রবন্ধ ও আত্মজীবনী','বাংলা কবিতা','ছোটগল্প','ভাষা আন্দোলনভিত্তিক সাহিত্য','মুক্তিযুদ্ধভিত্তিক সাহিত্য','উপাধি ও ছদ্মনাম','বাংলা গান','সাহিত্যিক ও সাহিত্যকর্ম']}
 ]},
 {id:'english',icon:'E',title:'English',subtitle:'Language & Literature • মান ৩০',chapters:[
  {title:'English Language',lessons:['Parts of Speech','Noun','Pronoun','Verb','Adjective','Adverb','Preposition','Conjunction','Idioms & Phrases','Clauses','Corrections','Transformations','Narration','Conditional Sentence','Analogy','Translation']},
  {title:'English Literature',lessons:['Periods of English Literature','Anglo-Saxon Period','Middle English Period','Renaissance Period','Neo-classical Period','Romantic Period','Victorian Period','Modern & Postmodern Period','Literary Terms','Quotations']}
 ]},
 {id:'bangladesh',icon:'বাংলা',title:'বাংলাদেশ বিষয়াবলি',subtitle:'জাতীয় বিষয়াবলি • মান ২৫',chapters:[
  {title:'প্রাচীনকাল থেকে সমসাময়িক ইতিহাস',lessons:['প্রাচীন ও মধ্যযুগ','ব্রিটিশ শাসন','ভাষা আন্দোলন','মুক্তিযুদ্ধ','জাতীয় প্রতীক','পতাকা ও সংগীত']},
  {title:'সংবিধান ও রাজনৈতিক ব্যবস্থা',lessons:['সংবিধানের প্রস্তাবনা','মৌলিক অধিকার','রাষ্ট্র পরিচালনার মূলনীতি','সংবিধানের সংশোধনী','আইন বিভাগ','শাসন বিভাগ','বিচার বিভাগ','প্রশাসনিক কাঠামো']},
  {title:'অর্থনীতি ও সমাজ',lessons:['পঞ্চবার্ষিক পরিকল্পনা','জাতীয় আয়-ব্যয়','শিল্প ও বাণিজ্য','জনসংখ্যা ও আদমশুমারি','শিক্ষা ও স্বাস্থ্য','কৃষি ও বনজ সম্পদ']}
 ]},
 {id:'international',icon:'গ্লোব',title:'আন্তর্জাতিক বিষয়াবলি',subtitle:'বিশ্বব্যাপী চলমান বিষয় • মান ২৫',chapters:[
  {title:'সাম্প্রতিক বিশ্ব',lessons:['আলোচিত বিশ্ব','রিপোর্ট ও জরিপ','সাম্প্রতিক পুরস্কার','নির্বাচিত রাষ্ট্রপ্রধান','ক্রীড়াজগৎ']},
  {title:'আন্তর্জাতিক ব্যবস্থা',lessons:['জাতিসংঘ','আঞ্চলিক জোট','সামরিক জোট','চুক্তি ও সম্মেলন','আন্তর্জাতিক পরিবেশগত কূটনীতি']}
 ]},
 {id:'geography',icon:'মাটি',title:'ভূগোল ও দুর্যোগ',subtitle:'ভূগোল, পরিবেশ ও দুর্যোগ • মান ১০',chapters:[
  {title:'ভূগোল ও পরিবেশ',lessons:['বাংলাদেশের অবস্থান ও সীমা','ভৌত পরিবেশ','প্রাকৃতিক সম্পদ','জলবায়ু নিয়ামক','পরিবেশগত পরিবর্তন','প্রাকৃতিক দুর্যোগ']}
 ]},
 {id:'science',icon:'⚗',title:'সাধারণ বিজ্ঞান',subtitle:'ভৌত ও জীববিজ্ঞান • মান ১৫',chapters:[
  {title:'ভৌত বিজ্ঞান',lessons:['রাশি ও পরিমাপ','তরঙ্গ ও শব্দ','তাপ','আলো','তড়িৎ ও চৌম্বকত্ব','ইলেকট্রনিক্স','তেজস্ক্রিয়তা','শক্তি ও নবায়নযোগ্য শক্তি']},
  {title:'জীববিজ্ঞান',lessons:['উদ্ভিদবিজ্ঞান','মাইক্রোবায়োলজি','উদ্ভিদ ও ফুল','জীনগত বিজ্ঞান','মানবদেহ','পুষ্টি ও ভিটামিন','রোগ ও প্রতিকার','ভ্যাকসিনেশন','সামুদ্রিক জীবন']}
 ]},
 {id:'ict',icon:'⌘',title:'কম্পিউটার ও তথ্যপ্রযুক্তি',subtitle:'কম্পিউটার ও IT • মান ১৫',chapters:[
  {title:'কম্পিউটার',lessons:['কম্পিউটারের ইতিহাস','কম্পিউটারের প্রকার','কম্পিউটার সংস্থান','অপারেটিং সিস্টেম','নম্বর ব্যবস্থা','ডেটাবেস সিস্টেম']},
  {title:'তথ্যপ্রযুক্তি',lessons:['ইন্টারনেট','কম্পিউটার নেটওয়ার্ক','মোবাইল প্রযুক্তি','টেক জায়েন্টস','দৈনন্দিন তথ্যপ্রযুক্তি']}
 ]},
 {id:'math',icon:'÷',title:'গাণিতিক যুক্তি',subtitle:'পাটিগণিত, বীজগণিত ও জ্যামিতি • মান ২০',chapters:[
  {title:'পাটিগণিত',lessons:['বাস্তব সংখ্যা','গ.সা.গু. ও ল.সা.গু.','শতকরা','মুনাফা','অনুপাত-সমানুপাত','লাভ-ক্ষতি']},
  {title:'বীজগণিত ও জ্যামিতি',lessons:['বীজগণিতীয় সূত্র','উৎপাদক','সমীকরণ','অসমতা','সূচক ও লগারিদম','ধারা','জ্যামিতিক উপপাদ্য','পরিমিতি','সেট','বিন্যাস ও সমাবেশ','সম্ভাব্যতা']}
 ]},
 {id:'mental',icon:'✓',title:'মানসিক দক্ষতা',subtitle:'যুক্তি ও সমস্যা সমাধান • মান ১৫',chapters:[{title:'মানসিক দক্ষতা',lessons:['ভাষাগত যৌক্তিক বিচার','সমস্যা সমাধান','বানান ও ভাষা','যান্ত্রিক দক্ষতা','স্থানাঙ্ক সম্পর্ক','সংখ্যাগত দক্ষতা']}]},
 {id:'ethics',icon:'⚖',title:'নৈতিকতা ও সুশাসন',subtitle:'মূল্যবোধ ও সুশাসন • মান ১৫',chapters:[{title:'মূল্যবোধ ও সুশাসন',lessons:['সংজ্ঞা','সুশাসনের উপাদান','পরস্পর সম্পর্ক','গুরুত্ব','প্রভাব','উপযোগিতা','অভাবজনিত প্রভাব']}]},
 {id:'tests',icon:'✓',title:'মডেল টেস্ট',subtitle:'২০০ নম্বর • ৫টি পূর্ণাঙ্গ সেট',chapters:[{title:'পূর্ণাঙ্গ মডেল টেস্ট',lessons:['মডেল টেস্ট-০১','মডেল টেস্ট-০২','মডেল টেস্ট-০৩','মডেল টেস্ট-০৪','মডেল টেস্ট-০৫']}]} 
];

let state={subject:null,chapter:null,lesson:0,font:18};
const app=document.getElementById('app');
const backBtn=document.getElementById('backBtn');

function cardSubject(s){return `<button class="subject-card" onclick="openSubject('${s.id}')"><span class="arrow">›</span><div class="icon">${s.icon}</div><h3>${s.title}</h3><p>${s.subtitle}</p></button>`}
function home(){state={subject:null,chapter:null,lesson:0,font:state.font};backBtn.style.visibility='hidden';app.innerHTML=`<div class="eyebrow">৫০তম বিসিএস ও জব প্রস্তুতি</div><h1 class="page-title">অধ্যয়নের বিষয়সমূহ</h1><p class="page-subtitle">মূল বিষয় বেছে নিন এবং ধাপে ধাপে পড়া শুরু করুন</p><div class="grid">${subjects.map(cardSubject).join('')}</div>`}
function openSubject(id){const s=subjects.find(x=>x.id===id);state.subject=s;state.chapter=null;backBtn.style.visibility='visible';app.innerHTML=`<div class="eyebrow">${s.title}</div><h1 class="page-title">অধ্যায়সমূহ</h1><p class="page-subtitle">প্রাসঙ্গিক অধ্যায় বেছে নিন</p><div class="chapter-list">${s.chapters.map((c,i)=>`<button class="chapter-item" onclick="openChapter(${i})"><span class="chapter-no">${i+1}</span><span><strong>${c.title}</strong><br><small style="color:var(--muted)">${c.lessons.length}টি বিস্তারিত পাঠ</small></span><span class="arrow">›</span></button>`).join('')}</div>`}
function openChapter(i){const s=state.subject,c=s.chapters[i];state.chapter=i;state.lesson=0;readLesson(0)}
function readLesson(i){const s=state.subject,c=s.chapters[state.chapter];state.lesson=i;backBtn.style.visibility='visible';const lesson=c.lessons[i];const first=s.id==='bangla'&&c.title==='বাংলা ভাষা'&&i===0;const content=first?`<h2>প্রয়োগ-অপপ্রয়োগ</h2><p>কোন শব্দ কোন প্রসঙ্গে, কোন অর্থে এবং কোন নিয়মে ব্যবহৃত হবে—সেই ব্যবহারভিত্তিক সঠিকতাই হলো শব্দের প্রয়োগ। এ ছাড়া অনুচিত অর্থ বা নিয়মে শব্দ ব্যবহারের ভুলকে অপপ্রয়োগ বলে।</p><div class="fact-box"><strong>মুখস্থ করণীয়:</strong> শব্দের অভিধানিক অর্থ নয়, বাক্যের প্রসঙ্গেই শব্দের সঠিক প্রয়োগ নির্ধারণ করতে হয়।</div><h3>উদাহরণ</h3><p><strong>সঠিক:</strong> তিনি বিদ্যালয়ের অধ্যক্ষ।<br><strong>ভুল:</strong> তিনি বিদ্যালয়ের প্রধান অধ্যক্ষ।</p><div class="question"><strong>প্রশ্ন:</strong> নিচের কোন বাক্যটি শুদ্ধ?<br><span>ক) আমার মনমাঝি বই পড়ে</span><br><span>খ) আমার মন মাঝে বই পড়ে</span><div class="answer">উত্তর: খ — সামগ্রিক অর্থ ও ব্যাকরণগত গঠনে এটি শুদ্ধ।</div></div>`:`<h2>${lesson}</h2><p>এখানে <strong>${lesson}</strong> অধ্যায়ের সংজ্ঞা, নিয়ম, গঠন, গুরুত্বপূর্ণ উদাহরণ, টিপস এবং বিসিএস-এর বিগত বছরের প্রশ্ন বিশ্লেষণসহ বিস্তারিত পাঠ দেখানো হবে।</p><div class="fact-box"><strong>পড়ার টিপস:</strong> মূল নিয়মটি চিহ্নিত করুন, নিজের ভাষায় সংক্ষেপ লিখুন এবং প্রতিদিন কমপক্ষে তিনটি উদাহরণ অনুশীলন করুন।</div><h3>গুরুত্বপূর্ণ বিষয়</h3><ul><li>বিষয়টির সংজ্ঞা ও মূল ধারণা</li><li>পরীক্ষায় প্রায়শই আসা অংশ</li><li>ভুল হওয়ার সম্ভাবনাময় দিক</li><li>উদাহরণভিত্তিক ব্যাখ্যা ও অনুশীলন</li></ul><div class="question"><strong>মডেল প্রশ্ন:</strong> ${lesson}-এর মূল নিয়ম কীভাবে প্রয়োগ করা হয়?<div class="answer">উত্তর: নিয়মটি প্রাসঙ্গিক উদাহরণ ও ব্যতিক্রম���হ অনুশীলন করলেই সঠিক উত্তর শনাক্ত করা সহজ হবে।</div></div>`;app.innerHTML=`<div class="eyebrow">${s.title} / ${c.title}</div><div class="lesson-layout"><aside class="lesson-side"><strong style="display:block;padding:8px 10px">এই অধ্যায়ের বিষয়</strong>${c.lessons.map((x,n)=>`<button class="lesson-link ${n===i?'active':''}" onclick="readLesson(${n})">${n+1}. ${x}</button>`).join('')}</aside><article><div class="reader"><div class="reader-content">${content}</div></div><div class="pager"><button ${i===0?'disabled':''} onclick="readLesson(${i-1})">← আগের পাঠ</button><button ${i===c.lessons.length-1?'disabled':''} onclick="readLesson(${i+1})">পরের পাঠ →</button></div></article></div>`}
backBtn.onclick=()=>{if(state.lesson!==undefined&&state.subject&&state.chapter!==null){openSubject(state.subject.id)}else if(state.subject){home()}else home()};document.getElementById('homeBtn').onclick=home;
const menu=document.getElementById('menuPanel');document.getElementById('menuToggle').onclick=()=>{menu.classList.toggle('open');menu.setAttribute('aria-hidden',!menu.classList.contains('open'))};document.getElementById('menuClose').onclick=()=>menu.classList.remove('open');
document.querySelectorAll('[data-font]').forEach(b=>b.onclick=()=>{state.font=Math.max(14,Math.min(26,state.font+Number(b.dataset.font)));document.documentElement.style.setProperty('--reading',state.font+'px');document.getElementById('fontValue').textContent=state.font;localStorage.setItem('bcs-font',state.font)});document.querySelectorAll('[data-theme]').forEach(b=>b.onclick=()=>{document.body.className=b.dataset.theme==='light?'':b.dataset.theme;localStorage.setItem('bcs-theme',b.dataset.theme)});
document.getElementById('printBtn').onclick=()=>window.print();document.getElementById('bookmarkBtn').onclick=e=>{e.currentTarget.textContent='★ বুকমার্ক সংরক্ষিত';localStorage.setItem('bcs-bookmark',JSON.stringify({subject:state.subject?.id,chapter:state.chapter,lesson:state.lesson}))};
const sw=document.getElementById('searchWrap'),si=document.getElementById('searchInput');document.getElementById('searchToggle').onclick=()=>{sw.classList.toggle('open');if(sw.classList.contains('open'))si.focus()};si.oninput=()=>{const q=si.value.trim().toLower;if(!q)return;if(state.subject&&state.chapter!==null){}else if(state.subject){document.querySelectorAll('.chapter-item').forEach(el=>el.style.display=el.textContent.toLower.includes(q)?'':'none')}else{document.querySelectorAll('.subject-card').forEach(el=>el.style.display=el.textContent.toLower.includes(q)?'':'none')}};
const savedFont=localStorage.getItem('bcs-font');if(savedFont){state.font=Number(savedFont);document.documentElement.style.setProperty('--reading',savedFont+'px');document.getElementById('fontValue').textContent=savedFont}const savedTheme=localStorage.getItem('bcs-theme');if(savedTheme&&savedTheme!=='light')document.body.className=savedTheme;home();
