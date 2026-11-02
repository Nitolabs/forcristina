(function(){
  var wishes=[
    "Que cada examen se sienta más ligero que un gatito dormido.",
    "Que este año tengas más días de risa que de desvelos.",
    "Que tu café siempre esté caliente y tus apuntes bien ordenados.",
    "Que al final de cada día difícil te espere un gatito.",
    "Que todo lo que estudias se convierta en lo que sueñas ser.",
    "Que a los veinte te cuiden con la misma ternura que tú le das al mundo."
  ];
  var i=0, w=document.getElementById("wish"), d=document.getElementById("dose");
  document.getElementById("next").addEventListener("click",function(){
    i=(i+1)%wishes.length; w.textContent=wishes[i]; d.textContent="Dosis "+(i+1)+" de "+wishes.length;
  });
  var c=document.getElementById("cat"), t;
  c.addEventListener("click",function(){
    c.classList.add("on"); c.setAttribute("aria-pressed","true");
    clearTimeout(t); t=setTimeout(function(){c.classList.remove("on"); c.setAttribute("aria-pressed","false");},1800);
  });
  var rm=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
  var env=document.getElementById("env"), lt=document.getElementById("letter"), et;
  env.addEventListener("click",function(){
    var open=!env.classList.contains("open");
    env.classList.toggle("open",open); env.setAttribute("aria-expanded",String(open));
    clearTimeout(et);
    if(open){et=setTimeout(function(){lt.classList.add("show");},rm?0:1700);}
    else{lt.classList.remove("show");}
  });
  var st=document.getElementById("star"), pm=document.getElementById("poem");
  st.addEventListener("click",function(){
    if(st.classList.contains("fall"))return;
    st.classList.add("fall");
    setTimeout(function(){st.classList.add("gone");pm.classList.add("show");},rm?0:1800);
  });
  var gate=document.getElementById("gate"), page=document.getElementById("page"), music=document.getElementById("music"), mbtn=document.getElementById("mbtn");
  var hasAudio=!!music.getAttribute("src");
  music.addEventListener("error",function(){hasAudio=false;mbtn.hidden=true;document.getElementById("vol").hidden=true;});
  document.getElementById("vol").hidden=!hasAudio;
  function lab(){mbtn.textContent=music.paused?"♪ Reanudar música":"♪ Pausar música";}
  music.addEventListener("play",lab); music.addEventListener("pause",lab);
  mbtn.addEventListener("click",function(){if(music.paused){music.play();}else{music.pause();}});
  document.getElementById("enter").addEventListener("click",function(){
    if(hasAudio){var p=music.play(); if(p&&p.catch){p.catch(function(){lab();});}}
    gate.classList.add("out"); page.removeAttribute("inert");
    document.body.classList.remove("locked"); document.body.classList.add("go");
    mbtn.hidden=!hasAudio; lab();
  });
})();
