const date = new Date(); // за замовчуванням буде створена поточна системна дата та час
const date1 = new Date('12-31-2023'); // 31.12.2024

console.log(date1.getDate()); // 31; getDate використовується для отримання місяця з дати
console.log(date1.getDay()); // використовується для отримання дня тижня з дати
console.log(date1.getFullYear()); // використовується для отримання року з дати
console.log(date.getHours()); // використовується для отримання години з дати
console.log(date1.getTime()); // використовується для отримання  кількості мілісекунд, які пройшли з 1 січня 1970 року 00:00:00

// Задача: знайи суму першого 1000000 чисел

let sum = 0;// створюємо змінну

const time1 = new Date();// відрізок часу ДО початку операції

for (let i = 0; i <= 1000000; i++) {// накопичуємо суму
  sum += i;
}

const time2 = new Date();// відрізок часу після операції

console.log(time2.getTime() - time1.getTime());



// приклад з консоль. таймами
console.time('operation')// включили таймер
let sum2 = 0;
for (let i = 0; i <= 1000000; i++) {// накопичуємо суму
  sum += i;
}
//......

console.timeEnd('operation'); 