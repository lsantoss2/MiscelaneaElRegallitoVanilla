document.addEventListener('DOMContentLoaded', function () {
  const rol = localStorage.getItem('rol'); // Obtenemos el rol almacenado en localStorage
  const userSection = document.getElementById('user-section');

  // Define la ruta base dependiendo de la ubicación del script
  const basePath = window.location.pathname.includes('docs/html/') ? '../' : './';

  if (userSection) {
    if (rol === 'Administrador') {
      console.log('Mostrando enlace de Panel de Control');
      userSection.innerHTML = `
        <a href="${basePath}html/panelControl.html" class="nav-link">Panel de Control</a>
      `;
    } else if (rol === 'Cliente') {
      console.log('Mostrando enlace de Perfil');
      userSection.innerHTML = `
        <a href="${basePath}html/perfil.html" class="nav-link">Perfil</a>
      `;
    } else {
      console.log('Mostrando enlace de Iniciar Sesión');
      userSection.innerHTML = `
        <a href="${basePath}html/login.html" id="login-link" class="nav-link">Iniciar Sesión</a>
      `;
    }
  } else {
    console.error('El elemento user-section no existe en el DOM');
  }
});
