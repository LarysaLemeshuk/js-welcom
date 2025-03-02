class Test {
  constructor(value1, value2) {
    this.key1 = value1;
    this.key2 = value2;
  }

  method() {
    // тіло методу
  }
  // варіант 2 для оголошення статичного методу - більш розповсюдений
  static myStaticMethod(parameter){
    // тіло функції - щось робимо
    console.log(parameter);
  }
}


// Статичні методи - це методи, якими ми можемо скористатися не відбудовуючи екземпляр класу
// В статичних методах ми не використовуємо this

/* 
Варіант 1 для оголошення статичного методу
Test.myStaticMethod = function(parameter){
    // тіло функції
    console.log(parameter);
}

Test.myStaticMethod('123');
*/


const obj1 = new Test('test1, test2'); // створення нового екземпляру класу Test

