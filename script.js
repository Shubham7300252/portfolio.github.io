const skills = [
  ["01","CorelDRAW","Vector design, layouts, illustrations and production artwork.","coreldraw.html","CD"],
  ["02","Photoshop","Photo editing, compositing, retouching, posters and digital artwork.","photoshop.html","PS"],
  ["03","Illustrator","Logos, vector graphics, icons, branding assets and scalable artwork.","illustrator.html","AI"],
  ["04","InDesign","Editorial layouts, brochures, catalogues and print-ready documents.","indesign.html","ID"],
  ["05","Premiere Pro","Professional video editing, storytelling, transitions, sound and delivery.","premiere-pro.html","PR"],
  ["06","After Effects","Motion graphics, titles, visual effects and animated compositions.","after-effects.html","AE"],
  ["07","WordPress","Website setup, content management, page building and visual customization.","wordpress.html","WP"],
  ["08","SEO","On-page optimization, content structure, keywords and search visibility basics.","seo.html","SEO"],
  ["09","Tally Prime","Accounting workflows, vouchers, ledgers, reporting and business records.","tally-prime.html","TP"],
  ["10","Figma","UI/UX wireframes, prototypes, design systems and collaborative interface design.","figma.html","FG"]
];

const grid = document.getElementById("skillGrid");
skills.forEach(([num,name,desc,page,icon])=>{
  const card=document.createElement("a");
  card.href=`skills/${page}`;
  card.className="skill-card reveal";
  card.innerHTML=`
    <span class="skill-index">MODULE ${num}</span>
    <span class="skill-icon">${icon}</span>
    <h3>${name}</h3>
    <p>${desc}</p>
    <span class="skill-open">OPEN MODULE →</span>`;
  grid.appendChild(card);
});

const panel=document.getElementById("experiencePanel");
const deploy=document.getElementById("deployExperience");
const expBtn=document.getElementById("experienceBtn");

function toggleExperience(){
  panel.classList.toggle("open");
  deploy.classList.toggle("active");
  deploy.querySelector(".deploy-icon").textContent=panel.classList.contains("open")?"−":"+";
  if(panel.classList.contains("open")){
    setTimeout(()=>document.getElementById("experience").scrollIntoView({behavior:"smooth",block:"start"}),120);
  }
}
deploy.addEventListener("click",toggleExperience);
expBtn.addEventListener("click",()=>{
  document.getElementById("experience").scrollIntoView({behavior:"smooth"});
  setTimeout(()=>{if(!panel.classList.contains("open"))toggleExperience()},450);
});

const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();
