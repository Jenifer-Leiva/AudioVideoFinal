
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const AUDIO_BASE = "../Audio/80music.opus";
const AUDIO_ROTURA = "../Audio/brokencd.opus";

let audioBase, sourceBase;
let audioEfecto, sourceEfecto;

function iniciarAudioBase() {
  if (audioBase) return;

  audioBase = new Audio(AUDIO_BASE);
  audioBase.crossOrigin = "anonymous";
  audioBase.loop = true;

  sourceBase = audioCtx.createMediaElementSource(audioBase);
  sourceBase.connect(audioCtx.destination);

  audioBase.play();
}

function crearBitCrusher(bits = 4) {
  const node = audioCtx.createScriptProcessor(4096, 1, 1);
  const step = Math.pow(1 / 2, bits);

  node.onaudioprocess = e => {
    const input = e.inputBuffer.getChannelData(0);
    const output = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < input.length; i++) {
      output[i] = Math.round(input[i] / step) * step;
    }
  };
  return node;
}

function crearPasaBanda(freq, q) {
  const band = audioCtx.createBiquadFilter();
  band.type = "bandpass";
  band.frequency.value = freq;
  band.Q.value = q;
  return band;
}

function activarEfecto(id) {
  if (!audioBase) return;

  audioEfecto = new Audio(id === "5" ? AUDIO_ROTURA : AUDIO_BASE);
  audioEfecto.crossOrigin = "anonymous";

  // 🔑 sincronía
  audioEfecto.currentTime = audioBase.currentTime;

  sourceEfecto = audioCtx.createMediaElementSource(audioEfecto);
  let nodoFinal = sourceEfecto;

  if (id === "2") {
    nodoFinal = sourceEfecto.connect(crearPasaBanda(1500, 1));

  } else if (id === "3") {
    nodoFinal = sourceEfecto.connect(crearPasaBanda(1200, 6));

  } else if (id === "4") {
    nodoFinal = sourceEfecto.connect(crearBitCrusher(4));

  } else if (id === "5") {
    nodoFinal = sourceEfecto.connect(crearBitCrusher(4));
  }

  // 🔇 silenciar base
  audioBase.muted = true;

  nodoFinal.connect(audioCtx.destination);
  audioEfecto.play();
}

function desactivarEfecto() {
  if (audioEfecto) {
    audioEfecto.pause();
    audioEfecto = null;
  }

  if (audioBase) {
    audioBase.muted = false;
  }
}

document.querySelectorAll(".imagenBig").forEach(img => {
  const id = img.dataset.id;

  img.addEventListener("mousedown", () => {
    audioCtx.resume();
    iniciarAudioBase();
    activarEfecto(id);
  });

  img.addEventListener("mouseup", desactivarEfecto);
  img.addEventListener("mouseleave", desactivarEfecto);

  // móvil
  img.addEventListener("touchstart", e => {
    e.preventDefault();
    audioCtx.resume();
    iniciarAudioBase();
    activarEfecto(id);
  });

  img.addEventListener("touchend", desactivarEfecto);
});





















/*DIGITAL 3 */

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
  { img: "../Imagenes/digital/d2/mp3info1.png", audio: "../Audio/mp3/AlbertKaderUbiquous.opus" },
  { img: "../Imagenes/digital/d2/mp3info2.png", audio: "../Audio/mp3/DaimonbBrokenAgain.opus" },
  { img: "../Imagenes/digital/d2/mp3info3.png", audio: "../Audio/mp3/KangaroKingPascal.opus" },
  { img: "../Imagenes/digital/d2/mp3info4.png", audio: "../Audio/mp3/SpeaksoftlyBrokenman.opus" },
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

