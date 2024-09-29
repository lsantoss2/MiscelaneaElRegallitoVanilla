// Función para registrar al usuario con la API
async function registerUser() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
  
    // Estado y rol por defecto
    const estado = 0;
    const id_rol = 2;
  
    try {
      // Hacer la solicitud POST a la API de registro
      const response = await fetch('https://el-regalito-back-cpcbafcrcyb8gsab.canadacentral-01.azurewebsites.net/api/Principal/Registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          password: passwordValue,
          correo: email,
          estado: estado,
          id_rol: id_rol
        })
      });
  
      // Imprimir la respuesta como texto para verificar qué está devolviendo el servidor
      const textResponse = await response.text();
      console.log('Respuesta completa:', textResponse);
  
      if (response.ok) {
        // Mostrar mensaje de éxito
        showModal('Registro exitoso. ¡Bienvenido!');
        setTimeout(() => {
          window.location.href = '/html/login.html'; // Redirigir al login
        }, 3000);
      } else {
        // Mostrar mensaje de error si la solicitud no fue exitosa
        showModal('Error en el registro: ' + (textResponse || 'Inténtalo nuevamente'));
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      // Mostrar mensaje de error si hubo un problema en la solicitud
      showModal('Ocurrió un error en el registro. Inténtalo de nuevo más tarde.');
    }
  }
  
  // Modal para mostrar mensajes
  const modal = document.getElementById('myModal');
  const modalMessage = document.getElementById('modal-message');
  const closeModal = document.getElementsByClassName('close')[0];
  
  // Mostrar el modal con un mensaje
  function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block';
  }
  
  // Cerrar el modal cuando se hace clic en la "X"
  closeModal.onclick = function () {
    modal.style.display = 'none';
  }
  
  // Cerrar el modal cuando el usuario hace clic fuera del modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  