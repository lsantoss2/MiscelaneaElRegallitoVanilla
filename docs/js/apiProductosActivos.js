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
                <div class="producto" onclick="verDetalles(${producto.id_producto})">
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

function verDetalles(producto) {
    // Guardamos el ID del producto en localStorage
    localStorage.setItem('selectedProduct', producto.id_producto);
    // Redirigimos a la página de detalles del producto
    window.location.href = './html/detalles-producto.html';
}


// Llamamos a la función para cargar los productos activos cuando se cargue la página
cargarProductosActivos();
