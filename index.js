//console.log(t);
//console.dir(t);

//Будь-яка функція є обʼєкт

//Задача: написати функцію, яка повертає суму Будь-якої кількості переданих в неї аргументів

function sum(a, b) {
  const arrayArg = Array.from(arguments);
let sum = 0;
  for (let i = 0; i < arrayArg.length; i++) {
    sum += arrayArg[i];
  }
  return sum;
}

console.log(sum(2, 6, 3, 4, 5, 6, 7));
