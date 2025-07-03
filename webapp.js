
document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const response = await fetch('https://script.google.com/macros/s/AKfycby32ntqQnotOcZnvKNjCXAC5k84leLPqh49ZqDDubX2TFxPlUC8Ic2O4e2X9Hl3Lgz9/exec', {
    method: 'POST',
    body: formData
  });

  if (response.ok) {
    alert('✅ ¡Datos enviados a Google Sheets!');
    form.reset();
  } else {
    alert('❌ Error al enviar los datos.');
  }
});

