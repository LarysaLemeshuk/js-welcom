/*

Задача.

Написати гру FizzBazz для 100 чисел

Починаємо з 1, потім це число поступово інкрементується.

Якщо число ділиться на 3 - гравець каже Fizz
Якщо число ділиться на 5 - гравець каже Bazz
Якщо число ділиться одночасно і на 3 і на 5 - гравець каже Fizz Bazz
Якщо число ділиться одночасно ні на 3 ні на 5 - гравець посто нашиває число

*/

function fizzBazzGame(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBazz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Bazz");
    }else {
        console.log(i);
    }
  }
}

fizzBazzGame(100);