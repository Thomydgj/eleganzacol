document.getElementById('formulario').addEventListener('submit', async (e) => {

  const formData = new FormData(e.target);

  fetch('https://script.google.com/macros/s/AKfycby32ntqQnotOcZnvKNjCXAC5k84leLPqh49ZqDDubX2TFxPlUC8Ic2O4e2X9Hl3Lgz9/exec', {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  });

  alert('✅ ¡Datos enviados con éxito!');
  reiniciarFormulario(); // 👈 Limpia el formulario para el siguiente usuario
});
