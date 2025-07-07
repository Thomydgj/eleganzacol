document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch('https://script.google.com/macros/s/AKfycby32ntqQnotOcZnvKNjCXAC5k84leLPqh49ZqDDubX2TFxPlUC8Ic2O4e2X9Hl3Lgz9/exec', {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  });

  // Desplaza la vista al tope
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Muestra la imagen después de desplazarse
  setTimeout(() => {
    document.getElementById('oferta').style.display = 'block';
    document.querySelector('.whatsapp-btn').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evitar scroll al mostrar la imagen
  }, 300); // espera breve para que el scroll se complete visualmente
 
  document.querySelectorAll('.hero-image,.colaboracion').forEach(element => {
    element.style.opacity = '0.3';
  });

  // Reiniciar el formulario después de enviar
  reiniciarFormulario();

  // Esperar un poco antes de permitir el cierre al hacer clic fuera
  setTimeout(() => {
    document.addEventListener('click', cerrarAlClickFuera);
  }, 50);
});


// Función para reiniciar el formulario
function reiniciarFormulario() {
  document.getElementById('formulario').reset();
 }

// Función para cerrar la imagen al hacer clic fuera de ella
function cerrarAlClickFuera(e) {
  const imagen = document.getElementById('oferta');
  const whatsappBtn = document.querySelector('.whatsapp-btn');

  // Si se hace clic fuera de la imagen
  if (!imagen.contains(e.target)) {
    imagen.style.display = 'none';
    whatsappBtn.style.display = 'none';
    document.removeEventListener('click', cerrarAlClickFuera);
    document.body.style.overflow = 'auto'; // Restaurar scroll
    document.querySelectorAll('.hero-image,.colaboracion').forEach(element => {
      element.style.opacity = '1';
    });

  }
}