// Función para manejar el envío del formulario y añadir dirección
document.getElementById('add-address-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores del formulario
    const recipientName = document.getElementById('recipient-name').value;
    const recipientLastname = document.getElementById('recipient-lastname').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const exactAddress = document.getElementById('exact-address').value;
    const references = document.getElementById('references').value;

    // Crear un nuevo elemento de lista para la dirección
    const addressItem = document.createElement('li');
    addressItem.innerHTML = `
        <strong>${recipientName} ${recipientLastname}</strong><br>
        Teléfono: ${phoneNumber}<br>
        Dirección: ${exactAddress}<br>
        ${references ? `Referencias: ${references}` : ''}
    `;

    // Añadir la dirección a la lista
    document.getElementById('addresses').appendChild(addressItem);

    // Limpiar el formulario
    document.getElementById('add-address-form').reset();

    // Ocultar mensaje si hay direcciones
    const noDirectionsMessage = document.getElementById('no-directions-message');
    if (noDirectionsMessage) {
        noDirectionsMessage.style.display = 'none';
    }
});
