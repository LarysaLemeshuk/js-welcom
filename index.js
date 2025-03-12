class MyArray {
  constructor() {
    this.length = 0;
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  }

  pop() {
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
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  map(callback) {
    // 1. Просто створили новий масив - він буде результуючим масивом
    const resultArray = new MyArray();

    // 2. ПРойтись по поточному масиву від початку до кінця
    for (let i = 0; i < this.length; i++) {
      // Запихуємо у результуючий масив значення, ке нам буде повертати (return) колбек
      resultArray.push(callback(this[i], i, this));
    }

    // 3. ПОвернути як результат роботи методу map - результуючий масив
    return resultArray;
  }
}

const arr = new MyArray();

arr.push(3, 2, 1, 2, 3);

// Задача: створити новий масив, який буде містии квадрати чисел з масиву arr

const doubleNumbers = arr.map(item => item ** 2);
