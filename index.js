/*

Higt Order Function (Фунція вищого порядку)-
функція, яка приймає іншу функцію в якості аргумента

*/

function calculator(num1, num2, functionLink) {// HOF
  let result = functionLink(num1, num2);
  return result;
}

console.log(calculator(5, 5, sum));

//використовуючи калькулятор, піднесіть num1 у степінь num2
 console.log( calculator(3, 2, function(a, b ){// callback
    return a ** b;
}))

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multy(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
//callback - функція зворотнього виклику, яку ми передали як аргумент при виклику іншої функції