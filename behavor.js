let firstNumber = 0;
let secondNumber = 0;

function sumar() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
  if (verificarNumerosVacios()) {
    return;
  }
  document.getElementById("resultado").innerHTML =
    parseFloat(firstNumber) + parseFloat(secondNumber);
}

function restar() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
  if (verificarNumerosVacios()) {
    return;
  }
  document.getElementById("resultado").innerHTML =
    parseFloat(firstNumber) - parseFloat(secondNumber);
}
function multiplicar() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
  if (verificarNumerosVacios()) {
    return;
  }
  document.getElementById("resultado").innerHTML =
    parseFloat(firstNumber) * parseFloat(secondNumber);
}

function dividir() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
  if (verificarNumerosVacios()) {
    return;
  }
  if (secondNumber == 0) {
    alert("No se puede dividir entre 0");
    return;
  }
  document.getElementById("resultado").innerHTML =
    parseFloat(firstNumber) / parseFloat(secondNumber);
}

function verificarNumerosVacios() {
  if (firstNumber == "" || secondNumber == "") {
    alert("Debe ingresar 2 numeros");
    return true;
  } else {
    return false;
  }
}
