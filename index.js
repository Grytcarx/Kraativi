// let duracionVideo = -1;

// videoFondo.addEventListener('loadedmetadata', function() {
//     duracionVideo = videoFondo.duration;
// });

// let girando = false;
// document.addEventListener('scroll', ()=>{
//     if(duracionVideo==-1) return;
//     if(girando) return;
//     girando=true;
//     const scrollActual = window.scrollY;
//     const scrollFinal = document.body.scrollHeight-window.innerHeight;
//     const segundosCadaPx= duracionVideo/scrollFinal;
//     let segundos = segundosCadaPx*scrollActual;
//     if(segundos>duracionVideo) segundos=duracionVideo;
//     videoFondo.currentTime = segundos;
//     setTimeout(()=>{
//         girando=false;
//     },25);
// });