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
