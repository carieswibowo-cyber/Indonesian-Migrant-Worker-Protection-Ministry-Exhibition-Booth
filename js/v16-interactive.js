
(function(){
"use strict";
const booths=[
 {id:"kementerian",name:"LOBBY / KP2MI",desc:"Main exhibition lobby and orientation area.",topics:["Protection","Registration","Services"]},
 {id:"binawan",name:"BINAWAN INTI UTAMA",desc:"Exhibition booth for professional and healthcare opportunities.",topics:["Healthcare","Training","Jobs"]},
 {id:"hamawork",name:"HAMA WORK SOLUTION",desc:"Employment and placement information booth.",topics:["Jobs","Placement","Training"]},
 {id:"jpath",name:"J'PATH",desc:"Pathway-focused information and opportunity booth.",topics:["Japan","Jobs","Preparation"]},
 {id:"lpkcis",name:"LPK-CIS",desc:"Training and preparation information booth.",topics:["Training","Skills","Preparation"]},
 {id:"maharani",name:"MAHARANI TRADING",desc:"Opportunity and business-related exhibition booth.",topics:["Jobs","Opportunity","Services"]}
];
const topics={
 Healthcare:["BINAWAN INTI UTAMA"], Training:["BINAWAN INTI UTAMA","LPK-CIS"], Jobs:["BINAWAN INTI UTAMA","HAMA WORK SOLUTION","J'PATH","MAHARANI TRADING"],
 Protection:["LOBBY / KP2MI"], Registration:["LOBBY / KP2MI"], Placement:["HAMA WORK SOLUTION"], Japan:["J'PATH"], Preparation:["J'PATH","LPK-CIS"], Skills:["LPK-CIS"], Opportunity:["MAHARANI TRADING"]
};
const state={visited:new Set(),favorites:new Set(),quizScore:0,quizIndex:0};
const $=id=>document.getElementById(id);
const modal=$("v16-modal"),content=$("v16-content");

function open(contentHtml){content.innerHTML=contentHtml;modal.classList.remove("v16-hidden");modal.setAttribute("aria-hidden","false");}
function close(){modal.classList.add("v16-hidden");modal.setAttribute("aria-hidden","true")}
$("v16-close").onclick=close;$("v16-backdrop").onclick=close;

function updateProgress(){
 $("v16-progress-pill").textContent=`${state.visited.size} / 6 BOOTHS`;
}
function markVisited(id){state.visited.add(id);updateProgress()}

function boothList(){
 return `<h1 class="v16-title">🏢 Exhibition Booths</h1>
 <p class="v16-sub">Choose a booth to discover what it can offer.</p>
 <div class="v16-grid">${booths.map(b=>`
 <div class="v16-card">
  <h3>${b.name}</h3><p>${b.desc}</p>
  <div class="v16-tags">${b.topics.map(t=>`<span class="v16-tag">${t}</span>`).join("")}</div>
  <button class="v16-btn" data-booth="${b.id}">Explore booth</button>
 </div>`).join("")}</div>`;
}
function opportunity(){
 open(`<h1 class="v16-title">💼 Find Your Opportunity</h1>
 <p class="v16-sub">Choose a topic to see which exhibition booth is relevant.</p>
 <div class="v16-tags">${Object.keys(topics).map(t=>`<button class="v16-tag" data-topic="${t}">${t}</button>`).join("")}</div>
 <div id="v16-topic-result"></div>`);
}
function journey(){
 open(`<h1 class="v16-title">🛡️ Protection Journey</h1>
 <p class="v16-sub">A simple exhibition guide to the migrant-worker journey.</p>
 ${[
 ["1","BEFORE WORKING ABROAD","Preparation, registration, skills and readiness."],
 ["2","PLACEMENT","Understand the employment and placement pathway."],
 ["3","DURING EMPLOYMENT","Know where to seek information and assistance."],
 ["4","PROTECTION","Understand available protection and complaint channels."],
 ["5","RETURN","Prepare for the transition back to Indonesia."]
 ].map(x=>`<div class="v16-step"><div class="v16-num">${x[0]}</div><div><b>${x[1]}</b><p class="v16-sub" style="margin:4px 0 0">${x[2]}</p></div></div>`).join("")}`);
}
const questions=[
 {q:"What should a visitor explore first to understand the exhibition?",o:["A booth","The lobby/orientation","A random country"],a:1},
 {q:"Which topic is associated with skills preparation?",o:["Training","Parking","Entertainment"],a:0},
 {q:"Which feature helps you discover relevant booths?",o:["Find Your Opportunity","Exit","Volume"],a:0},
 {q:"What is the purpose of the Protection Journey?",o:["Explain the journey stages","Change the panorama","Play music"],a:0},
 {q:"How many main exhibition nodes are represented in this interface?",o:["3","6","12"],a:1}
];
function quiz(){
 state.quizIndex=0;state.quizScore=0;renderQuiz();
}
function renderQuiz(){
 const q=questions[state.quizIndex];
 if(!q){open(`<h1 class="v16-title">🧠 Quiz Complete</h1><div class="v16-score">${state.quizScore} / ${questions.length}</div><p class="v16-sub">Thanks for exploring the exhibition.</p><button class="v16-btn" id="v16-retry">Try again</button>`);$("v16-retry").onclick=quiz;return}
 open(`<h1 class="v16-title">🧠 Knowledge Challenge</h1><p class="v16-sub">Question ${state.quizIndex+1} of ${questions.length}</p>
 <div class="v16-progressbar"><span style="width:${(state.quizIndex/questions.length)*100}%"></span></div>
 <div class="v16-q">${q.q}</div>
 ${q.o.map((x,i)=>`<button class="v16-option" data-answer="${i}">${x}</button>`).join("")}`);
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{if(+b.dataset.answer===q.a)state.quizScore++;state.quizIndex++;renderQuiz()});
}
function progress(){
 open(`<h1 class="v16-title">✓ My Exhibition Progress</h1>
 <p class="v16-sub">Your exploration progress is kept for this visit.</p>
 <div class="v16-progressbar"><span style="width:${state.visited.size/6*100}%"></span></div>
 <div class="v16-score">${state.visited.size} / 6</div>
 <div class="v16-grid">${booths.map(b=>`<div class="v16-card"><h3>${state.visited.has(b.id)?"✓ ":""}${b.name}</h3><p>${state.visited.has(b.id)?"Explored":"Not explored yet"}</p><button class="v16-btn" data-fav="${b.id}">${state.favorites.has(b.id)?"★ Saved":"☆ Save"}</button></div>`).join("")}</div>`);
 document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=()=>{const id=b.dataset.fav;if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);progress()});
}

document.querySelectorAll("[data-v16-open]").forEach(b=>b.addEventListener("click",()=>{
 const type=b.dataset.v16Open;
 if(type==="booths")open(boothList());if(type==="opportunity")opportunity();if(type==="journey")journey();if(type==="quiz")quiz();if(type==="progress")progress();
}));

document.addEventListener("click",e=>{
 const booth=e.target.closest("[data-booth]");
 if(booth){
  markVisited(booth.dataset.booth);
  if(typeof window.navigateTo==="function")window.navigateTo(booth.dataset.booth);
  close();
 }
 const topic=e.target.closest("[data-topic]");
 if(topic){
  const r=$("v16-topic-result"); if(r)r.innerHTML=`<div class="v16-card"><h3>${topic.dataset.topic}</h3><p>${topics[topic.dataset.topic].join(" • ")}</p></div>`;
 }
});

// Sync when the original site changes booth.
setInterval(()=>{
 const id=window.currentBooth;
 if(id&&booths.some(b=>b.id===id))markVisited(id);
},1000);
updateProgress();
})();


