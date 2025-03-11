/*

Фабричний метод - спосіб створювати обʼєкти, який дозволяє нам не вказувати конкретний клас обʼкта.
Використовуємо спеціальну 'фабрику для' обʼєктів.
Фабрика знає, який саме обʼєкт створити і повертає його нам

new Student();// не робимо!

Зверьаємось до фабрики, фабриці повідомляємо, що нам потрібно, фабрика уже буде робити нам екземпляри потрібного класу (new Student)

*/

// Абстракний клас або інтерфейс
class Animal {
  constructor(nickname) {
    this.nickname = nickname;
  }

  makeSound() {
    // абстракний метод
  }
}

class Dog extends Animal {
  constructor(nickname) {
    super(nickname);
  }
  makeSound() {
    // віртуальний метод
    console.log('гав-гав');
  }
}

// Конкретний клас для кота
class Cat extends Animal {
  constructor(nickname) {
    super(nickname);
  }
  makeSound() {
    // віртуальний метод
    console.log('Мяу-мяу');
  }
}

// Фабричний клас, який створює обʼєкти

class AnimalFactory {
   static createAnimal(type, nickname) {
    switch (type) {
      case 'dog':
        return new Dog(nickname);
      case 'cat':
        return new Cat(nickname);
      default:
        throw new Error(`Невідомий тип тварини:${type}`);
    }
  }
}

// Використання фабрики для створення обʼєктів

const factory = new AnimalFactory();

// Створити обʼєкт собаки

const dog = AnimalFactory.createAnimal('dog', 'tuzik');
dog.makeSound(); // Гав-гав

// створити обʼєкт кота

const cat = AnimalFactory.createAnimal('cat', 'Murzik');
cat.makeSound(); // Мяу-мяу
