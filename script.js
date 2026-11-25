(() => {
 const root=document.querySelector('.scroll-scrub');
 const video=root?.querySelector('video');
 const bar=root?.querySelector('.scroll-scrub__progress span');
 const layer=root?.querySelector('.scroll-scrub__layer');
 if(!root||!video||!bar||!layer||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 let raf=0,dirty=true,current=0,target=0,ready=false;
 const clamp=v=>Math.max(0,Math.min(1,v));
 const measure=()=>{const rect=root.getBoundingClientRect();const total=Math.max(root.offsetHeight-window.innerHeight,1);target=clamp(-rect.top/total);dirty=true;};
 video.addEventListener('loadedmetadata',()=>{ready=true;dirty=true;});
 video.addEventListener('seeked',()=>{layer.dataset.videoPainted='true';},{passive:true});
 video.addEventListener('error',()=>{layer.dataset.videoFailed='true';});
 const tick=()=>{raf=0;if(dirty){measure();dirty=false;}current+=(target-current)*.2;bar.style.transform=`scaleX(${target})`;if(ready&&!video.seeking){const t=clamp(current)*Math.max(video.duration-.04,0);if(Math.abs(video.currentTime-t)>.035){try{video.currentTime=t;}catch(e){}}}if(Math.abs(target-current)>.001||dirty)raf=requestAnimationFrame(tick);};
 const request=()=>{dirty=true;if(!raf)raf=requestAnimationFrame(tick);};
 window.addEventListener('scroll',request,{passive:true});window.addEventListener('resize',request);video.load();measure();request();
})();
