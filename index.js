/*

Задача 2:
Дано масив [3, 6, 8, 2, 3, 5, 1]
Написати функцію, яка знаходить найбільше значення серед елементів масиву.

1. Запамятати найбільше число, яке ми зустріли
2. порівняти його з наступним елементом масиву.
Якщо елемент масиву опиниться більшим ніж те число, яке ми запамʼятали, то саме цей елемент масиву стає найбільш запамʼятовуваним

const numMaximum = 5;
const currentNum = 4;

if(numMaximum > currentNum){
// ідемо далі
}else{numMaximum = currentNum
}

*/

const numbersArray = [3, 6, 8, 2, 3, 5, 1];

function maxArray(array) {
  let maxNumber = array[0];

  for (let i = 0; i < array.lehgth; i++) {
    if (array[i] > max) {
      // якщо поточний простматреваемій елемент масиву більше, ніж максимальне число, яке ми запамʼятали
      maxNumber = array[i];
    }
  }
  return maxNumber
}

console.log(maxArray(numbersArray));//8