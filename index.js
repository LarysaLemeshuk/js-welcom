'use strict';

// Задача:
/*
у фенкції sum знайти суму двох елементів, а усі інші аргументи, які передали у функцію ззовні, при виклику - покласти у масив
*/

// rest operator - оператор залишкових аргументів
// rest - залишок
// .., .., .., .., -->> []

function sum(a, b, ...arrayOfRestArguments) {
  console.log(arrayOfRestArguments);
  return a + b;
}

console.log(sum(1, 2, 3, 5, 10, 25)); //3

//function f(arg1, ...rest, arg2){ // помилка

//}

//Задача: написати стрілочну функцію, яка сумує будь-яку кількість чисел

/*const arrowSum = (...restArrayOfNumbers) => {
  let sum = 0;

  for (let i = 0; i < restArrayOfNumbers.length; i++) {
    sum += restArrayOfNumbers[i];
  }
  return sum;
};*/

/*
Задача
Напишіть варіант функції arrowSum з використанням метода reduse
ПРи виклику передайте йому стрілковий колбек

*/

/*const arrowSum = (...restArray) => {
  const sum = restArray.reduce(accumulator, currentValue) => {
return accumulator + currentValue;
  }
  return sum;
}*/

/*const arrowSum = (...restArray) => {
  const sum = restArray.reduce(accumulator, currentValue) => {
return accumulator + currentValue;
  }
  return sum;
}*/

const arrowSum = (...restArray) => restArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
