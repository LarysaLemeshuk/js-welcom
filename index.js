/*
Змінна
Wariable
Переменная
*.

/*

Створення змінної

ключове слово імя змінної 

var - deprecated

let = cd-rw
const = cd-r

CD-rw
CD-R
*/

let box;

//console.log(box);// undefined

// "=" -оператор присвоєння

box = 3.9996//присвоєння (assign)

//console.log(box);//3.9996

//Можемо визначати значення змінної при її створенні
let box2 = 'HELLO WORLD';

//console.log(box2);//hello world

box2 = 236;

//console.log(box2);//236

let isActive = true;
let isLogged = false;
let isRecording = false;
isRecording = true;

//ПРисвоєння значення до іншої змінної

let x = 10;
let y; //змінна у отримує значення змінної х (у = 10)
//console.log(y); // 10

let z = 10;
let u = z;

u = 15;  // u - 15, z - 10

console.log(z);
console.log(u);

/*
Правила неймінгу змінних

1. Використовуйте осмисленні та описові імені змінних 
Нааприклад
userName, age, totalAmount

2. Викорустовуємо camelCase y JS

3.Уникайте використання однобуквенних або непояснюваних скорочень
Наприклад
x, y, zxc

4. Уникайте  пробілів та спеціальних символів у навах змінних

5. Заборонено починати назву змінної з цифри
Наприклад
let 1 box - Заборонено

*/