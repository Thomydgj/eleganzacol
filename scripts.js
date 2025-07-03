
  let pasoActual = 0;
  const progreso = document.getElementById('progreso');
  const pasos = document.querySelectorAll('.paso');

    function mostrarPaso(index) {
    pasos.forEach((paso, i) => {
      paso.classList.toggle('activo', i === index);
    });
    actualizarBarraProgreso();
  }

    function actualizarBarraProgreso() {
    const porcentaje = ((pasoActual + 1) / pasos.length) * 100;
    if (progreso) {
      progreso.style.width = `${porcentaje}%`;
    }
  }

document.addEventListener('DOMContentLoaded', () => {

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

function reiniciarFormulario() {
  const formulario = document.getElementById('formulario');
  formulario.reset();

  pasoActual = 0;
  mostrarPaso(pasoActual);

  const progreso = document.getElementById('progreso');
  if (progreso) {
    progreso.style.width = `${((pasoActual + 1) / document.querySelectorAll('.paso').length) * 100}%`;
  }
}
