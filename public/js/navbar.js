const navbarHTML = `
<nav>
  <a class="adopet" href="index.html">Adopet</a>
  <input type="checkbox" id="menu-toggle" class="menu-toggle" hidden>
  <label for="menu-toggle" class="hamburguesa">&#9776;</label>
  <div class="nav">
    <ul>
      <li><a class="boton-navegacion" href="./index.html">INICIO</a></li>
      <li><a class="boton-navegacion" href="./tienda.html">TIENDA</a></li>
      <li><a class="boton-navegacion" href="">SERVICIOS</a></li>
      <li><a class="boton-navegacion" href="">ADOPCIONES</a></li>
      <li><a class="boton-navegacion" href="">CONTACTO</a></li>
    </ul>
    <p><a class="boton-registrar" href="../html/regristro.html">REGISTRATE</a></p>
  </div>
</nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("header-nav");
  if (contenedor) {
    contenedor.innerHTML = navbarHTML;
  }
});