// URL base de la API de productos
const apiUrl = 'https://el-regalito-back-cpcbafcrcyb8gsab.canadacentral-01.azurewebsites.net/api/Producto';

// Función para cargar los detalles del producto seleccionado
async function cargarDetallesProducto() {
    // Obtenemos el ID del producto almacenado en localStorage
    const idProducto = localStorage.getItem('selectedProduct');
    if (!idProducto) {
        console.error('No se ha seleccionado ningún producto.');
        return;
    }

    try {
        // Realizamos la petición a la API para obtener los detalles del producto
        const response = await fetch(`${apiUrl}/${id_producto}`);
        const producto = await response.json();

        // Seleccionamos el contenedor donde vamos a mostrar los detalles
        const detallesDiv = document.getElementById('detalles-producto');

        // Creamos el HTML para los detalles del producto
        const detallesHTML = `
            <div class="producto-detalle">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p><strong>Descripción:</strong> ${producto.descripcion}</p>
                <p><strong>Precio Base:</strong> Q${producto.precio_base}</p>
                <p><strong>Precio Final:</strong> Q${producto.precio_final}</p>
                <p><strong>Categoría:</strong> ${producto.id_categoria}</p>
                <p><strong>Estado:</strong> ${producto.estado}</p>
                <button onclick="agregarAlCarrito(${producto.id_producto})">Agregar al Carrito</button>
            </div>
        `;

        // Añadimos el contenido al contenedor
        detallesDiv.innerHTML = detallesHTML;
    } catch (error) {
        console.error('Error al cargar los detalles del producto:', error);
    }
}

// Llamamos a la función para cargar los detalles cuando se cargue la página
cargarDetallesProducto();
