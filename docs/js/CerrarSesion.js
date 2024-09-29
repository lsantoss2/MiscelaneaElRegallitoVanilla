document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-btn');
    const userRole = localStorage.getItem('rol'); // Obtén el rol del usuario guardado
  
    // Mostrar el rol del usuario en el perfil
    const userRoleElement = document.getElementById('user-role');
    if (userRole) {
      userRoleElement.textContent = userRole;
    } else {
      userRoleElement.textContent = 'Invitado';
    }
  
    // Función para cerrar sesión
    logoutButton.addEventListener('click', function() {
      // Eliminar el rol y cualquier otro dato que hayas guardado en localStorage
      localStorage.removeItem('rol');
      localStorage.removeItem('token');
      
      // Redirigir al usuario a la página de inicio o de login
      window.location.href = '../index.html';
    });
  });
  