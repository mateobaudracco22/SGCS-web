"use strict";
document.querySelectorAll(".ver-detalles").forEach((boton) => {
  const detalle = document.getElementById(boton.dataset.detalle);
  if (!detalle) return;
  boton.setAttribute("aria-controls", detalle.id);
  boton.setAttribute("aria-expanded", "false");
  boton.addEventListener("click", () => {
    const mostrar = !detalle.classList.contains("mostrar");
    detalle.classList.toggle("mostrar", mostrar);
    boton.setAttribute("aria-expanded", String(mostrar));
    boton.textContent = mostrar ? "Ocultar detalles ↑" : "Ver detalles →";
  });
});
