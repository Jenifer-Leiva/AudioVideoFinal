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
document.querySelectorAll('.epocas-list button').forEach(btn => {
  btn.addEventListener('click', () => {
    const ep = btn.dataset.epoca;
    let texto = '';

    if (ep === "acustica") {
      texto = "<strong>Época acústica:</strong> Grabación mecánica sin micrófonos.";
    } else if (ep === "electrica") {
      texto = "<strong>Época eléctrica:</strong> Uso de micrófonos y amplificación.";
    } else if (ep === "tape") {
      texto = "<strong>Era del tape:</strong> Cintas magnéticas y grabación analógica.";
    } else if (ep === "digital") {
      texto = "<strong>Era digital:</strong> DAWs, CDs y formatos digitales.";
    }

    epocaDetalle.innerHTML = texto;
    closePanel();
  });
});

