// Función para mostrar la pantalla emergente (modal)
function mostrarConfirmacion() {
    const modal = document.getElementById('confirmacionCompra');
    modal.style.display = 'block';
  }
  
  // Función para cerrar la pantalla emergente
  function cerrarConfirmacion() {
    const modal = document.getElementById('confirmacionCompra');
    modal.style.display = 'none';
  }
  
  // Función para redirigir a la página de entrega
  function continuarCompra() {
    const modal = document.getElementById('confirmacionCompra');
    modal.style.animation = 'fadeOut 0.5s ease'; // Agregar animación de salida
    setTimeout(function() {
      window.location.href = '/html/entregas.html'; // Redirige a la página de entrega
    }, 500); // Espera el tiempo de la animación antes de redirigir
  }
  