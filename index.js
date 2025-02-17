// вкладені цикли

/*

Вивести на консоль таблицю множення від 1 до 5

1x1 = 1
1x2 = 2
...1x5 = 5

2x1 = 2
2x2 = 4

....
5x1 = 5
5x2 = 10
5x3
5x4
5x5

*/
/*
for(let i = 1; i <=5; i ++){
  for(let j=1; j <=5; j++){
    console.log(`${i} x ${j} = ${i*j}`);
  }
}
  */

const numbers =[[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Задача: знайти суму елементів масиву

let sum = 0;
for(let i = 0; i < numbers.length; i++){
  for(let j = 0; j < numbers[i].length; j++){
    sum += numbers[i][j]
  }
}