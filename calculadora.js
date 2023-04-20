function calcular() {
  let numero1 = parseFloat(document.getElementById("inputNumero1").value);
  let numero2 = parseFloat(document.getElementById("inputNumero2").value);
  let operacion = document.getElementById("selectOperacion").value;
  let resultado = 0;
  switch (operacion) {
    case "sumar":
      resultado = numero1 + numero2;
      break;
    case "restar":
      resultado = numero1 - numero2;
      break;
    case "multiplicar":
      resultado = numero1 * numero2;
      break;
    case "dividir":
      resultado = numero1 / numero2;
      break;
  }
  document.getElementById("resultado").value = resultado;
}
