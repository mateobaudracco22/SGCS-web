"use strict";

(function () {
  function iniciarNavegacion() {
    document.querySelectorAll("nav.menu").forEach((menu) => {
      const boton = menu.querySelector(".menu-boton");
      const opciones = menu.querySelector(".menu-opciones");
      if (!boton || !opciones) return;

      function cerrarSubmenus() {
        opciones.querySelectorAll(".flecha").forEach((flecha) => {
          flecha.setAttribute("aria-expanded", "false");
          flecha.classList.remove("activa");
          flecha.textContent = "▾";
          const panel = document.getElementById(flecha.getAttribute("aria-controls"));
          if (panel) panel.classList.remove("mostrar");
        });
      }

      function establecerAbierto(abierto) {
        opciones.classList.toggle("abierto", abierto);
        boton.setAttribute("aria-expanded", String(abierto));
        boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
        boton.textContent = abierto ? "✕" : "☰";
        if (!abierto) cerrarSubmenus();
      }

      boton.addEventListener("click", () => {
        establecerAbierto(!opciones.classList.contains("abierto"));
      });

      opciones.querySelectorAll(".flecha").forEach((flecha) => {
        flecha.addEventListener("click", () => {
          const panel = document.getElementById(flecha.getAttribute("aria-controls"));
          if (!panel) return;
          const abrir = !panel.classList.contains("mostrar");
          cerrarSubmenus();
          if (abrir) {
            panel.classList.add("mostrar");
            flecha.classList.add("activa");
            flecha.setAttribute("aria-expanded", "true");
            flecha.textContent = "▴";
          }
        });
      });

      document.addEventListener("click", (evento) => {
        if (!menu.contains(evento.target)) establecerAbierto(false);
      });
      document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
          establecerAbierto(false);
          boton.focus();
        }
      });
    });

    if (typeof window.lucide !== "undefined") window.lucide.createIcons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarNavegacion);
  } else {
    iniciarNavegacion();
  }
})();
