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

const formulario = document.querySelector(".formulario");
const enviarBtn = document.querySelector("#enviarBtn");
const mensajeExito = document.querySelector("#mensajeExito");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    enviarBtn.textContent = "✓ Enviado";
    enviarBtn.style.background = "#28c76f";

    mensajeExito.classList.add("mostrar");

    formulario.reset();

    setTimeout(function() {

        enviarBtn.textContent = "➤ Enviar";
        enviarBtn.style.background = "#168cff";

        mensajeExito.classList.remove("mostrar");

    }, 3000);

});