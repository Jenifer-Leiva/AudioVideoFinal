
  const video = document.getElementById("miVideo");
  const imagen = document.getElementById("imagenFinal");

  video.addEventListener("ended", () => {
    video.style.display = "none";
imagen.style.display = "block";

  });

  
