document.addEventListener('DOMContentLoaded', function () {
    const adminIcon = document.getElementById('admin-icon');
    const panelTitle = document.querySelector('.right-panel h2'); // Selecciona el título del panel

    if (adminIcon) {
        adminIcon.addEventListener('click', function () {
            // Cambia el título del panel a "Administrador"
            if (panelTitle.textContent === 'Iniciar Sesión') {
                panelTitle.textContent = 'Administrador';
            } else {
                panelTitle.textContent = 'Iniciar Sesión';
            }
        });
    }
});
