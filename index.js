//const num1 = Number(prompt("Введіть перше число"));
//const num2 = Number(prompt("Введіть друге число"));

// Задача. Написати функцію, яка приймає 2 числа і додає їх

function addTwoNumbers(arg1, arg2) {
  console.log(num1);
  return arg1 + arg2;
}

let result = addTwoNumbers(num1, num2);
console.log(result);

//область видимості  - визначення доступності і видимості змінних та функцій у певних частинах коду

/* 

 у JS існеє 2 основні області видимості:

 1. глобальна бласть видимості - охоплює весь документ (програму)


 */

const globalVariable = 10;

function globalFunction() {
  // тіло
}

console.log(globalVariable);

//2. локальна область видимості - визначається блоками коду (фігурними дужками)

function testFunction() {
  const localVariable = 20; // локальна змінна

  if (true) {
    const innerVariable = 30; // локальна змінна if
    console.log(innerVariable); // 30
    console.log(localVariable); // 20
    console.log(globalVariable); // 10
  }

  console.log(localVariable); // 20
  console.log(innerVariable);
}
testFunction();

//console.log(localVariable); - помилка

//summary
/*

Scope - область видимості
(це всі наші змінні, обʼєкти ітд, якаа нам доступні)

Local Scope ( локальна область видимості) - це всі наші змінні, обʼєкти ітд ВСЕРЕДИНІ нашої функції

Global Scope (глобальна область видимості) -  це всі наші змінні, обʼєкти ітд з поточного коду

*/
