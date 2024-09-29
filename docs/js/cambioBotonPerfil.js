document.addEventListener('DOMContentLoaded', function () {
    const rol = localStorage.getItem('rol'); // Usamos "rol" en lugar de "token"
    const userSection = document.getElementById('user-section');
  
    if (userSection) {
      if (rol) {
        console.log('Mostrando imagen de perfil');
        userSection.innerHTML = `
          <a href="../html/perfil.html">
            <img src="/img/profile.png" alt="Perfil" style="width: 50px; height: 50px; border-radius: 50%;">
          </a>
        `;
      } else {
        console.log('Mostrando botón de iniciar sesión');
        userSection.innerHTML = `
          <a href="../html/login.html" class="nav-button highlight">Iniciar Sesión</a>
        `;
      }
    } else {
      console.error('El elemento user-section no existe en el DOM');
    }
  });
  