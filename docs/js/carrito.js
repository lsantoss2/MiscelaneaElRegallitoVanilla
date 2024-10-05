// Función para cargar los productos del carrito
function cargarCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const carritoDiv = document.querySelector('.cart-container');
  let total = 0;

  if (carrito.length === 0) {
    carritoDiv.innerHTML = '<p>Tu carrito está vacío</p>';
    return;
  }

  carritoDiv.innerHTML = carrito.map(producto => {
    total += producto.precio_final * producto.cantidad;
    return `
      <div class="cart-item">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="cart-item-image">
        <div class="cart-item-info">
          <h3>${producto.nombre}</h3>
          <p>Cantidad: ${producto.cantidad}</p>
          <p>Precio: Q${producto.precio_final}</p>
        </div>
        <div class="cart-item-actions">
          <button class="cart-btn" onclick="actualizarCantidad(${producto.id_producto}, -1)">-</button>
          <span>${producto.cantidad}</span>
          <button class="cart-btn" onclick="actualizarCantidad(${producto.id_producto}, 1)">+</button>
          <p class="cart-item-price">Q${(producto.precio_final * producto.cantidad).toFixed(2)}</p>
        </div>
      </div>
    `;
  }).join('');

  carritoDiv.innerHTML += `
    <div class="cart-total">
      <p><strong>Total:</strong> Q${total.toFixed(2)}</p>
      <button class="finalizar-btn" onclick="mostrarConfirmacion()">Finalizar compra</button>
    </div>
  `;
}

// Función para actualizar la cantidad de un producto en el carrito
function actualizarCantidad(idProducto, cantidad) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const producto = carrito.find(item => item.id_producto === idProducto);

  if (producto) {
    producto.cantidad += cantidad;

    if (producto.cantidad <= 0) {
      carrito = carrito.filter(item => item.id_producto !== idProducto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
  }
}

// Función para mostrar la pantalla emergente (modal) de confirmación
function mostrarConfirmacion() {
  const modal = document.getElementById('confirmacionCompra');
  modal.style.display = 'block';
}

// Función para cerrar la pantalla emergente
function cerrarConfirmacion() {
  const modal = document.getElementById('confirmacionCompra');
  modal.style.display = 'none';
}

// Función para redirigir a la página de entrega y finalizar la compra
function continuarCompra() {
  const modal = document.getElementById('confirmacionCompra');
  modal.style.animation = 'fadeOut 0.5s ease'; // Agregar animación de salida
  setTimeout(function () {
    localStorage.removeItem('carrito'); // Limpiar el carrito después de la compra
    window.location.href = '../html/entregas.html'; // Redirige a la página de entrega
  }, 500); // Espera el tiempo de la animación antes de redirigir
}

// Función para finalizar la compra
function finalizarCompra() {
  mostrarConfirmacion();
}

// Llamar a la función para cargar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarCarrito);
