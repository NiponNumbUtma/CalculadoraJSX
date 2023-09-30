
import * as calculator from "./calculator.js";

document.getElementById("suma").addEventListener("click", () => mostrarResultado(calculator.suma));
document.getElementById("resta").addEventListener("click", () => mostrarResultado(calculator.resta));
document.getElementById("multiplicacion").addEventListener("click", () => mostrarResultado(calculator.multiplicacion));
document.getElementById("division").addEventListener("click", () => mostrarResultado(calculator.division));
document.getElementById("cuadrado").addEventListener("click", () => mostrarResultado(calculator.cuadrado));

function mostrarResultado(operacion) {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  let resultado;

  if (typeof operacion === "function") {
    resultado = operacion(a, b);
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
  } else {
    document.getElementById("resultado").textContent = "Operación no válida.";
  }
}
