/*

Детермінована функція - функція при одних і ти же аргументах у виклику повертає ЗАВЖДИ один і той самий результат

*/

function sum (a, b) {// детермінована функція
    return a + b;
}

//console.log(sum( 2, 2));
//console.log(sum( 2, 2));
//console.log(sum( 2, 2));

let variable = 5;

function addToNumberSomeVariable(number) {// недетрмінована функція
    return number + variable;
}

console.log(addToNumberSomeVariable(5));// 10
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5)); 

variable = 20;

console.log(addToNumberSomeVariable);// 25

// якщо функція працює тільки з тими даними , які в неї приходять - детермінована
//якщо функіція вилазить в світ, то в такому випадку, вона не завди може повертати один і той самий результат при одних і ти самих вхідних параметрах - недетемінована
