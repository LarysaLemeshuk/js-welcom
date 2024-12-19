/*

Обʼявлена функція - Function Declaration

function імʼя_функції(argument1, argument2) {
тіло функції}

імʼя_функції(argument1, argument2);


hoisting - оголошення функції піднімається до верхньої частини коду

*/

greetingUser("James");

function greetingUser(userName) {
  //userName - абстракція, на якій ми завʼязуємо логіку роботи функції
  //userName - формальний параметр
  console.log("Hi," + userName);
}

greetingUser("Alex");

/*

Function Expression - Функціональний вираз

const імʼя_функції = function(arg1, arg2) {
...тіло фукції
}

імʼя_функції = function(arg1, arg2)

*/

const greetingUser = function (userName) {
  console.log("Hi," + userName);
};

greet("Kevin");

/*

Arrow Functon - стрілкова функція

const імʼя_функції = (arg1, arg2) => {
  тіло функції
  }

*/

const greetArrow = (userName) => {
  console.log("Hi," + userName);
};

greetArrow("Stepan");
