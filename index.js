// задача :
//в середині алерти виконати математичний розрахунок: 2 + 2 =4

//alert('2 + 2 =' + (2 + 2));

// Подвій лапки " helo"
//одинарні лапки ''
// Зворотні лапки ``
// вирази укладаються в  ${.... вираз...}

const nicname = "Vasia";

//alert('привіт' + nicname + '!');

//alert(`привіт, ${nicname}!`);

//alert(`результат: ${1+2}`);

// Задача: запитати у користувача 2 числа і вивести відповідь алертом

const one = Number(prompt('Enter first number:'));
const second = Number(prompt('Enter second number:'));

//alert(String(first) + "+" + String("second") + "=" + String(first + second));

alert(`${first} + ${second} = ${first + second}`);