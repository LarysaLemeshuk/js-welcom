/*

Задача 3:
написати функцію, яка знаходить середнє арифметичне всіх елементів масиву.
Середнє арифметичне = сума всіх елементів масиву / кількість елементів масиву

[3, 6, 8, 2, 3, 5, 1] //4
*/

const numbersArray = [3, 6, 8, 2, 3, 5, 1];

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(average(numbersArray));
