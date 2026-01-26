
const btnIzq = document.getElementById('btnIzq');
const btnDer = document.getElementById('btnDer');
const capasEscena1 = document.querySelectorAll('.escena1');
const capasEscena2 = document.querySelectorAll('.escena2');
const botonesAudio = document.getElementById('btnaudio');

function mostrarEscena(escena) {
  capasEscena1.forEach(c => c.classList.remove('activo'));
  capasEscena2.forEach(c => c.classList.remove('activo'));

  if (escena === 1) {
    capasEscena1.forEach(c => c.classList.add('activo'));
    botonesAudio.classList.add('oculto');
    audio.pause();
  }

  if (escena === 2) {
    capasEscena2.forEach(c => c.classList.add('activo'));
    botonesAudio.classList.remove('oculto');
  }
}

btnIzq.addEventListener('click', () => mostrarEscena(1));
btnDer.addEventListener('click', () => mostrarEscena(2));




/* Botones de audio */


const mp3Izq = document.getElementById('mp3Izq');
const mp3Der = document.getElementById('mp3Der');
const audio = document.getElementById('audio');
const escena2Img = document.getElementById('escena2Img');

const escena2Data = [
  { img: "../Imagenes/digital/d2/mp3info1.png", audio: "../Audio/mp3/AlbertKaderUbiquous.mp3" },
  { img: "../Imagenes/digital/d2/mp3info2.png", audio: "../Audio/mp3/DaimonbBrokenAgain.mp3" },
  { img: "../Imagenes/digital/d2/mp3info3.png", audio: "../Audio/mp3/KangaroKingPascal.mp3" },
  { img: "../Imagenes/digital/d2/mp3info4.png", audio: "../Audio/mp3/SpeaksoftlyBrokenman.mp3" },
];

let indexEscena2 = 0; // índice actual

function actualizarEscena2() {
  escena2Img.src = escena2Data[indexEscena2].img;
  audio.src = escena2Data[indexEscena2].audio;
  audio.play();
}

mp3Der.addEventListener('click', () => {
  indexEscena2 = (indexEscena2 + 1) % escena2Data.length; // loop
  actualizarEscena2();
});

mp3Izq.addEventListener('click', () => {
  indexEscena2 = (indexEscena2 - 1 + escena2Data.length) % escena2Data.length; // loop
  actualizarEscena2();
});

