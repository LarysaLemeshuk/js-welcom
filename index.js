/*
задача 2
Зробити калькулятор

користувач послідовно вводить 
- переше число
- дрге число
- один з варіантів - + * /

Для кожної математичної дії зробіть окрему функію
весь калькулятор - окрема функція, роль якої - спитати користувача два числа
*/

function calculator() {
  const operand1 = Number(prompt("Введіть перше число"));
  const operand2 = Number(prompt("Введіть друге число"));
  const action = prompt("Введіть потрібну дію: +, -, *. /");

  let result; // тут буде лежать остаточний результат

  switch (action) {
    case "+": {
      result = sum(operand1, operand2);
      break;
    }
    case "-": {
      result = substract(operand1, operand2);
      break;
    }
    case "*": {
      result = multy(operand1, operand2);
      break;
    }
    case "/": {
      result = divide(operand1, operand2);
      break;
    }
    default: {
      console.log("Сталася помилка!");
    }
  }
  console.log(result);
}
calculator();

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multy(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
