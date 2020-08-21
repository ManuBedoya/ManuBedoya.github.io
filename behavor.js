//Variables globales las cuales representa los 2 numeros que se van a operar

let firstNumber = 0;
let secondNumber = 0;
//Función Sumar
function sumar() {
  asignarValores();
  if (verificarNumerosVacios()) {
    return;
  }
  document.getElementById("resultado").innerHTML =
    parseFloat(firstNumber) + parseFloat(secondNumber);
}
//Función Restar
function restar() {
  asignarValores();
  if (verificarNumerosVacios()) {
    return;
  }
  document.getElementById("resultado").innerHTML =
    parseFloat(firstNumber) - parseFloat(secondNumber);
}
//Función multiplicar
function multiplicar() {
  asignarValores();
  if (verificarNumerosVacios()) {
    return;
  }
  document.getElementById("resultado").innerHTML =
    parseFloat(firstNumber) * parseFloat(secondNumber);
}
//Función dividir
function dividir() {
  asignarValores();
  if (verificarNumerosVacios()) {
    return;
  }
  //Una división no puede ser entre 0 asi que se valida antes de hacer la operación
  if (secondNumber == 0) {
    alert("No se puede dividir entre 0");
    return;
  }
  document.getElementById("resultado").innerHTML =
    parseFloat(firstNumber) / parseFloat(secondNumber);
}
//Función que valida si tanto el campo del valor 1 o el valor 2 estan vacios , en caso de estarlos retorna true de lo contrario false;
function verificarNumerosVacios() {
  if (firstNumber == "" || secondNumber == "") {
    alert("Debe ingresar 2 numeros");
    return true;
  } else {
    return false;
  }
}
//Función que coge los valores de los imputs del html y los guarda en sus respectivas variables
function asignarValores() {
  firstNumber = document.getElementById("number1").value;
  secondNumber = document.getElementById("number2").value;
}
