const btnAgua = document.getElementById("btnAgua");
const gifAgua = document.getElementById("gifAgua");
const audioEfecto = document.getElementById("audioEfecto");

if (btnAgua && gifAgua && audioEfecto) {
  btnAgua.addEventListener("mousedown", () => {
      gifAgua.style.display = "block";
      audioEfecto.currentTime = 0;
      audioEfecto.play();
  });

  btnAgua.addEventListener("mouseup", () => {
      gifAgua.style.display = "none";
      audioEfecto.pause();
      audioEfecto.currentTime = 0;
  });

  btnAgua.addEventListener("mouseleave", () => {
      gifAgua.style.display = "none";
      audioEfecto.pause();
      audioEfecto.currentTime = 0;
  });
}



/*MULTIPISTA */
// Obtener pistas
const pistas = {
  2: document.getElementById('pista2'),
  3: document.getElementById('pista3'),
  4: document.getElementById('pista4'),
  5: document.getElementById('pista5')
};

// Iniciar todas las pistas y silenciarlas para sincronización
Object.values(pistas).forEach(pista => {
  pista.loop = true;       // asegurar loop
  pista.muted = true;      // silencio al inicio
  pista.play().catch(err => console.log("Error play:", err));
});

// Obtener imágenes
const imagenes = document.querySelectorAll('.imagenSala[data-id]');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    const id = parseInt(img.dataset.id);
    const pista = pistas[id];
    if (!pista) return;

    // Alternar mute sin detener la pista
    pista.muted = !pista.muted;

    // Feedback visual
    img.style.opacity = pista.muted ? 0.6 : 1;
  });
});



