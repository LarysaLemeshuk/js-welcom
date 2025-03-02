class Animal {
  constructor(nicname, color) {
    this.nicname = nicname;
    this.color = color;
  }
  eat() {
    return `${this.nicname} is eating`;
  }
}

//class Dog extends Animal клас Собаки розирює клас Тварини ( наслідує цей клас)
class Dog extends Animal {
  constructor(nicname, color) {
   super(nicname, color);
  }
  gav() {
    return `${this.nicname} gav-gav-gav`;
  }
}

const dog = new Dog('Tuzik', 'grey');
