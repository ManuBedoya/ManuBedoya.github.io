let firstNumber = 0;
let secondNumber = 0;

function sumar() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
  document.getElementById("resultado").innerHTML =
    parseInt(firstNumber) + parseInt(secondNumber);
}

function restar() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
  document.getElementById("resultado").innerHTML =
    parseInt(firstNumber) - parseInt(secondNumber);
}
function multiplicar() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
  document.getElementById("resultado").innerHTML =
    parseInt(firstNumber) * parseInt(secondNumber);
}

function dividir() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
  document.getElementById("resultado").innerHTML =
    parseInt(firstNumber) / parseInt(secondNumber);
}
