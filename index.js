/*
Клас Людина та похідний клас студент

1. Створіть базовий клас Людини
- ПІБ
- Дата народження
- Стать

2. Створіть похідний клас Студент, який наслідує властивості класу Людина.
Додайте до класу студент такі додаткові властивості
- Рік вступу
- Номер залікової книжки
- Середній бал

3. Реалізуйте наступні методи 

В класі Людини
- gretting() - метод повертає привітання для людини, в залежності від її статі(Mr або Mrs)

В класі Студента
- is ExellentStudent() -  цей метод перевіряє, чи є студент відмінником на основі середнього балу.
Якщо середній бал студента вищий або рівний 90, то метод поверне true, в іншому випадку - false

*/

class Person {
  constructor(fullName, birthYear, gender) {
    this.fullName = fullName;
    this._birthYear = birthYear;
    this.gender = gender;
  }

  // Setters

  set fullName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Fullname must be a string');
    }
    this._fullName = value;
  }
  set birthYeaar(value) {
    // тут потрібно валідувати дату
    this._birthYear = value;
  }
  set gender(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Fullname must be a string');
    }
    this._gender = value;
  }

  // Getters

  get fullName() {
    return this._fullName;
  }
  get birthYeaar() {
    return this._birthYear;
  }
  get gender() {
    return this._gender;
  }

  // methods

  greeting() {
    let prefix; // Ми у цю змінну будемо класти або Mr або Mrs в залежності від статі
    if (this.gender === 'male') {
      prefix = 'Mr';
    } else if (this.gender === ' female') {
      prefix = 'Mrs';
    } else {
      prefix = prompt('How should we address you?');
    }
    return `Hello ${prefix} ${this.fullName}`;
  }
}

class Student extends Person {
  constructor(
    fullName,
    birthYear,
    gender,
    admissionYear,
    studentId,
    averageGrade
  ) {
    super(fullName, birthYear, gender);

    this.admissionYear = admissionYear;
    this.studentId = studentId;
    this.averageGrade = averageGrade;
  }

  // Setters

  set admissionYear(value) {
    // тут потрібно валідувати дату
    this._admissionYear = value;
  }
  set studentId(value) {
    this._studentId = value;
  }
  set averageGrade(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Average grade must a number');
    }
    if (value > 100 || value < 0) {
      throw new RangeError('Average grade must [0; 10]');
    }
    this._averageGrade = value;
  }

  //Getters

  get admissionYear() {
    return this._admissionYear;
  }
  get studentId() {
    return this._studentId;
  }
  get averageGrade() {
    return this._averageGrade;
  }

  // Methods

  isExellentStudent() {
    //варіант 1
    // if(this.averageGrade >= 90) {
    //  return true;
    //  }else {
    //   false
    //  }
    // варіант 2
    // умова ? що робимо коли умова = true : що робимо, якщо умова = false
    //const result = this.averageGrade >= 90 ? true : false;
    //return result;
    // варіант 3
    return this.averageGrade >= 90;
  }

  static calculateAveragegrate(studentsArray) {
    if (studentsArray.langth === 0) {
      return0;
    }

    // перевірка на те, чи обʼєкт масиву є екземпляр класу Student

    /* Варіант 1
    let sum = 0;
    for (let i = 0; i, studentsArray.length; i++) {
      sum += studentsArray[i].averageGrade;
    }
    return sum / studentsArray.langth;
    */

    /* Варіант 2
  studentsArray.forEach((student) => {
     sum += student.averageGrade
  })
  return sum / studentsArray.langth;
  */

    /* Варіант 3
    const sum = studentsArray.reduce((accumulator, student) => accumulator + student.averageGrade,0);
    return sum / studentsArray.langth;
    */
    return (
      studentsArray.reduce(
        (accumulator, student) => accumulator + student.averageGrade,
        0
      ) / studentsArray.langth
    );
  }
}

// створюєммо сеттер для поля
// використовуємо сеттер у конструктоі
// створюємо геттер для поля

const ivanov = new Person('Іванов Іван Іванович', 1985, 'male');
const petrov = new Person('Петров Петро Петрович', 1985, 'non binary');
const student1 = new Student(
  'Сидоров Сидр Сидорович',
  1999,
  'male',
  2021,
  'A12-f-345',
  95
);
const student2 = new Student('John Doe', 1999, 'male', 2021, 'A12-f-355', 85);
const student3 = new Student('Jane Doe', 2000, 'male', 2022, 'A12-f-445', 70);
const student4 = new Student('Josh Doe', 2000, 'male', 2022, 'A12-d-345', 77);

const students = [student1, student2, student3, student4];

/*

Реалізувати статичний метод в класі Students

Цей метод приймає масив екземплярів класу Students обчислює і повертає як результат роботи середній бал всіх студентів з масиву

*/

console.log(Student.calculateAveragegrate(students));
