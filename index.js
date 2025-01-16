/* способи створення обʼєкта
const cat = {// літеральне створення обʼєкта

}

const cat2 = Object();// Функція-конструктор

const cat3 = new Object(); //Функція-конструктор з оператором new
*/

const cat = {
  name: "MURZIK",
  color: "red",
  breed: "Dworovyi",
  age: 2,
  eat: function () {
    return "I am eating";
  },
  sleep: function () {
    return "I am sleeping";
  },
};

cat.age = cat.age + 1;

cat.sleep = undefined; //bad practice

delete cat.sleep; // good practice

// Adding properties

//Задача. Додати імʼя друга Музрзика до обʼєкту Мурзика

cat.friend = "TUZIK";

cat["favorite food"] = "fish";

cat.meow = function () {
  return "MEEEEOW";
};
