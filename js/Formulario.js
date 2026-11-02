"use strict";
// En un sitio estático no hay backend para enviar formularios.
// Se valida el formulario y se prepara un mensaje para el cliente de correo.
const formulario = document.getElementById("formularioContacto");
const mensajeEstado = document.getElementById("mensajeExito");

if (formulario && mensajeEstado) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!formulario.reportValidity()) return;

    const campos = new FormData(formulario);
    const asunto = "UES - " + String(campos.get("asunto") || "Consulta");
    const cuerpo = [
      "Nombre: " + String(campos.get("nombre") || ""),
      "Correo: " + String(campos.get("email") || ""),
      "",
      String(campos.get("mensaje") || "")
    ].join("\n");
    const destino = "mailto:ues@contacto.com?subject=" + encodeURIComponent(asunto) +
      "&body=" + encodeURIComponent(cuerpo);

    mensajeEstado.classList.add("mostrar");
    window.location.href = destino;
  });
}
