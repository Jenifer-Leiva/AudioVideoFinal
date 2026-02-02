/*acustico2*/

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video-fondo");
  if (!video) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.src = video.dataset.src;
        video.load();
        video.play().catch(() => {});
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.4
  });

  observer.observe(video);
});



window.addEventListener("beforeunload", () => {
  const video = document.querySelector(".video-fondo");
  if (video) {
    video.pause();
    video.removeAttribute("src");
    video.load();
  }
});




///////////////////////////////////////////////////////////////

const lazyImages = document.querySelectorAll("img[data-src]");

const imgObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      imgObserver.unobserve(img);
    }
  });
}, {
  threshold: 0.2
});

lazyImages.forEach(img => imgObserver.observe(img));


/* Evitar error si no existe video en esta página */
const video = document.getElementById("miVideo");
const imagen = document.getElementById("imagenFinal");

if (video) {
    video.addEventListener("ended", () => {
        video.style.display = "none";
        if (imagen) imagen.style.display = "block";
    });
}

/* MAIN3 – este código ahora sí se ejecuta */
const img3 = document.getElementById("img3");

const audioAbrir = document.getElementById("audioAbrir");
const audioCerrar = document.getElementById("audioCerrar");

img3.dataset.open = "false";
img3.addEventListener("click", () => {

  

    if (img3.dataset.open === "true") {
        // CERRAR
        img3.src = "../Imagenes/acustico/d2/Caja.webp";

        audioCerrar.currentTime = 0;
        audioCerrar.play();

        audioAbrir.pause();
        audioAbrir.currentTime = 0;

        img3.dataset.open = "false";
    } 
    else {
        // ABRIR
        img3.src = "../Imagenes/acustico/d2/CajaAbierta.webp";

        audioAbrir.currentTime = 0;
        audioAbrir.play();

        img3.dataset.open = "true";
    }
});






const img4 = document.getElementById("img4");
const popup = document.getElementById("popupFono");
const popupImg = document.getElementById("popupFonoImg");

// Audios
const audioFono = document.getElementById("audioFono");

// ABRIR
img4.addEventListener("click", () => {
    popup.style.display = "block";

    audioFono.currentTime = 0;
    audioFono.play();
});

// CERRAR
popup.addEventListener("click", () => {
    popup.style.display = "none";

    audioFono.pause();
    audioFono.currentTime = 0;

});




const img2 = document.getElementById("img2");
const popup2 = document.getElementById("popupFono2");
const popupImg2 = document.getElementById("popupFonoImg2");

// ABRIR
img2.addEventListener("click", () => {
    popup2.style.display = "block";
});

// CERRAR
popup2.addEventListener("click", () => {
    popup2.style.display = "none";
});