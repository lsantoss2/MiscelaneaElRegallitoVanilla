// URL de la API de productos activos
const apiUrl = 'https://el-regalito-back-cpcbafcrcyb8gsab.canadacentral-01.azurewebsites.net/api/Producto/activos';

// Función para cargar los productos activos
async function cargarProductosActivos() {
    try {
        // Realizamos la petición a la API
        const response = await fetch(apiUrl);
        const productos = await response.json();

        // Seleccionamos el contenedor donde vamos a mostrar los productos
        const productosDiv = document.getElementById('productos-activos');

        // Limpiamos el contenido inicial de "Cargando productos..."
        productosDiv.innerHTML = '';

        // Recorremos los productos activos y los agregamos al DOM
        productos.forEach(producto => {
            // Creamos un elemento para cada producto utilizando los campos que muestra la API
            const productoHTML = `
                <div class="producto" onclick="mostrarModal('${producto.imagen}', '${producto.nombre}', '${producto.descripcion}', ${producto.precio_final})">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <p class="descripcion">${producto.descripcion}</p>
                    <p class="precio">Q${producto.precio_final}</p>
                </div>
            `;

            // Añadimos el producto al contenedor
            productosDiv.innerHTML += productoHTML;
        });
    } catch (error) {
        console.error('Error al cargar los productos activos:', error);
    }
}

// Función para mostrar el modal con la información del producto
function mostrarModal(imagen, nombre, descripcion, precio) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-image').src = imagen;
    document.getElementById('modal-title').textContent = nombre;
    document.getElementById('modal-description').textContent = descripcion;
    document.getElementById('modal-price').textContent = `Precio: Q${precio}`;
    modal.style.display = "block";
}

// Función para cerrar el modal
document.querySelector('.modal .close').onclick = function() {
    document.getElementById('modal').style.display = "none";
};

// Cierra el modal cuando se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Llamamos a la función para cargar los productos activos cuando se cargue la página
cargarProductosActivos();
