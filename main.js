const skills=[["HTML","Semantic, accessible markup"],["CSS","Responsive, polished layouts"],["JavaScript","Interactive front-end logic"],["React","Component-based UIs"],["Website Development","Fast, modern build workflows"],["UI/UX","Clear, modern interfaces"],["Video Creation","Video content creation"],["Video Editing","Cuts, pacing and finishing"],["Prompt Engineering","Writing clear, effective prompts"],["GitHub","Version control and hosting code"],["Cloud Deployment","Cloudflare Pages deploys"]];
const projects=[
["Call Centre Website","A business website for a call centre, built responsive and deployed on Cloudflare Pages.","https://callcentre.pages.dev","135deg,#1e3a8a,#0891b2"],
["HK Restaurant Website","A restaurant website with menu and brand-focused presentation.","https://hkrestaurant-c5wok3eq.manus.space","135deg,#7c2d12,#f59e0b"],
["Three Flames Restaurant","A restaurant website deployed on Cloudflare Pages.","https://three-flames.pages.dev","135deg,#7f1d1d,#ea580c"],
["ArtBy Saadi","A portfolio and shop concept for an Arabic calligraphy artist, for showing prints and taking commissions.","","135deg,#064e3b,#ca8a04"],
["Notes App","A full-stack notes app with a 3D-styled interface, built with React, TypeScript and Node.","","135deg,#312e81,#7c3aed"]];
const services=[["Website Development","Fast, modern sites built with modern workflows."],["Business Websites","Clean, responsive sites that present your business clearly."],["Video Creation","Short videos for promos and social content."],["Website Redesign","Refresh an outdated site with a modern look and feel."]];
const steps=[["Learning the foundations","Started with HTML, CSS and JavaScript, building responsive pages."],["Speeding up the workflow","Began using modern tools to design, build and iterate on websites faster."],["Shipping real sites","Deployed projects on Cloudflare Pages and kept them on GitHub."],["Business-style builds","Built the Call Centre and restaurant websites, plus other concept sites."],["Going deeper with React","Currently building a full-stack Notes App and growing React skills."],["Creating video content","Producing video content alongside web development."]];
const contacts=[["WhatsApp","https://wa.me/923179693315","+92 317 9693315"],["LinkedIn","https://www.linkedin.com/in/muhammad-saad-khan-701571403","Muhammad Saad Khan"]];
const $=id=>document.getElementById(id);
$('skillGrid').innerHTML=skills.map(s=>`<div class="glass tilt rv p-5" tabindex="0"><div class="disp" style="font-weight:700;font-size:1.05rem">${s[0]}</div><p style="color:var(--mut);font-size:13px;margin-top:6px">${s[1]}</p></div>`).join('');
$('projGrid').innerHTML=projects.map((p,i)=>{const x=p[2]?`<a class="btn p" style="padding:10px 20px;font-size:14px" href="${p[2]}" target="_blank" rel="noopener">View Project</a>`:`<span class="btn s" style="padding:10px 20px;font-size:14px;opacity:.6" aria-disabled="true">Link coming soon</span>`;return `<article class="glass tilt rv p-5"><div class="prev" style="background:linear-gradient(${p[3]})"><i style="left:16px;top:16px;width:40%;height:10px"></i><i style="left:16px;top:38px;width:62%;height:10px;opacity:.6"></i><i style="right:16px;top:16px;width:46px;height:46px;border-radius:50%"></i><i style="left:16px;top:74px;width:calc(100% - 32px);height:62px;opacity:.35"></i><b>${p[0]}</b></div><h3 style="font-size:1.35rem;font-weight:700">${p[0]}</h3><p style="color:var(--mut);margin:8px 0 18px;font-size:14.5px;line-height:1.6">${p[1]}</p>${x}</article>`}).join('');
$('svcGrid').innerHTML=services.map((s,i)=>`<div class="glass tilt rv p-6"><div style="width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--a),var(--b));margin-bottom:16px;box-shadow:0 10px 30px -8px var(--a)"></div><h3 style="font-weight:700;font-size:1.15rem">${s[0]}</h3><p style="color:var(--mut);font-size:14px;margin-top:8px;line-height:1.6">${s[1]}</p></div>`).join('');
$('tl').insertAdjacentHTML('beforeend',steps.map(s=>`<div class="it rv"><div class="glass p-5"><h3 style="font-weight:700">${s[0]}</h3><p style="color:var(--mut);font-size:14.5px;margin-top:6px">${s[1]}</p></div></div>`).join(''));
$('ctGrid').innerHTML=contacts.map(c=>`<a class="glass tilt p-5" style="text-decoration:none;color:#fff;display:block" href="${c[1]}" target="_blank" rel="noopener" aria-label="${c[0]}: ${c[2]}"><div class="disp" style="font-weight:700">${c[0]}</div><div style="color:var(--mut);font-size:12px;margin-top:4px;word-break:break-all">${c[2]}</div></a>`).join('');

