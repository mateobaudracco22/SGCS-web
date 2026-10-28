const botones = document.querySelectorAll(".boton-info");

for (let i = 0; i < botones.length; i++) {

    botones[i].addEventListener("click", function() {

        const tarjeta = botones[i].parentElement;
        const informacion = tarjeta.querySelector(".extra");

        if (informacion.classList.contains("mostrar")) {

            informacion.classList.remove("mostrar");
            botones[i].textContent = "Ver más";

        } else {

            informacion.classList.add("mostrar");
            botones[i].textContent = "Ver menos";

        }

    });

}
// ----- Botón hamburguesa -----
var menu = document.querySelector(".menu");
var boton = document.querySelector(".menu-boton");
var opciones = document.querySelector(".menu-opciones");

function cerrarMenu() {
    opciones.classList.remove("abierto");
    boton.textContent = "☰";
}

boton.addEventListener("click", function() {

    if (opciones.classList.contains("abierto")) {
        cerrarMenu();
    } else {
        opciones.classList.add("abierto");
        boton.textContent = "✕";
    }

});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function(e) {
    if (!menu.contains(e.target)) {
        cerrarMenu();
    }
});

// Cerrar el menú con la tecla Escape
document.addEventListener("keydown", function(e) {
    if (e.key == "Escape") {
        cerrarMenu();
    }
});

// ----- Submenús -----
// Esta función se llama desde cada botón ▾.
// window.event nos dice cuál botón se tocó.
function abrirSubmenu() {
    var flecha = window.event.currentTarget;
    var submenu = flecha.parentElement.nextElementSibling;
    var estabaAbierto = submenu.classList.contains("mostrar");

    // Primero se cierran todos los submenús
    var flechas = document.getElementsByClassName("flecha");
    for (var i = 0; i < flechas.length; i++) {
        flechas[i].parentElement.nextElementSibling.classList.remove("mostrar");
        flechas[i].classList.remove("activa");
        flechas[i].innerHTML = "&#9662;";
    }

    // Después se abre solo el que se tocó (si estaba cerrado)
    if (estabaAbierto == false) {
        submenu.classList.add("mostrar");
        flecha.classList.add("activa");
        flecha.innerHTML = "&#9652;";
    }
}

// ----- Enlaces vacíos -----
// Los enlaces con href="" o href="#" no hacen nada al tocarlos
var enlaces = document.querySelectorAll(".menu-opciones a");

for (var j = 0; j < enlaces.length; j++) {
    var destino = enlaces[j].getAttribute("href");

    if (destino == "" || destino == "#") {
        enlaces[j].addEventListener("click", function(e) {
            e.preventDefault();
        });
    }
}