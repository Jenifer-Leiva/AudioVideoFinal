/* Iconos de la pestaña magnet 2*/
document.querySelectorAll(".icono").forEach(icono => {
    icono.addEventListener("click", () => {
      document
        .getElementById(icono.dataset.popup)
        .classList.add("activo");
    });
  });

  document.querySelectorAll(".popup").forEach(popup => {
    popup.addEventListener("click", () => {
      popup.classList.remove("activo");
    });
  });
