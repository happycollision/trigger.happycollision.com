import"./hoisted.CVpJX-2E.js";function y(e,d,r,u){if(e){var o,t=e.scrollTop,g=e.clientHeight,m=e.scrollHeight-g,S=t+d,l=Math.min(Math.max(S,0),m),n=function(c){o=o||c;var i=c-o;e.scrollTop=t+(l-t)*u(i/r),i<=r&&window.requestAnimationFrame(n)};t!=l&&window.requestAnimationFrame(n)}}var v=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1};function x(){y(window.document.scrollingElement,window.innerHeight*.66,1500,v)}document.querySelector("[data-scroll]")?.addEventListener("click",x);function a(){let e=localStorage.getItem("render:cols")??"1";document.body.style.setProperty("--cols",e)}function f(){let e=localStorage.getItem("render:cols")??"1";e=e==="1"?"2":"1",localStorage.setItem("render:cols",e),a()}a();document.querySelector("button[data-toggle-cols]")?.addEventListener("click",f);function s(){let e=localStorage.getItem("render:textSize")??"1";document.body.style.setProperty("--text-size",e+"rem")}function z(){let e=localStorage.getItem("render:textSize")??"1";e=e==="1"?"0.75":"1",localStorage.setItem("render:textSize",e),s()}s();document.querySelector("button[data-toggle-text-size]")?.addEventListener("click",z);
