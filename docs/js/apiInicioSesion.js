document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = form.querySelector('button');
    const loginError = document.getElementById('login-error'); 
  
    if (loginError) {
      loginError.style.display = 'none'; 
    }
  
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value !== "" && !input.checkValidity()) {
          input.classList.add('invalid');
        } else {
          input.classList.remove('invalid');
        }
        submitButton.disabled = !form.checkValidity();
      });
    });
  
    form.addEventListener('submit', async function (e) {
      e.preventDefault(); 
      
      if (loginError) {
        loginError.style.display = 'none'; 
      }
  
      const email = emailInput.value;
      const password = passwordInput.value;
  
      try {
        const response = await fetch('https://el-regalito-back-cpcbafcrcyb8gsab.canadacentral-01.azurewebsites.net/api/Principal/Login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              correo: email,
              password: password
            })
          });
  
        const data = await response.text(); 
        console.log('Respuesta de la API:', data); 
  
        if (response.ok) {
          try {
            const result = JSON.parse(data);
            
            // Si se recibe un rol en lugar de un token
            if (result.rol) {
              localStorage.setItem('rol', result.rol); // Guardar el rol en localStorage
              console.log('Rol guardado:', result.rol);
  
              // Redirigir al index
              window.location.href = '../index.html';
            } else {
              console.error('No se encontró el token o rol en la respuesta.');
              if (loginError) {
                loginError.style.display = 'block';
                loginError.textContent = 'Error al iniciar sesión. Token o rol no recibido.';
              }
            }
          } catch (error) {
            console.error('Error al parsear la respuesta:', error);
            if (loginError) {
              loginError.style.display = 'block';
              loginError.textContent = 'Error inesperado. Inténtalo nuevamente.';
            }
          }
        } else {
          if (loginError) {
            loginError.style.display = 'block';
            loginError.textContent = 'Correo o contraseña incorrectos.';
          }
        }
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        if (loginError) {
          loginError.style.display = 'block';
          loginError.textContent = 'Error al iniciar sesión. Inténtalo más tarde.';
        }
      }
    });
  });
  