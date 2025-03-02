const MIN_ZP = 7100;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZP / WORK_DAYS;

class Worker {
  constructor(name, lastName, rate = MIN_RATE, days = WORK_DAYS, coefficient) {
    this.name = name;
    this.lastName = lastName;
    this.rate = Number(rate.toFixed(2)); 

    if (days < 0 || days > 31) {
      throw new RangeError('Days must be in 0 to 31');
    }

    this.days = days;
    this.coefficient = coefficient;
  }

  // Сеттер - метод для становлення значення
  // Геттер - метод для отримання значення

  set rate(newValue) {
    // назва сеттеру - назва приватного поля БЕЗ знаку нижнього підкреслення
    if (newValue < 0) {
      throw new RangeError('rate must be a positive number');
    }
    if (typeof newValue !== 'number') {
      throw new TypeError('Rate must be a number');
    }

    // Але, всередині сеттеру ми працюємо з приватним полем
    this._rate = newValue;
  }

  get rate() {
    // назва геттеру - назва приватного поля БЕЗ знаку нижнього підкреслення
    return this._rate;
  }

  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError('Name be a string');
    }
    if (newValue === '') {
      throw new Error('Name mast be a valid');
    }
    this._name = newValue;
  }

  get name() {
    return this._name;
  }


  set lastName(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError('LastName be a string');
    }
    if (newValue === '') {
      throw new Error('LastName mast be a valid');
    }
    this._lastName = newValue;
  }

  get lastName() {
    return this._lastName;
  }

  getSalary() {
    if (coefficient) {
      return this._rate * this.days * coefficient;
    } else {
      return this._rate * this.days;
    }
  }
}

const worker1 = new Worker('John', 'Doe', 300, 21);
const worker2 = new Worker('Savanna', 'loe');

console.log(worker1.rate); // геттер

// В середині класу геттери / сеттери працюють з приватними полями
// А при зверненні до класу ззовні ми працюємо з геттерами/сеттерами


// Задача: розробити геттери та сеттери для полів days та coeficient
// передбачте перевірки в сеттерах
// перевірте роботу геттерів та сеттерів