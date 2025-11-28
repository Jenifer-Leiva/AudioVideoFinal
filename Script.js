const tabBtn = document.getElementById('tabBtn');
const panel = document.getElementById('epocasPanel');
const epocaDetalle = document.getElementById('epocaDetalle');

// Abrir / cerrar el panel
function closePanel() {
  panel.classList.remove('show');
}
function openPanel() {
  panel.classList.add('show');
}

tabBtn.addEventListener('click', () => {
  if (panel.classList.contains('show')) closePanel();
  else openPanel();
});

// Cerrar si se hace clic afuera
document.addEventListener('click', (e) => {
  if (!panel.contains(e.target) && !tabBtn.contains(e.target)) {
    closePanel();
  }
});

// Contenido de las épocas
// Contenido de las épocas
document.querySelectorAll('.epocas-list button').forEach(btn => {
  btn.addEventListener('click', () => {
    const ep = btn.dataset.epoca;

    if (ep === "acustica") {
      window.location.href = "../Acustico/acustico1.html";  
    }
    else if (ep === "electrica") {
      window.location.href = "../Electrico/electrico1.html"; 
    }
    else if (ep === "tape") {
      window.location.href = "tape1.html"; 
    }
    else if (ep === "digital") {
      window.location.href = "digital1.html"; 
    }
  });
});


