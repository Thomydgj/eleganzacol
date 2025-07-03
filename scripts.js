document.addEventListener('DOMContentLoaded', () => {
  const pasos = document.querySelectorAll('.paso');
  const progreso = document.getElementById('progreso');
  let pasoActual = 0;

  function mostrarPaso(index) {
    pasos.forEach((paso, i) => {
      paso.classList.toggle('activo', i === index);
    });
    actualizarBarraProgreso();
  }

  function validarPasoActual() {
    const inputs = pasos[pasoActual].querySelectorAll('input, select, textarea');
    for (let input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    return true;
  }

  function actualizarBarraProgreso() {
    const porcentaje = ((pasoActual + 1) / pasos.length) * 100;
    if (progreso) {
      progreso.style.width = `${porcentaje}%`;
    }
  }

  document.querySelectorAll('.siguiente').forEach(btn => {
    btn.addEventListener('click', () => {
      if (validarPasoActual() && pasoActual < pasos.length - 1) {
        pasoActual++;
        mostrarPaso(pasoActual);
      }
    });
  });

  document.querySelectorAll('.anterior').forEach(btn => {
    btn.addEventListener('click', () => {
      if (pasoActual > 0) {
        pasoActual--;
        mostrarPaso(pasoActual);
      }
    });
  });

  mostrarPaso(pasoActual);
});