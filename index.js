function MyArray() {
  this.length = 0;
}

function MyArrayPrototype() {
  (this.push = function (value) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  }),
    (this.pop = function () {
      if (this.length > 0) {
        // зберегти останній елемент
        const lastItem = this[this.length - 1];
        // видалити останній елемент з масиву
        delete this[this.length - 1];
        // зменшити довжину масиву на 1
        this.length--;
        // повернути останній елемент
        return lastItem;
      } else {
        return undefined;
      }
    }),
    (this.forEach = function (callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
      }
    });
}

MyArray.prototype = myArrayPrototype; // рпототипне посилання

const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(3, 2, 5);

// відконсольлогувати квадрати кожного числа в масиві arr

arr.forEach((item) => {
  console.log(otem ** 2);
});

// Яка різниця між __proto__  та .prototype

// __proto__ працює тільки тоді, коли ми літерально створили обʼєкт
// .prototype - коли обʼєкти створюються за допомогою конструктора

/*
Задача 1
створити функцію-конструктор для сходів.(ladder)
обʼєкт має властивість:
currentStair - сходинка, на якій ми зараз знаходимосью Початково = 0

Має методи:
up()- піднімає на сходинку вище
down()- опускає на сходинку нижче
showStair()- показує, на якій сходинці ми зараз знаходимось
*/

function Ladder() {
  this.currentStair = 0;
}

function LadderPrototype() {
  this.up = function () {
    this.currentStair++;
    return this;
  };

  this.down = function () {
    this.currentStair--;
    return this;
  };

  this.showStair = function () {
    return this.currentStair;

  };
}

const ladder = new Ladder();

console.log(ladder.up().up().down().up().showStair());

/*
Задача 2
Перепишіть методи таким чиномБ щоб можливо було використання чейнінгу,

const ladder =  newLadder

ladder.up().up().down().up().showStair();
*/
