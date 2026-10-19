const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");
const cerrar = document.querySelector("#cerrar");

menuBtn.addEventListener("click", function() {
    menu.classList.add("activo");
});

cerrar.addEventListener("click", function() {
    menu.classList.remove("activo");
});

function abrirSubmenu() {
  var submenu = document.getElementById("submenu");
  if (submenu.style.display == "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

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