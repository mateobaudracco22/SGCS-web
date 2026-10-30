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

// ----- Tablero Kanban -----
var limiteWip = 3;
var tarjetaArrastrada = null;

// Cuenta las tarjetas de cada columna y revisa el límite de WIP
function actualizar() {
    var nombres = ["porhacer", "enproceso", "hecho"];
    var n;

    for (n = 0; n < nombres.length; n++) {
        var lista = document.getElementById("col-" + nombres[n]);
        var cantidad = lista.getElementsByClassName("tarjeta-kanban").length;
        document.getElementById("num-" + nombres[n]).innerHTML = cantidad;
    }

    // Si En Proceso llegó al límite, la columna se marca en rojo
    var enProceso = document.getElementById("col-enproceso");
    var cantidadProceso = enProceso.getElementsByClassName("tarjeta-kanban").length;
    var columna = document.getElementById("columna-enproceso");

    if (cantidadProceso >= limiteWip) {
        columna.classList.add("lleno");
    } else {
        columna.classList.remove("lleno");
    }
}

// Cambiar el límite de WIP con la lista desplegable
function cambiarLimite() {
    var lista = document.getElementById("limite");
    limiteWip = parseInt(lista.value);
    actualizar();
}

// Mensaje rojo cuando no se puede mover una tarjeta
function mostrarAviso(texto) {
    var aviso = document.getElementById("aviso");
    aviso.innerHTML = texto;
    aviso.style.display = "block";

    setTimeout(function() {
        aviso.style.display = "none";
    }, 3000);
}

// Mueve una tarjeta a una columna (respetando el límite de WIP)
function intentarMover(tarjeta, lista) {
    if (tarjeta.parentElement == lista) {
        return;
    }

    if (lista.id == "col-enproceso") {
        var cantidad = lista.getElementsByClassName("tarjeta-kanban").length;
        if (cantidad >= limiteWip) {
            mostrarAviso("Se alcanzó el límite de WIP (" + limiteWip + ") en la columna En Proceso.");
            return;
        }
    }

    lista.appendChild(tarjeta);
    actualizar();
}

// ----- Arrastrar y soltar -----
function empezarArrastre(e) {
    tarjetaArrastrada = e.currentTarget;
    e.dataTransfer.setData("text", tarjetaArrastrada.id);
    tarjetaArrastrada.classList.add("arrastrando");
}

function terminarArrastre(e) {
    e.currentTarget.classList.remove("arrastrando");
    quitarResaltado();
}

function permitirSoltar(e) {
    e.preventDefault();
    quitarResaltado();
    e.currentTarget.classList.add("sobre");
}

function soltar(e) {
    e.preventDefault();
    quitarResaltado();

    if (tarjetaArrastrada != null) {
        intentarMover(tarjetaArrastrada, e.currentTarget);
    }
}

function quitarResaltado() {
    var listas = document.getElementsByClassName("lista");
    for (var n = 0; n < listas.length; n++) {
        listas[n].classList.remove("sobre");
    }
}

// ----- Botón ⋮ : mueve la tarjeta a la siguiente columna -----
// (sirve también en el celular, donde arrastrar no siempre funciona)
function moverSiguiente(botonMas) {
    var tarjeta = botonMas.parentElement.parentElement;
    var columnaActual = tarjeta.parentElement.id;
    var destino = "";

    if (columnaActual == "col-porhacer") {
        destino = "col-enproceso";
    } else if (columnaActual == "col-enproceso") {
        destino = "col-hecho";
    } else {
        destino = "col-porhacer";
    }

    intentarMover(tarjeta, document.getElementById(destino));
}

// ----- Al cargar la página -----
document.addEventListener("DOMContentLoaded", function() {

    actualizar();

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});