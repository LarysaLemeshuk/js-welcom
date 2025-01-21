/* способи створення обʼєкта
const cat = {// літеральне створення обʼєкта

}

const cat2 = Object();// Функція-конструктор

const cat3 = new Object(); //Функція-конструктор з оператором new
*/
/*
Уогди у функціях конструкторах

1. Імʼя фукції-конструктора має починатися з великої літери
2. Функція-конструктор повинна викоуватись лише за допомогою оператора new
*/

//Задача. написати функцію-конструктор для створення кота

function Cat(name, color, breed, age) {
  this.name = name; //this - посилання на новоствореного кота
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.run = function(){
    return this.name + ' is running'
  }
}

//Задача: Створити двох котів, за допомогою функції-конструктора

const cat1 = new Cat('Bublik', 'White', 'Dworowyi', 3);
const cat2 = new Cat(`Murzik`,`black`, `siam`, 4);