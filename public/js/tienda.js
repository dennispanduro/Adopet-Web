// tienda.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5iDQEvKR2YZ_03dqbko8haPzhcPzMLM0",
  authDomain: "lenguajes-2.firebaseapp.com",
  projectId: "lenguajes-2",
  storageBucket: "lenguajes-2.firebasestorage.app",
  messagingSenderId: "748298593466",
  appId: "1:748298593466:web:e9c323d19a50386f214e83"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosRef = collection(db, "productos");



// Contenedor donde se muestran los productos
const contenedorProductos = document.querySelector(".productos");

// Función para mostrar un producto en pantalla
function renderProducto(producto) {
  const card = `
    <div class="card-productos">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <p>${producto.nombre}</p>
      <button class="btn-comprar"
        data-nombre="${producto.nombre}"
        data-categoria="${producto.categoria}"
        data-imagen="${producto.imagen}">
        ${producto.botonTexto}
      </button>
    </div>
  `;
  contenedorProductos.innerHTML += card;
}

// Mostrar productos por categoría
window.mostrarCategoria = function (categoria) {
  contenedorProductos.innerHTML = "";
  for (const producto of productos) {
    if (categoria === "todos" || producto.categoria === categoria) {
      renderProducto(producto);
    }
  }
};

// Evento para registrar compra al hacer clic en "COMPRAR"
contenedorProductos.addEventListener("click", async (e) => {
  if (e.target.classList.contains("btn-comprar")) {
    const nombre = e.target.dataset.nombre;
    const categoria = e.target.dataset.categoria;
    const imagen = e.target.dataset.imagen;

    try {
      await addDoc(productosRef, { nombre, categoria, imagen });
      alert("✅ Compra registrada exitosamente.");
    } catch (error) {
      console.error("❌ Error al registrar:", error);
      alert("Hubo un error al registrar la compra.");
    }
  }
});

// Al cargar la tienda, mostrar todos los productos
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