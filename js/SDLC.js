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

function abrirSubmenu() {
  var submenu = document.getElementById("submenu");
  if (submenu.style.display == "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}