const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
if(!reduce)document.querySelectorAll('.tilt').forEach(c=>{
 c.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.transform=`perspective(900px) rotateX(${(.5-y)*14}deg) rotateY(${(x-.5)*16}deg) scale3d(1.03,1.03,1.03)`;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%')});
 c.addEventListener('pointerleave',()=>{c.style.transform=''});
});
const menu=$('menu'),links=$('links');
menu.onclick=()=>{const o=links.classList.toggle('open');menu.setAttribute('aria-expanded',o)};
links.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded',false)});
const tl=$('tl');addEventListener('scroll',()=>{const r=tl.getBoundingClientRect();$('tlLine').style.setProperty('--h',Math.max(0,Math.min(100,(innerHeight*.6-r.top)/r.height*100))+'%')},{passive:true});

/* Hero 3D — three.js is lazy-loaded after first paint */
function hero(){
 const el=$('stage');
 try{
  const R=new THREE.WebGLRenderer({antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));el.appendChild(R.domElement);
  const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(40,1,.1,50);C.position.set(0,.2,8);
  const G=new THREE.Group();S.add(G);
  const cv=document.createElement('canvas');cv.width=640;cv.height=400;const x=cv.getContext('2d');
  const gr=x.createLinearGradient(0,0,640,400);gr.addColorStop(0,'#0d0b1f');gr.addColorStop(1,'#12304a');x.fillStyle=gr;x.fillRect(0,0,640,400);
  ['#ff5f57','#febc2e','#28c840'].forEach((c,i)=>{x.fillStyle=c;x.beginPath();x.arc(24+i*22,24,6,0,7);x.fill()});
  const cols=['#a78bfa','#22d3ee','#f5c76b','#e5e7eb'];let s=7;const rnd=()=>(s=s*16807%2147483647)/2147483647;
  for(let i=0;i<13;i++){x.fillStyle=cols[i%4];x.globalAlpha=.85;const ind=(i%3)*28;x.fillRect(36+ind,62+i*24,40+rnd()*220,9);x.fillRect(90+ind+rnd()*200,62+i*24,30+rnd()*90,9)}
  x.globalAlpha=1;
  const scr=new THREE.Mesh(new THREE.PlaneGeometry(3.6,2.25),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(cv)}));scr.position.z=.09;G.add(scr);
  const body=new THREE.Mesh(new THREE.BoxGeometry(3.85,2.5,.16),new THREE.MeshStandardMaterial({color:0x14121f,metalness:.9,roughness:.25}));G.add(body);
  const edge=new THREE.LineSegments(new THREE.EdgesGeometry(body.geometry),new THREE.LineBasicMaterial({color:0x22d3ee}));G.add(edge);
  const neck=new THREE.Mesh(new THREE.BoxGeometry(.3,.9,.12),body.material);neck.position.y=-1.65;G.add(neck);
  const base=new THREE.Mesh(new THREE.CylinderGeometry(.9,1.05,.08,48),body.material);base.position.y=-2.12;G.add(base);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(2.9,.012,8,120),new THREE.MeshBasicMaterial({color:0x8b5cf6}));ring.rotation.x=1.2;G.add(ring);
  const cubes=[];for(let i=0;i<6;i++){const m=new THREE.Mesh(new THREE.BoxGeometry(.22,.22,.22),new THREE.MeshStandardMaterial({color:i%2?0x8b5cf6:0x22d3ee,emissive:i%2?0x4c1d95:0x0e7490,metalness:.6,roughness:.3}));m.userData.a=i*1.05;cubes.push(m);G.add(m)}
  const n=380,pa=new Float32Array(n*3);for(let i=0;i<n*3;i++)pa[i]=(Math.random()-.5)*14;
  const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pa,3));
  const pts=new THREE.Points(pg,new THREE.PointsMaterial({size:.03,color:0xa5b4fc,transparent:true,opacity:.7}));S.add(pts);
  S.add(new THREE.AmbientLight(0x6666aa,.8));const l1=new THREE.PointLight(0x8b5cf6,60,20);l1.position.set(-4,3,4);const l2=new THREE.PointLight(0x22d3ee,50,20);l2.position.set(4,-2,4);S.add(l1,l2);
  let mx=0,my=0,ry=0,rx=0,vis=true,t=0;
  addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
  const fit=()=>{const w=el.clientWidth,h=el.clientHeight;R.setSize(w,h);C.aspect=w/h;C.updateProjectionMatrix()};
  new ResizeObserver(fit).observe(el);fit();
  new IntersectionObserver(e=>{vis=e[0].isIntersecting}).observe(el);
  const loop=()=>{requestAnimationFrame(loop);if(!vis&&!reduce)return;t+=.01;
   ry+=(mx*.9-ry)*.06;rx+=(my*.5-rx)*.06;G.rotation.y=ry+Math.sin(t*.6)*.12;G.rotation.x=rx;G.position.y=Math.sin(t)*.12;
   ring.rotation.z=t*.4;pts.rotation.y=t*.05;cubes.forEach(m=>{const a=m.userData.a+t;m.position.set(Math.cos(a)*3,Math.sin(a*1.3)*1.3,Math.sin(a)*1.2);m.rotation.x=a;m.rotation.y=a*.7});
   R.render(S,C);if(reduce)return};
  loop();
 }catch(e){el.classList.add('nogl')}
}
function loadThree(){const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';s.onload=hero;s.onerror=()=>$('stage').classList.add('nogl');document.head.appendChild(s)}
addEventListener('load',()=>('requestIdleCallback' in window?requestIdleCallback(loadThree,{timeout:1500}):setTimeout(loadThree,300)));
