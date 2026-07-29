"use strict";

const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

if (boton && mensaje) {
  boton.addEventListener("click", () => {
    mensaje.textContent = "¡JavaScript funciona correctamente en GitHub Pages!";
  });
} else {
  console.error("No se encontraron los elementos requeridos.");
}
