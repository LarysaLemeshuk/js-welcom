/*
Задача 1

Знайти фактріал числа
5! = 5 * 4 * 3 * 2 * 1 = 120

Задача 2

Описати знаходження послідовності чисел Фібоначчі:
f(n) = f(n-1) + f(n-2)

Іншими словами, наступне число є сумою двох попередніх

*/

// Задача 1

function findFactirial(number) {
  if (number === 1) {
    return 1;
  } else {
    return number * findFactirial(number - 1);
  }
}

//Задача 2

function findFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return findFibonacci(n - 1) + findFibonacci(n - 2);
}
