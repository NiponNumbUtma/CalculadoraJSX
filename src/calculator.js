
export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

export function multiplicacion(a, b) {
  return a * b;
}

export function division(a, b) {
  if (b === 0) {
    return "No se puede dividir por cero.";
  }
  return a / b;
}

export function cuadrado(a) {
  return a * a;
}
