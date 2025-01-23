//[] -обчислювальні властивості

const user = {
  name: "John",
  "favorite color": "red",
  0: "value", // ключ- name, значення - John
};

//ключем в обʼєкті може бути рядок або тип даних Symbol

console.log(user.name);
//user.'favorite color'; синтаксична помилка
// user.0; syntax error

//[ ] - оператор доступу до обчислювальної вдастивості (коли мова йде про невалідні оператори)

console.log(user["favorite color"]);

console.log(user[0]);

const someObj = {
    2:10
}
// Задача: отримати значення, яке знаходиться під ключем 2

console.log(someObj[2]);
