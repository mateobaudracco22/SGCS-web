const menuBoton = document.querySelector("#menuBoton");
const menuOpciones = document.querySelector("#menuOpciones");

menuBoton.addEventListener("click", function() {
    menuOpciones.classList.toggle("activo");
});


const flechaSubmenu = document.querySelector("#flechaSubmenu");
const submenu = document.querySelector("#submenu");

flechaSubmenu.addEventListener("click", function() {
    submenu.classList.toggle("abierto");
});


const botones = document.querySelectorAll(".ver-detalles");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const id = boton.getAttribute("data-detalle");
        const detalle = document.querySelector("#" + id);

        detalle.classList.toggle("mostrar");

        if (detalle.classList.contains("mostrar")) {
            boton.textContent = "Ocultar detalles ↑";
        } else {
            boton.textContent = "Ver detalles →";
        }

    });

});


const enlaces = document.querySelectorAll(".menu-opciones a");

enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {
        menuOpciones.classList.remove("activo");
    });

});


document.addEventListener("click", function(event) {

    if (
        !menuOpciones.contains(event.target) &&
        !menuBoton.contains(event.target)
    ) {
        menuOpciones.classList.remove("activo");
    }

});