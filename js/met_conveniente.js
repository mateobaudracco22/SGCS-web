// ----- Menú hamburguesa -----
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
function abrirSubmenu() {
  var submenu = document.getElementById("submenu");
  if (submenu.style.display == "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", function() {

    lucide.createIcons();

});

// ----- Datos de la encuesta -----
// puntos = [Scrum, Kanban, Cascada]
var preguntas = [
  {
    titulo: "¿Cómo es tu proyecto?",
    opciones: [
      { texto: "Producto nuevo, con mucho por descubrir", tag: "Scrum", puntos: [10, 4, 1] },
      { texto: "Servicio que ya existe y se mantiene", tag: "Kanban", puntos: [2, 10, 3] },
      { texto: "Sistema con alcance definido desde el inicio", tag: "Cascada", puntos: [1, 3, 10] }
    ]
  },
  {
    titulo: "¿Cómo trabaja tu equipo?",
    opciones: [
      { texto: "Equipo pequeño que trabaja muy junto", tag: "Scrum", puntos: [11, 4, 0] },
      { texto: "Cada quien toma tareas según la demanda", tag: "Kanban", puntos: [3, 10, 2] },
      { texto: "Áreas separadas con roles definidos", tag: "Cascada", puntos: [1, 3, 10] }
    ]
  },
  {
    titulo: "¿Con qué frecuencia cambian los requisitos?",
    opciones: [
      { texto: "Casi nunca, están cerrados", tag: "Cascada", puntos: [1, 3, 12] },
      { texto: "Con frecuencia, cada pocas semanas", tag: "Scrum", puntos: [10, 6, 4] },
      { texto: "Todo el tiempo, según la demanda", tag: "Kanban", puntos: [3, 12, 0] }
    ]
  },
  {
    titulo: "¿Cómo prefieres entregar?",
    opciones: [
      { texto: "Por etapas cortas, cada pocas semanas", tag: "Scrum", puntos: [10, 3, 2] },
      { texto: "De forma continua, sin fechas fijas", tag: "Kanban", puntos: [2, 10, 3] },
      { texto: "Una sola entrega al final", tag: "Cascada", puntos: [1, 2, 10] }
    ]
  }
];

var mensajes = {
  Scrum: "Tu proyecto cambia con frecuencia y se entrega por etapas cortas, lo que encaja con sprints e incrementos.",
  Kanban: "Tu trabajo fluye según la demanda, lo que encaja con un tablero visual y entregas continuas.",
  Cascada: "Tu proyecto tiene requisitos cerrados y fases definidas, lo que encaja con un avance secuencial."
};

// Respuestas elegidas (-1 significa sin responder)
// Empieza como en la imagen: paso 3 con las dos primeras ya respondidas
var respuestas = [0, 0, 1, -1];
var paso = 3;

// ----- Mostrar la pantalla -----
function dibujar() {
  var i;

  // Pasos de arriba
  for (i = 1; i <= 5; i++) {
    var elemento = document.getElementById("paso" + i);
    var clase = "paso";
    var bolita = elemento.getElementsByClassName("bolita")[0];

    if (i < paso) {
      clase = clase + " hecho";
      bolita.innerHTML = "&#10003;";
    } else {
      bolita.innerHTML = i;
      if (i == paso) {
        clase = clase + " actual";
      }
    }
    if (i <= paso) {
      clase = clase + " con-linea";
    }
    elemento.className = clase;
  }

  // Progreso
  var porcentaje = paso * 20;
  document.getElementById("textoPaso").innerHTML = "Paso " + paso + " de 5";
  document.getElementById("textoPorcentaje").innerHTML = porcentaje + " % completado";
  document.getElementById("barra").style.width = porcentaje + "%";

  // Pregunta y opciones
  var contenedor = document.getElementById("opciones");
  var texto = "";

  if (paso <= 4) {
    var p = preguntas[paso - 1];
    document.getElementById("pregunta").innerHTML = p.titulo;

    for (i = 0; i < p.opciones.length; i++) {
      var clase2 = "opcion";
      if (respuestas[paso - 1] == i) {
        clase2 = "opcion elegida";
      }
      texto = texto + '<div class="' + clase2 + '" onclick="elegir(' + i + ')">';
      texto = texto + '<span class="radio"></span>';
      texto = texto + '<span class="texto-opcion">' + p.opciones[i].texto + '</span>';
      texto = texto + '<span class="tag-opcion">' + p.opciones[i].tag + '</span>';
      texto = texto + '</div>';
    }
  } else {
    document.getElementById("pregunta").innerHTML = "¡Encuesta completa!";
    texto = '<p class="texto-final">Ya respondiste todas las preguntas. Tu resultado final aparece en el panel de resultado.</p>';
  }
  contenedor.innerHTML = texto;

  // Botones
  var anterior = document.getElementById("btnAnterior");
  var siguiente = document.getElementById("btnSiguiente");

  if (paso == 1) {
    anterior.style.visibility = "hidden";
  } else {
    anterior.style.visibility = "visible";
  }

  if (paso == 5) {
    siguiente.style.visibility = "hidden";
  } else {
    siguiente.style.visibility = "visible";
    if (respuestas[paso - 1] == -1) {
      siguiente.style.opacity = "0.5";
    } else {
      siguiente.style.opacity = "1";
    }
  }

  calcularResultado();
}

// ----- Acciones -----
function elegir(numero) {
  respuestas[paso - 1] = numero;
  dibujar();
}

function siguiente() {
  if (paso <= 4 && respuestas[paso - 1] == -1) {
    return;
  }
  if (paso < 5) {
    paso = paso + 1;
    dibujar();
  }
}

function anterior() {
  if (paso > 1) {
    paso = paso - 1;
    dibujar();
  }
}

function repetir() {
  respuestas = [-1, -1, -1, -1];
  paso = 1;
  dibujar();
}

// ----- Resultado -----
function calcularResultado() {
  var total = [0, 0, 0];
  var i;
  var j;

  for (i = 0; i < 4; i++) {
    if (respuestas[i] != -1) {
      var puntos = preguntas[i].opciones[respuestas[i]].puntos;
      for (j = 0; j < 3; j++) {
        total[j] = total[j] + puntos[j];
      }
    }
  }

  var suma = total[0] + total[1] + total[2];

  if (suma == 0) {
    document.getElementById("tituloResultado").innerHTML = "Responde para ver tu resultado";
    document.getElementById("donaPorcentaje").innerHTML = "0%";
    document.getElementById("donaNombre").innerHTML = "";
    document.getElementById("valorScrum").innerHTML = "0%";
    document.getElementById("valorKanban").innerHTML = "0%";
    document.getElementById("valorCascada").innerHTML = "0%";
    document.getElementById("barraScrum").style.width = "0%";
    document.getElementById("barraKanban").style.width = "0%";
    document.getElementById("barraCascada").style.width = "0%";
    document.getElementById("dona").style.background = "#dfe8ef";
    document.getElementById("mensaje").innerHTML = "Contesta la primera pregunta para ver qué metodología te conviene.";
    return;
  }

  var scrum = Math.round(total[0] / suma * 100);
  var kanban = Math.round(total[1] / suma * 100);
  var cascada = 100 - scrum - kanban;

  // Ganadora
  var ganadora = "Scrum";
  var mayor = scrum;
  if (kanban > mayor) {
    ganadora = "Kanban";
    mayor = kanban;
  }
  if (cascada > mayor) {
    ganadora = "Cascada";
    mayor = cascada;
  }

  document.getElementById("tituloResultado").innerHTML = "Tu mejor coincidencia es " + ganadora;
  document.getElementById("donaPorcentaje").innerHTML = mayor + "%";
  document.getElementById("donaNombre").innerHTML = ganadora;

  document.getElementById("valorScrum").innerHTML = scrum + "%";
  document.getElementById("valorKanban").innerHTML = kanban + "%";
  document.getElementById("valorCascada").innerHTML = cascada + "%";

  document.getElementById("barraScrum").style.width = scrum + "%";
  document.getElementById("barraKanban").style.width = kanban + "%";
  document.getElementById("barraCascada").style.width = cascada + "%";

  var corte = scrum + kanban;
  document.getElementById("dona").style.background =
    "conic-gradient(#0a77a8 0% " + scrum + "%, #1fb0d6 " + scrum + "% " + corte + "%, #8fd9ee " + corte + "% 100%)";

  document.getElementById("mensaje").innerHTML = mensajes[ganadora];
}

// Al cargar la página
dibujar();