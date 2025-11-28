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
        img3.src = "../Imagenes/acustico/d2/Caja.png";

        audioCerrar.currentTime = 0;
        audioCerrar.play();

        audioAbrir.pause();
        audioAbrir.currentTime = 0;

        img3.dataset.open = "false";
    } 
    else {
        // ABRIR
        img3.src = "../Imagenes/acustico/d2/CajaAbierta.png";

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

