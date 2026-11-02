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
