let audioActual = null;

/* Abrir popup y reproducir audio */
document.querySelectorAll(".icono").forEach(icono => {
  icono.addEventListener("click", () => {

    // Cerrar cualquier popup abierto
    document.querySelectorAll(".popup").forEach(p => p.classList.remove("activo"));

    // Detener audio anterior
    if (audioActual) {
      audioActual.pause();
      audioActual.currentTime = 0;
    }

    // Abrir popup
    const popup = document.getElementById(icono.dataset.popup);
    popup.classList.add("activo");

    // Reproducir audio
    audioActual = new Audio(icono.dataset.audio);
    audioActual.play();
  });
});

/* Cerrar popup y detener audio */
document.querySelectorAll(".popup").forEach(popup => {
  popup.addEventListener("click", () => {
    popup.classList.remove("activo");

    if (audioActual) {
      audioActual.pause();
      audioActual.currentTime = 0;
    }
  });
});


  /* Imagenes de magnet 3 */

  const imgBig4 = document.getElementById("imgBig4");
  const imgBig5 = document.getElementById("imgBig5");
  const btnDer  = document.getElementById("btnDer");
  const btnIzq  = document.getElementById("btnIzq");

  const estados = [
    {
      img4: "../Imagenes/magnetico/d2/philipsback.png",
      img5: "../Imagenes/magnetico/d2/philiptxt.png"
    },
    {
      img4: "../Imagenes/magnetico/d2/casetteback.png",
      img5: "../Imagenes/magnetico/d2/cassettetxt.png"
    },
    {
      img4: "../Imagenes/magnetico/d2/diskback.png",
      img5: "../Imagenes/magnetico/d2/disktxt.png"
    }
  ];

  let indice = 0;

  btnDer.addEventListener("click", () => {
    indice = (indice + 1) % estados.length;
    cambiarImagenes();
  });

  btnIzq.addEventListener("click", () => {
    indice = (indice - 1 + estados.length) % estados.length;
    cambiarImagenes();
  });

  function cambiarImagenes() {
    imgBig4.src = estados[indice].img4;
    imgBig5.src = estados[indice].img5;

    imgBig5.style.animation = "none";
  imgBig5.offsetHeight; // fuerza reflow
  imgBig5.style.animation = "fadeIn 5s forwards";
  }
