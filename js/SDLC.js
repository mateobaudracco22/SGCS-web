const pasos = [
  {
    numero: 1,
    tipo: "dark",
    icono: "&#128196;",
    titulo: "Requisitos",
    texto: "Se recopilan y analizan las necesidades del usuario y del negocio. Se definen los objetivos, funcionalidades y restricciones del sistema."
  },
  {
    numero: 2,
    tipo: "light",
    icono: "&#9999;",
    titulo: "Diseño",
    texto: "Se planifica la arquitectura del software, la estructura de la base de datos y la interfaz de usuario. Se crean los diagramas y prototipos."
  },
  {
    numero: 3,
    tipo: "dark",
    icono: "&#128187;",
    titulo: "Desarrollo",
    texto: "Los programadores escriben el código siguiendo las especificaciones del diseño. Se construyen los módulos y se integran entre sí."
  },
  {
    numero: 4,
    tipo: "light",
    icono: "&#128269;",
    titulo: "Pruebas",
    texto: "Se verifica que el software funcione correctamente, no tenga errores y cumpla con los requisitos. Se realizan pruebas unitarias, de integración y de sistema."
  },
  {
    numero: 5,
    tipo: "dark",
    icono: "&#9729;",
    titulo: "Despliegue",
    texto: "Se publica la aplicación en el entorno de producción, se configura el servidor y se asegura su correcto funcionamiento."
  },
  {
    numero: 6,
    tipo: "light",
    icono: "&#9881;",
    titulo: "Mantenimiento",
    texto: "Se corrigen errores, se realizan mejoras y se adapta el software a nuevas necesidades o cambios del entorno."
  }
];

const contenedor = document.getElementById("timeline");

pasos.forEach(paso => {
  const item = document.createElement("div");
  item.className = "timeline-item " + paso.tipo;

  item.innerHTML = `
    <div class="step-number">${paso.numero}</div>
    <div class="line-wrapper"></div>
    <div class="icon-circle">${paso.icono}</div>
    <div class="card">
      <div class="card-text">
        <h3>${paso.titulo}</h3>
        <p>${paso.texto}</p>
      </div>
      <div class="arrow">&#10095;</div>
    </div>
  `;

  contenedor.appendChild(item);
});

contenedor.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) {
    card.classList.toggle("open");
  }
});