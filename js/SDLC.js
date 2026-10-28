const pasos = [
    {
        numero: 1,
        tipo: "dark",
        icono: "📄",
        titulo: "Requisitos",
        texto: "Se recopilan y analizan las necesidades del usuario y del negocio. Se definen los objetivos, funcionalidades y restricciones del sistema."
    },

    {
        numero: 2,
        tipo: "light",
        icono: "✏️",
        titulo: "Diseño",
        texto: "Se planifica la arquitectura del software, la estructura de la base de datos y la interfaz de usuario. Se crean los diagramas y prototipos."
    },

    {
        numero: 3,
        tipo: "dark",
        icono: "💻",
        titulo: "Desarrollo",
        texto: "Los programadores escriben el código siguiendo las especificaciones del diseño. Se construyen los módulos y se integran entre sí."
    },

    {
        numero: 4,
        tipo: "light",
        icono: "🔍",
        titulo: "Pruebas",
        texto: "Se verifica que el software funcione correctamente, no tenga errores y cumpla con los requisitos. Se realizan pruebas unitarias, de integración y de sistema."
    },

    {
        numero: 5,
        tipo: "dark",
        icono: "☁️",
        titulo: "Despliegue",
        texto: "Se publica la aplicación en el entorno de producción, se configura el servidor y se asegura su correcto funcionamiento."
    },

    {
        numero: 6,
        tipo: "light",
        icono: "⚙️",
        titulo: "Mantenimiento",
        texto: "Se corrigen errores, se realizan mejoras y se adapta el software a nuevas necesidades o cambios del entorno."
    }
];


const contenedor = document.getElementById("timeline");


for (let i = 0; i < pasos.length; i++) {

    const paso = pasos[i];

    const item = document.createElement("div");

    item.className = "timeline-item " + paso.tipo;


    item.innerHTML = `
        <div class="step-number">
            ${paso.numero}
        </div>

        <div class="line-wrapper"></div>

        <div class="icon-circle">
            ${paso.icono}
        </div>

        <div class="card">

            <div class="card-text">

                <h3>
                    ${paso.titulo}
                </h3>

                <p>
                    ${paso.texto}
                </p>

                <div class="card-extra">
                    Hacé clic para ver más información sobre esta etapa.
                </div>

            </div>

            <div class="arrow">
                ›
            </div>

        </div>
    `;


    contenedor.appendChild(item);
}

const tarjetas = document.querySelectorAll(".card");


for (let i = 0; i < tarjetas.length; i++) {

    tarjetas[i].addEventListener("click", function() {

        if (tarjetas[i].classList.contains("open")) {

            tarjetas[i].classList.remove("open");

        } else {

            tarjetas[i].classList.add("open");

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