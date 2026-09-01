
(()=>{const C=window.DECK_CONFIG,$=s=>document.querySelector(s),base=$('#baseSlide'),host=$('#layerHost'),shell=$('#slideShell'),title=$('#slideTitle'),cur=$('#cur'),progress=$('#progress'),app=$('#app'),drawer=$('#drawer'),backdrop=$('#backdrop'),grid=$('#thumbGrid');let idx=-1,locked=false,motion=true,touchX=null;const srcFor=n=>`assets/pages/page-${String(n).padStart(2,'0')}.webp`;function preload(n){if(n<1||n>C.total)return;const im=new Image();im.src=srcFor(n)}function buildLayers(page){host.innerHTML='';if(!motion)return;(C.layers[page]||[]).forEach(r=>{const[x,y,w,h,anim]=r,d=document.createElement('div');d.className=`object-layer ${anim}`;Object.assign(d.style,{left:x+'%',top:y+'%',width:w+'%',height:h+'%',backgroundImage:`url("${srcFor(page)}")`,backgroundSize:`${10000/w}% ${10000/h}%`,backgroundPosition:`${x/(100-w)*100||0}% ${y/(100-h)*100||0}%`});host.appendChild(d)})}function show(next){if(locked)return;next=Math.max(0,Math.min(C.total-1,next));if(next===idx&&base.src)return;locked=true;idx=next;const page=idx+1;shell.classList.remove('enter');base.style.opacity='.25';const img=new Image();img.onload=()=>{base.src=img.src;base.alt=`${page}페이지 - ${C.titles[idx]}`;buildLayers(page);title.textContent=C.titles[idx];cur.textContent=String(page).padStart(2,'0');progress.style.width=`${page/C.total*100}%`;document.querySelectorAll('.thumb').forEach((t,i)=>t.classList.toggle('active',i===idx));void shell.offsetWidth;shell.classList.add('enter');base.style.opacity='1';setTimeout(()=>locked=false,260);preload(page+1);preload(page-1)};img.onerror=()=>locked=false;img.src=srcFor(page)}function go(d){show(idx+d)}function openDrawer(){drawer.classList.add('open');backdrop.classList.add('show');drawer.setAttribute('aria-hidden','false')}function closeDrawer(){drawer.classList.remove('open');backdrop.classList.remove('show');drawer.setAttribute('aria-hidden','true')}for(let i=1;i<=C.total;i++){const b=document.createElement('button');b.className='thumb';b.type='button';b.innerHTML=`<img loading="lazy" src="${srcFor(i)}" alt=""><span>${String(i).padStart(2,'0')}</span>`;b.addEventListener('click',()=>{closeDrawer();show(i-1)});grid.appendChild(b)}$('#prevBtn').onclick=()=>go(-1);$('#nextBtn').onclick=()=>go(1);$('#thumbBtn').onclick=openDrawer;$('#closeDrawer').onclick=closeDrawer;backdrop.onclick=closeDrawer;$('#motionBtn').onclick=()=>{motion=!motion;app.classList.toggle('no-motion',!motion);app.classList.toggle('motion-on',motion);$('#motionBtn').textContent=motion?'◌':'•';buildLayers(idx+1);shell.classList.remove('enter');void shell.offsetWidth;shell.classList.add('enter')};$('#fsBtn').onclick=async()=>{try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen()}catch(e){}};document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();go(1)}if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();go(-1)}if(e.key==='Home')show(0);if(e.key==='End')show(C.total-1);if(e.key==='Escape')closeDrawer()});shell.addEventListener('click',e=>{if(matchMedia('(max-width:900px)').matches)return;const r=shell.getBoundingClientRect();go(e.clientX-r.left<r.width/2?-1:1)});shell.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX},{passive:true});shell.addEventListener('touchend',e=>{if(touchX==null)return;const dx=e.changedTouches[0].clientX-touchX;touchX=null;if(Math.abs(dx)>42)go(dx<0?1:-1)},{passive:true});app.classList.add('motion-on');show(0)})();


// ===== Customer Access / Contact =====
(() => {
  const PASSWORD = "fastly2026";
  const loginOverlay = document.getElementById("loginOverlay");
  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("passwordInput");
  const loginError = document.getElementById("loginError");

  const unlocked = sessionStorage.getItem("fastlyDeckUnlocked") === "1";
  if (unlocked && loginOverlay) {
    loginOverlay.classList.add("hidden");
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (passwordInput.value === PASSWORD) {
        sessionStorage.setItem("fastlyDeckUnlocked", "1");
        loginError.textContent = "";
        loginOverlay.classList.add("hidden");
        passwordInput.blur();
      } else {
        loginError.textContent = "비밀번호가 올바르지 않습니다.";
        passwordInput.select();
      }
    });
  }

  const inquiryBtn = document.getElementById("inquiryBtn");
  const contactModal = document.getElementById("contactModal");
  const contactClose = document.getElementById("contactClose");

  function openContact() {
    contactModal.classList.add("open");
    contactModal.setAttribute("aria-hidden", "false");
  }
  function closeContact() {
    contactModal.classList.remove("open");
    contactModal.setAttribute("aria-hidden", "true");
  }

  inquiryBtn?.addEventListener("click", openContact);
  contactClose?.addEventListener("click", closeContact);
  contactModal?.addEventListener("click", (e) => {
    if (e.target === contactModal) closeContact();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && contactModal?.classList.contains("open")) closeContact();
  });
})();
