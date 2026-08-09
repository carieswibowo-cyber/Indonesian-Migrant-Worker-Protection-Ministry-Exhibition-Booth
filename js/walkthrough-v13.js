(function(){
  const route=['kementerian','binawan','hamawork','jpath','lpkcis','maharani'];
  const names={kementerian:'LOBI',binawan:'BINAWAN',hamawork:'HWS',jpath:"J'PATH",lpkcis:'CIS',maharani:'MAHARANI'};
  let idx=0,touring=false,timer=null; const keys={};
  const scene=()=>document.querySelector('a-scene');
  const cam=()=>scene()&&scene().querySelector('a-camera');
  function go(target){const m=scene()&&scene().components&&scene().components['booth-manager'];if(!m)return;idx=Math.max(0,route.indexOf(target));m.switchScene(target);setTimeout(update,80)}
  function update(){document.getElementById('wv13-status').textContent=touring?'GUIDED TOUR':'FREE WALK';document.getElementById('wv13-guide').textContent=touring?'MENUJU • '+names[route[idx]]:'FREE WALK • W/A/S/D berjalan • mouse melihat'}
  function next(){go(route[(idx+1)%route.length])} function back(){go(route[(idx-1+route.length)%route.length])}
  function stop(){touring=false;clearInterval(timer);document.getElementById('wv13-tour').style.display='inline-block';document.getElementById('wv13-stop').style.display='none';update()}
  window.addEventListener('keydown',e=>{let k=e.key.length===1?e.key.toLowerCase():e.key;if(['w','a','s','d','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(k))e.preventDefault();keys[k]=true;if(k==='Enter'&&!touring)next();if(k==='Escape'&&touring)stop()});
  window.addEventListener('keyup',e=>{let k=e.key.length===1?e.key.toLowerCase():e.key;keys[k]=false});
  document.getElementById('wv13-forward').onclick=next;document.getElementById('wv13-back').onclick=back;
  document.getElementById('wv13-tour').onclick=function(){touring=true;this.style.display='none';document.getElementById('wv13-stop').style.display='inline-block';update();timer=setInterval(next,6500)};
  document.getElementById('wv13-stop').onclick=stop;
  function loop(){const c=cam();if(c&&window.THREE){let x=0,z=0;if(keys.w||keys.ArrowUp)z-=1;if(keys.s||keys.ArrowDown)z+=1;if(keys.a||keys.ArrowLeft)x-=1;if(keys.d||keys.ArrowRight)x+=1;if(x||z){let n=Math.hypot(x,z);x/=n;z/=n;let v=new THREE.Vector3(x,0,z);v.applyQuaternion(c.object3D.quaternion);c.object3D.position.x+=v.x*.035;c.object3D.position.z+=v.z*.035;c.object3D.position.y=1.6}}requestAnimationFrame(loop)}
  const oldNav=window.navigateTo;if(typeof oldNav==='function'){window.navigateTo=function(t){let i=route.indexOf(t);if(i>=0)idx=i;oldNav(t);setTimeout(update,50)}}
  update();loop();
})();
