const boton = document.querySelector(".menu-boton");
const opciones = document.querySelector(".menu-opciones");

boton.addEventListener("click", function() {

    if (opciones.style.display === "block") {

        opciones.style.display = "none";

        boton.textContent = "☰";

    } else {

        opciones.style.display = "block";

        boton.textContent = "✕";

    }

});
function abrirSubmenu() {
  var submenu = document.getElementById("submenu");
  if (submenu.style.display == "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", function() {

    lucide.createIcons();

});