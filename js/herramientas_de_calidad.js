// ----- Menú hamburguesa -----
var boton = document.querySelector(".menu-boton");
var opciones = document.querySelector(".menu-opciones");

boton.addEventListener("click", function() {

    if (opciones.classList.contains("abierto")) {
        opciones.classList.remove("abierto");
        boton.textContent = "☰";
    } else {
        opciones.classList.add("abierto");
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

// ----- Filtros de herramientas -----
function filtrar(categoria, botonPulsado) {
    var tarjetas = document.getElementsByClassName("tarjeta");
    var filtros = document.getElementsByClassName("filtro");
    var i;

    // Mostrar u ocultar cada tarjeta
    for (i = 0; i < tarjetas.length; i++) {
        var categoriaTarjeta = tarjetas[i].getAttribute("data-categoria");

        if (categoria == "todas" || categoria == categoriaTarjeta) {
            tarjetas[i].style.display = "block";
        } else {
            tarjetas[i].style.display = "none";
        }
    }

    // Cambiar el botón activo
    for (i = 0; i < filtros.length; i++) {
        filtros[i].classList.remove("activo");
    }
    botonPulsado.classList.add("activo");
}

// ----- Íconos (Lucide) -----
document.addEventListener("DOMContentLoaded", function() {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});