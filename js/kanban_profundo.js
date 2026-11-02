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
