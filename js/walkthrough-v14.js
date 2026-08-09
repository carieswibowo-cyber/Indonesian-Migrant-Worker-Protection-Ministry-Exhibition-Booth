
(function(){
  "use strict";
  const route = ["kementerian","binawan","hamawork","jpath","lpkcis","maharani"];
  const names = {
    kementerian:"LOBBY",
    binawan:"BINAWAN INTI UTAMA",
    hamawork:"HAMA WORK SOLUTION",
    jpath:"J'PATH",
    lpkcis:"LPK-CIS",
    maharani:"MAHARANI TRADING"
  };
  let idx = 0, touring = false, tourTimer = null;
  const keys = {};
  const $ = id => document.getElementById(id);

  function manager(){
    const scene = document.querySelector("a-scene");
    return scene && scene.components ? scene.components["booth-manager"] : null;
  }
  function sync(){
    const current = window.currentBooth;
    const i = route.indexOf(current);
    if(i >= 0) idx = i;
    $("v14-guide").textContent = "WALKTHROUGH • " + (names[route[idx]] || "LOBBY");
    $("v14-status").textContent = touring ? "GUIDED TOUR" : "FREE WALK";
    const next = route[(idx+1)%route.length];
    $("v14-destination-name").textContent = names[next];
    $("v14-destination-distance").textContent = "Next booth • " + (idx+1) + "/" + route.length;
  }
  function go(i){
    idx = (i + route.length) % route.length;
    const m = manager();
    if(m && typeof m.switchScene === "function"){
      m.switchScene(route[idx]);
      setTimeout(sync, 120);
    } else if(typeof window.navigateTo === "function"){
      window.navigateTo(route[idx]);
      setTimeout(sync, 120);
    }
  }
  function next(){ go(idx+1); }
  function back(){ go(idx-1); }

  function toggleTour(){
    touring = true;
    $("v14-tour").classList.add("hidden");
    $("v14-stop").classList.remove("hidden");
    sync();
    clearInterval(tourTimer);
    tourTimer = setInterval(next, 6500);
  }
  function stopTour(){
    touring = false;
    clearInterval(tourTimer);
    $("v14-tour").classList.remove("hidden");
    $("v14-stop").classList.add("hidden");
    sync();
  }

  // Continuous first-person-like movement inside the current panorama.
  function move(){
    const scene = document.querySelector("a-scene");
    const cam = scene && scene.querySelector("[camera]");
    if(cam && cam.object3D){
      let x=0,z=0;
      if(keys.w || keys.ArrowUp) z -= 1;
      if(keys.s || keys.ArrowDown) z += 1;
      if(keys.a || keys.ArrowLeft) x -= 1;
      if(keys.d || keys.ArrowRight) x += 1;
      if(x||z){
        const len=Math.hypot(x,z)||1; x/=len; z/=len;
        const speed=0.028;
        const dir=new THREE.Vector3(x,0,z).applyQuaternion(cam.object3D.quaternion);
        cam.object3D.position.x += dir.x*speed;
        cam.object3D.position.z += dir.z*speed;
        cam.object3D.position.y = 1.6;
      }
    }
    requestAnimationFrame(move);
  }

  window.addEventListener("keydown",e=>{
    const k=e.key.length===1?e.key.toLowerCase():e.key;
    if(["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","e","Enter","Escape"].includes(k)) e.preventDefault();
    keys[k]=true;
    if(k==="e" || k==="Enter"){
      const ex=$("v14-explore");
      if(!ex.classList.contains("hidden")) $("v14-explore-btn").click();
    }
    if(k==="Escape" && touring) stopTour();
  });
  window.addEventListener("keyup",e=>{
    const k=e.key.length===1?e.key.toLowerCase():e.key;
    keys[k]=false;
  });

  $("v14-next").onclick=next;
  $("v14-back").onclick=back;
  $("v14-tour").onclick=toggleTour;
  $("v14-stop").onclick=stopTour;
  $("v14-explore-btn").onclick=()=>{ $("v14-explore").classList.add("hidden"); next(); };

  // Mobile joystick.
  const pad=$("v14-touch"), stick=$("v14-stick");
  let tid=null,sx=0,sy=0;
  pad.addEventListener("touchstart",e=>{
    const t=e.changedTouches[0]; tid=t.identifier; sx=t.clientX; sy=t.clientY; e.preventDefault();
  },{passive:false});
  pad.addEventListener("touchmove",e=>{
    const t=[...e.changedTouches].find(v=>v.identifier===tid); if(!t)return;
    let dx=t.clientX-sx,dy=t.clientY-sy,max=45,mag=Math.min(max,Math.hypot(dx,dy)),a=Math.atan2(dy,dx);
    dx=Math.cos(a)*mag;dy=Math.sin(a)*mag;stick.style.transform=`translate(${dx}px,${dy}px)`;
    keys.w=dy<-10;keys.s=dy>10;keys.a=dx<-10;keys.d=dx>10;e.preventDefault();
  },{passive:false});
  pad.addEventListener("touchend",()=>{
    tid=null;stick.style.transform="translate(0,0)";keys.w=keys.s=keys.a=keys.d=false;
  });

  // If the original app exposes navigateTo, synchronize route index.
  if(typeof window.navigateTo==="function"){
    const original=window.navigateTo;
    window.navigateTo=function(target){
      const i=route.indexOf(target); if(i>=0) idx=i;
      original.apply(this,arguments); setTimeout(sync,80);
    };
  }
  sync();
  move();
})();
