// ----- Menú hamburguesa -----
function abrirMenu() {
  document.getElementById("menu").classList.add("abierto");
  document.getElementById("fondo").style.display = "block";
}

function cerrarMenu() {
  document.getElementById("menu").classList.remove("abierto");
  document.getElementById("fondo").style.display = "none";
}

function abrirSubmenu() {
  var submenu = document.getElementById("submenu");
  if (submenu.style.display == "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

// ----- Comparador -----
function mostrar() {
  var nombres = ["scrum", "kanban", "cascada", "xp"];
  var total = 0;

  for (var i = 0; i < nombres.length; i++) {
    var nombre = nombres[i];
    var casilla = document.getElementById("chk-" + nombre);
    var tarjeta = document.getElementById("card-" + nombre);
    var celdas = document.getElementsByClassName("col-" + nombre);

    // Mostrar u ocultar la columna
    for (var j = 0; j < celdas.length; j++) {
      if (casilla.checked) {
        celdas[j].style.display = "table-cell";
      } else {
        celdas[j].style.display = "none";
      }
    }

    // Marcar la tarjeta
    if (casilla.checked) {
      tarjeta.classList.add("marcada");
      total = total + 1;
    } else {
      tarjeta.classList.remove("marcada");
    }
  }

  // Texto del contador
  if (total == 1) {
    document.getElementById("contador").innerHTML = "Comparando 1 metodología";
  } else {
    document.getElementById("contador").innerHTML = "Comparando " + total + " metodologías";
  }

  // Aviso si hay menos de 2
  if (total < 2) {
    document.getElementById("aviso").style.display = "block";
  } else {
    document.getElementById("aviso").style.display = "none";
  }
}

// Al cargar la página
mostrar();