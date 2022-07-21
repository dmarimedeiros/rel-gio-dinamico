const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const fundo = document.getElementById('fundo');

const relogio =setInterval(function time (){
  let datadia = new Date();
  let hs = datadia.getHours();
  let min = datadia.getMinutes();
  let seg = datadia.getSeconds();

if (hs < 10) hs = '0' + hs;
if (min < 10) min = '0' + min;
if (seg < 10) seg = '0' + seg;


  horas.textContent = hs;
  minutos.textContent = min;
  segundos.textContent = seg;

})