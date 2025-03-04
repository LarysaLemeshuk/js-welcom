// ООП

/* Загальні ідеї ООП

1. ООП збудоване навколо оббʼєктів
2. Поділ потрібний для того, щоб можна було створювати, обслуговувати та перетворювати якісь частини програми, не впиваючи прицьому на інші.
3. Сенс обʼєкти у тому, що він має якісь методи, тобто він вміє щось робити, при цьому, інші обʼєкти  не знають як він це робитью
4. Обʼєкт має поняття атрибуту і методу
Атрибут - будь-які дані які зберігаються в середині обʼєкта
Методи - будь-які дії, які можна здійснювати над обʼєктом , атрибутами обʼєкта.
Атрибути зазвичай виражаються змінними, а методм виражаються функціями.
5. Оюʼєкти можна створювати за шаблоном - такі шаблони називають класами.


*/

// Геттери та сеттери - аксессори (від англ. access - доступ)

// Абстракція - коли ми зосереджуємось тільки на суттєвих для завданнях деталях (коли описуємо обʼєкт) і ігноруємо все інше.
// Чим менше характеристик у обʼєкта, тим краща абстракція, ае ключові характеристики не можна прибирати!

// Щоб працювати з абстракціями , використовують інтерфейси
// Інтерфейс - спосіб взаємодії з обʼєктом, який визначає, які операції можна здійснити з обʼєктом, які дані можна отримати або змінити

// Інкапсуляція - процес обʼєднання даних та методів в одному обʼєкті і приховування деталей реалізації від користувача

// В чому разниця між інкапсуляцією та абстракцією?
// Інкапсуляція зосереджена на організації та приховувані деталей реалізації обʼєкта
// Абстракція спрощує складність системи шляхом виділення ключових аспектів та приховуванні незначних деталей

// Спадкування - здатність до копіювання, можливість описати новий клас на основі вже існуючого

class Figure {
  constructor(sideQuantity) {
    this.sideQuantity = sideQuantity;
  }

  get sideQuantity() {
    return this.sideQuantity;
  }

  set sideQuantity(newValue) {
    if (newValue < 0) {
      throw new RangeError('Side cannot be less then 0');
    }
    this.sideQuantity = newValue;
  }
  getArea() {}
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super(3);
    this.a = a;
    this.b = b;
    this.angle = angle;
  }
  get a() {
    return this._a;
  }

  set a(newValue) {
    if (newValue < 0) {
      throw new RangeError('Side cannot be less then 0');
    }

    this._a = newValue;
  }

  get b() {
    return this._b;
  }
  set b(newValue) {
    if (newValue < 0) {
      throw new RangeError('Side cannot be less than 0');
    }
    this._b = newValue;
  }

  get angle() {
    return this._angle;
  }

  set angle(newValue) {
    if (newValue < 0) {
      throw new RangeError('Angle cannot be less than 0');
    }
    this._angle = newValue;
  }

  getArea() {
    return this.a * this.b * Math.sin(this.angle);
  }
}

class Square extends Figure {
  constructor(a) {
    super(4);
    this.a = a;
  }

  get a() {
    return this._a;
  }

  set a(newValue) {
    if (newValue < 0) {
      throw new RangeError('Side cannot be less than 0');
    }
    this._a = newValue;
  }

  getArea() {
    return this.a * this.a; // .this.a ** 2
  }
}

const square = new Square(4);
