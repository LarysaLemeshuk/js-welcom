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
}

const arr = new MyArray();

arr.forEach((item) => {
  console.log(otem ** 2);
});
