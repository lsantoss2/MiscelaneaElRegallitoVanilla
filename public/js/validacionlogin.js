const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const button = form.querySelector('button');

// Agregar validación después de que el usuario haya dejado el campo (blur)
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    // Si el campo no es válido y se ha salido del campo, se muestra el mensaje de error
    if (input.value !== "" && !input.checkValidity()) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }

    // Verificar si todo el formulario es válido para habilitar el botón
    const isValid = form.checkValidity();
    button.disabled = !isValid;
  });
});
