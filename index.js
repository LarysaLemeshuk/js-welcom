function saySomething(howToSay, whatToSay) {
  howToSay(whatToSay);
}

//saySomething(alert, 'Hello user')
//saySomething(console.log, "hi");

// як називаються функції, які приймають інші функції в якості аргумента
//HOF -High Order Function

//як називається функція яку ми передали як аргумент
//callback - функція зворотнього виклику

// array.ForEach - використовується для перебору (ітерації) кожного елемента масиву і виконання певної дії для кожного елемента
// array.ForEach(callback)

// Задача6 у нас є масив чисел
// Кожне значення цього масиву привести в квадрат

const array = [1, 2, 3, 4, 5];

function square(a) {
  console.log(a * a);
}

array.forEach((item) => {
  console.log(item * item);
});


//array.map - працює як forEach, тільки map буде повертати новий масив
function square(a){
   return a*a 
}

 const newArray = array.map((item) =>{
    return item * item
 });

 // коли ми використовуємо map, в такому випадку, значення, яке ви повертаєте (return) з колбеку - воно і буде входити в результуючий масив
 