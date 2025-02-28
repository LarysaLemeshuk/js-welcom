/*
class MyClass{
   // методи класу
   constructor(){
   
   }
   method1(){....}
   method2(){....}
   method3(){....}
}
   const user = new MyClass();
*/

class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  getFullname() {
    return `${this.name} ${this.lastName}`;
  }
}

const user1 = new User('Alex', 'Dane', 20);
const user2 = new User('Dari', 'Dane', 23);

/*

Правила класів:

1. constructor() при створені класу - обовʼязковий
2. Ми не можемо самостійно звернутись до конструктора
3. Конструктор має бути тільки один
4. Як і у функціях-конструкторах, назва класу пишеться з великої літери

*/

/*
Написати клас Worker
у працівнтка є імʼя, прізвище, ставка за робочий день і кількість відпрацьованих днів у цьому місяці
Метод, який повертає зарплатню за поточний місяць
*/

const MIN_ZP = 7100;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZP / WORK_DAYS;

class Worker {
  constructor(name, lastName, rate = MIN_RATE, days = WORK_DAYS, coefficient) {
    this.name = name;
    this.lastName = lastName;
    this.rate = Number(rate.toFixed(2));
    this.days = days;
    this.coefficient = coefficient;
  }
  getSalary() {
    if (coefficient) {
      return this.rata * this.days;
    } else {
      return this.rate * this.days;
    }
  }
}

const worker1 = new Worker('John', 'Doe', 300, 21);
const worker2 = new Worker('Savanna', 'loe');

/*
Параметри за замовчуванням
*/
function sum(a = 10, b = 5) {
  return a + b;
}

console.log(sum()); // 15
console.log(sum(3, 6)); //  9
console.log(sum(5)); // 10

/*
Клас авто
Клас паливо

Задача: порахувати загальну вагу автомобіля (вага авто + вага палива)
*/

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }
  getWeight() {
    return this.volume * this.density;
  }
}

const benzin = new Fuel(50, 0.9);

class Auto {
  constructor(name, ownWeight, fuel) {
    this.name = name;
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }
  // метод, який обчислює повну вагу авто: його власна вага ownWeight + вага палива
  getFullWeight() {
    return this.ownWeight + this.fuel.getWeight();
  }
}

const bmw = new Auto('BMW', 4000, benzin);
