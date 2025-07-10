const contenedorProductos = document.querySelector(".productos");

function renderProducto(producto) {
  const card = `
    <div class="card-productos">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <p>${producto.nombre}</p>
      <button class="btn-comprar">${producto.botonTexto}</button>
    </div>
  `;
  contenedorProductos.innerHTML += card;
}

function mostrarCategoria(categoria) {
  contenedorProductos.innerHTML = "";

  for (const producto of productos) {
    if (categoria === "todos" || producto.categoria === categoria) {
      renderProducto(producto);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarCategoria("todos");
});


//----- Categorias -----//

function mostrarCategoria(categoria) {
  contenedorProductos.innerHTML = "";

  for (const producto of productos) {
    if (categoria === "todos" || producto.categoria === categoria) {
      renderProducto(producto);
    }
  }
}