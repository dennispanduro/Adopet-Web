document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <footer>
      <div>
        <h4 class="titulo-footer">Adopet</h4>
        <p>Tu tienda confiable para productos y servicios dedicados al bienestar de las mascotas. Descubre alimentos, accesorios, cuidado y más. ¡Porque ellos merecen lo mejor!</p>
      </div>
      <div>
        <h4 class="titulo-footer">Servicios</h4>
        <ul>
          <li>Venta de productos</li>
          <li>Servicios de cuidado</li>
          <li>Consultas veterinarias</li>
          <li>Blog y consejos</li>
        </ul>
      </div>
      <div>
        <h4 class="titulo-footer">Páginas</h4>
        <ul>
          <li>Productos</li>
          <li>Servicios</li>
          <li>Adopciones</li>
          <li>Misión</li>
          <li>Visión</li>
        </ul>
      </div>
      <div>
        <h4 class="titulo-footer">Contáctenos</h4>
        <ul>
          <li>contacto@empresa.com</li>
          <li>Av. Principal 123, Lima, Perú</li>
          <li>+51 987 654 321</li>
        </ul>
      </div>
    </footer>
  `;

  document.getElementById("footer-container").innerHTML = footerHTML;
});
