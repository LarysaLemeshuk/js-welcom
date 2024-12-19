// Функції
// функція (підпрограмма) -блок коду який виконує певні дії при виклику.
//функція може приймать аргументи - значення , якв передаються у функцію. функція може викори товувати аргументи
// функія може викликати аргументи( або ні)
// функція - фрагмент програмного коду, до якого можна звернутись з іншого місця програми

/* Синтаксис функції

Як оголосити функцію

function імʼя_функції(аргумент1, аргумент2) {
....... тіло функції}

*/

// Задача- написати ффункцію, яка буде приймати імʼя користувача- строка і буде вітатись з цим користуачем

/*function greetingUser(userName) {
  console.log("Hi," + userName);
}*/
// використання функції
/*greetingUser("Alex"); // Alex - аргумент
greetingUser("John");
greetingUser("Sam");
greetingUser("Solar");*/

// задача- створіть функію, яка приймає число, і додає до нього 5 і виводить результат у консоль

function addFiveToNumber(number) {
  let result = number + 5;
  console.log(result);
  return result;
}

const addFiveToNumberResult = addFiveToNumber(5);

// Написати функію яка складає 2 числа і повертає результат

function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}

const addTwoNumbersResult = addTwoNumbers(2, 5);

console.log(addFiveToNumber + addFiveToNumberResult); 
