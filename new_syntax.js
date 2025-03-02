/*

Напишіть клас RangValidator.

У класі має бути 2 властивості: From, to
From, to - числа, за типом даних.

Завдання: реалізувати сеттери та геттери для обох властивосей
реалізувати звичайний метод getRange, який має повертати масив цілих чисел з цього діапазону

const object1 = new RangeValidator(2, 5);
object1.getRange();// [2, 3, 4, 5]

*/

class RangValidator {
  constructor(from, to) {
    this.to = to;
    this.from = from;
  }

  set from(value) {
    if (typeof value !== 'number') {
      throw new TypeError('From ust be a number');
    }
    if (value > this._to) {
      throw new RangeError('From must be a larger than to');
    }
    this._from = value;
  }

  set to(value) {
    if (typeof value !== 'number') {
      throw new TypeError('To must be a number');
    }
    this._to = value;
  }

  getRang() {
    const arr = [];
    for (let i = this.from; i <= this.to; i++) {
      arr.push(i);
    }
    return arr;
  }
}

