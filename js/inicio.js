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

document.addEventListener("DOMContentLoaded", function() {

    lucide.createIcons();

});