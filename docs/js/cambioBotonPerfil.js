document.addEventListener('DOMContentLoaded', function () {
  const rol = localStorage.getItem('rol'); // Usamos "rol" en lugar de "token"
  const userSection = document.getElementById('user-section');

  // Define la ruta base dependiendo de la ubicación del script
  const basePath = window.location.pathname.includes('docs/html/') ? '../' : './';

  if (userSection) {
    if (rol) {
      console.log('Mostrando texto de perfil');
      userSection.innerHTML = `
        <a href="${basePath}html/perfil.html" class="nav-link">Perfil</a>
      `;
    } else {
      console.log('Mostrando enlace de iniciar sesión');
      userSection.innerHTML = `
        <a href="${basePath}html/login.html" id="login-link" class="nav-link">Iniciar Sesión</a>
      `;
    }
  } else {
    console.error('El elemento user-section no existe en el DOM');
  }
});
