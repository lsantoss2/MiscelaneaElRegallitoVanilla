// Función para cargar los detalles del producto
async function cargarDetallesProducto() {
    // Obtenemos el ID del producto almacenado en localStorage
    const idProducto = localStorage.getItem('selectedProduct');
    if (!idProducto) {
        console.error('No se ha seleccionado ningún producto.');
        return;
    }

    try {
        // Realizamos la petición a la API para obtener los detalles del producto
        const response = await fetch(`https://el-regalito-back-cpcbafcrcyb8gsab.canadacentral-01.azurewebsites.net/api/Producto/${idProducto}/detalle`);
        const detalleProducto = await response.json();

        // Seleccionamos el contenedor donde vamos a mostrar los detalles
        const detallesDiv = document.getElementById('detalles-producto');

        // Creamos el HTML para los detalles del producto
        const detallesHTML = `
            <div class="container">
                <div class="producto-detalle">
                    <img src="${detalleProducto.imagen}" alt="${detalleProducto.nombre}">
                    <div class="producto-info">
                        <h2>${detalleProducto.nombre}</h2>
                        <p class="categoria">Categoría: ${detalleProducto.categoria}</p>
                        <p class="descripcion">${detalleProducto.descripcion}</p>
                        <p class="precio">Precio: Q${detalleProducto.precio_final ? detalleProducto.precio_final : detalleProducto.precio_oferta}</p>
                        <button onclick="agregarAlCarrito(${detalleProducto.id_producto})">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;

        // Añadimos el contenido al contenedor
        detallesDiv.innerHTML = detallesHTML;
    } catch (error) {
        console.error('Error al cargar los detalles del producto:', error);
    }
}

// Función para agregar el producto al carrito
function agregarAlCarrito(idProducto) {
    // Realizamos la petición a la API para obtener los detalles del producto
    fetch(`https://el-regalito-back-cpcbafcrcyb8gsab.canadacentral-01.azurewebsites.net/api/Producto/${idProducto}/detalle`)
        .then(response => response.json())
        .then(producto => {
            // Revisamos si el carrito ya existe en localStorage
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Revisamos si el producto ya está en el carrito
            const productoExistente = carrito.find(item => item.id_producto === producto.id_producto);

            if (productoExistente) {
                // Si el producto ya está en el carrito, aumentamos la cantidad
                productoExistente.cantidad += 1;
            } else {
                // Si no está en el carrito, lo añadimos con cantidad 1
                producto.cantidad = 1;
                carrito.push(producto);
            }

            // Guardamos el carrito actualizado en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Mostramos un mensaje de éxito (opcional)
            alert('Producto agregado al carrito');
        })
        .catch(error => {
            console.error('Error al agregar el producto al carrito:', error);
        });
}

// Llamamos a la función para cargar los detalles cuando se cargue la página
cargarDetallesProducto();
