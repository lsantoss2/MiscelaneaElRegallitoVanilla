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
                <div class="producto">
                    <h2>${producto.nombre}</h2>
                    <p><strong>ID Producto:</strong> ${producto.id_producto}</p>
                    <p><strong>ID Proveedor:</strong> ${producto.id_proveedor}</p>
                    <p><strong>Categoría:</strong> ${producto.id_categoria}</p>
                    <p><strong>Código de Barras:</strong> ${producto.codigo_barra}</p>
                    <p class="precio"><strong>Precio Base:</strong> $${producto.precio_base}</p>
                    <p class="precio"><strong>Precio Final:</strong> $${producto.precio_final}</p>
                    <p>${producto.descripcion}</p>
                    <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
                    <p><strong>Fecha de Creación:</strong> ${new Date(producto.fecha_creacion).toLocaleDateString()}</p>
                    <p><strong>Estado:</strong> ${producto.estado}</p>
                    <button class="agregar-carrito">Añadir al Carrito</button>
                </div>
            `;

            // Añadimos el producto al contenedor
            productosDiv.innerHTML += productoHTML;
        });
    } catch (error) {
        console.error('Error al cargar los productos activos:', error);
    }
}

// Llamamos a la función para cargar los productos activos cuando se cargue la página
cargarProductosActivos();

