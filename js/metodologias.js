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