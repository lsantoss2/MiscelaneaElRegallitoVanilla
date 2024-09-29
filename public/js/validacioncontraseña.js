document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const inputs = form.querySelectorAll('input');
  const password = form.querySelector('#password');
  const confirmPassword = form.querySelector('#confirm-password');
  const errorMessage = document.getElementById('error-message');
  const submitButton = form.querySelector('button');

  // Validación para cada campo al perder el foco (blur)
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.value !== "" && !input.checkValidity()) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
      validateForm();
    });
  });

  // Validación para confirmar que las contraseñas coinciden
  confirmPassword.addEventListener('blur', () => {
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.add('invalid');
      errorMessage.style.display = 'block';
    } else {
      confirmPassword.classList.remove('invalid');
      errorMessage.style.display = 'none';
    }
    validateForm();
  });

  // Verificar si el formulario es válido y las contraseñas coinciden
  function validateForm() {
    const isValid = form.checkValidity() && (password.value === confirmPassword.value);
    submitButton.disabled = !isValid;
  }

  // Manejar el envío del formulario
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí llamamos a la función para conectar con la API
    registerUser();
  });
});
