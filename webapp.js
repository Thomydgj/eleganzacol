document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Envío sin esperar respuesta (modo sin CORS)
  fetch('https://script.google.com/macros/s/AKfycby32ntqQnotOcZnvKNjCXAC5k84leLPqh49ZqDDubX2TFxPlUC8Ic2O4e2X9Hl3Lgz9/exec', {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  });

  // Muestra confirmación sin verificar respuesta (porque no se puede)
  alert('✅ ¡Tus datos fueron enviados con éxito!');
  reiniciarFormulario();
});
