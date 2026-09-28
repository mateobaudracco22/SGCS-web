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