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

// ----- Pestañas: Roles / Eventos / Artefactos -----
function mostrarPanel(nombre, botonPulsado) {
    var paneles = document.getElementsByClassName("panel");
    var tabs = document.getElementsByClassName("tab");
    var n;

    // Ocultar todos los paneles
    for (n = 0; n < paneles.length; n++) {
        paneles[n].style.display = "none";
    }

    // Mostrar solo el elegido
    document.getElementById("panel-" + nombre).style.display = "block";

    // Cambiar la pestaña activa
    for (n = 0; n < tabs.length; n++) {
        tabs[n].classList.remove("activa");
    }
    botonPulsado.classList.add("activa");
}

// ----- Eventos del sprint: clic para resaltar -----
function seleccionarEvento(tarjeta) {
    var eventos = document.getElementsByClassName("evento");
    var n;

    for (n = 0; n < eventos.length; n++) {
        eventos[n].classList.remove("seleccionado");
    }
    tarjeta.classList.add("seleccionado");
}

// ----- Duración del sprint -----
// Tiempos máximos orientativos según la duración (1, 2, 3 o 4 semanas)
var tiemposReview = ["1 hora", "2 horas", "3 horas", "4 horas"];
var tiemposRetro = ["45 minutos", "1,5 horas", "2 horas", "3 horas"];

function cambiarDuracion() {
    var lista = document.getElementById("duracion");
    var posicion = lista.selectedIndex;

    document.getElementById("tiempoReview").innerHTML = "Hasta " + tiemposReview[posicion];
    document.getElementById("tiempoRetro").innerHTML = "Hasta " + tiemposRetro[posicion];
}

// ----- Íconos (Lucide) -----
document.addEventListener("DOMContentLoaded", function() {

    cambiarDuracion();

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});