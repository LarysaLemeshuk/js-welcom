/*Задача:
у нас є оюʼєкт з різними версіями привітань для користувача
вивести користувачу привітання залежно від значення яке він ввів.

*/

const greets = {
  15: "hi",
  17: "ya, whats up",
  19: "Hello",
  30: "Good morning",
};

const valueFromUser = 19;
console.log(greets[valueFromUser]);
