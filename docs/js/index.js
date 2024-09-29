// Obtener elementos del DOM
const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');

// Mostrar el modal cuando se haga clic en el botón de login
loginBtn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal cuando se haga clic en la 'X'
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de la ventana del modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
