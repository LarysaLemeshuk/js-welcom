//const value1 = Number(prompt("Введіть перше число:"));
//const value2 = Number(prompt("Введіть друге число:"));

// задача 1. написати фнкц. яка приймає 2 числа і повертає те число , що більше

/*

function getBigger(number1, number2) {
  // number1, number2 - формалні параметри
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    console.log("Ми очікуємо числа");
  } else if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

const result = getBigger(value1, value2);// value1, value2 - фактичні функції
console.log(result);
*/

// задача 2. написати функцію, яка обчислює середнє арифметичне з двох чисел

/*
function average(number1, number2) {
   
  return (number1, number2) / 2;
}

console.log(average (value1, value2));
*/

// задача 3 . написати функцію, яка приймає число і визначає, чи є воно парним

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(6));