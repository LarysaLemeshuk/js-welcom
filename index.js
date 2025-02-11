// array.reduce - використовується для обчислення якогось ОДНОГО значення на основі всіх елементів масиву
//reduce - зволить всі елементи масиву до якогось одного результату
// array.reduce(callback, initalValue)

const numbersArray = [ 2, 3, 1, 2, 34, 21];

// Задача: знайти суму numbersArray 

function reducer(accumulator, item){
  // те, що повертає reducer - оновлений акумулятор
  return accumulator + item;
}

const sum = numbersArray.reduce(reducer, 0);// 0-початкове щначення з якого почиаємо рахувати