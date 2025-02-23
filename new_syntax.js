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

class Worker {
  constructor(name, lastName, rata, days) {
    this.name = name;
    this.lastName = lastName;
    this.rata = rata;
    this.days = days;
  }
  getSalary() {
    return this.rata * this.days;
  }
}

const worker1 = new Worker('John', 'Doe', 300, 21);
