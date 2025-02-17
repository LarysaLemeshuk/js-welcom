'use strict';

// rest operator - оператор залишкових аргументів
// rest - залишок
// .., .., .., .., -->> []

// spread operator
// spread - розпакувати
// [] --->> .., .., ..,

const numbers = [1, 2, 3, 4, 5];

function sum(a, b, ...restArray){
  //console.log(restArray);
  return a + b;
}
//console.log(sum(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]));
console.log(sum(...numbers))// spread operator
//розпакувати всі значенння масиву в виклик функції sum


// приклади використання spread operator
const numbersMath = [2, 3, 1, 5, 4];

Math min (...numbersMath);