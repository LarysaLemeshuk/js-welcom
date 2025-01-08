/*

Детермінована функція - функція при одних і ти же аргументах у виклику повертає ЗАВЖДИ один і той самий результат

*/

let superImportantVariable = 50;

function sum(a, b) {
  // детермінована функція
  superImportantVariable = 20; // ця дія не має відношення до призначення функції - побічий ефект
  console.log("як справи?"); // ця дія не має відношення до призначення функції - побічий ефект
  return a + b;
}

//console.log(sum( 2, 2));
//console.log(sum( 2, 2));
//console.log(sum( 2, 2));

let variable = 5;

function addToNumberSomeVariable(number) {
  // недетрмінована функція
  return number + variable;
}

console.log(addToNumberSomeVariable(5)); // 10
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));

variable = 20;

console.log(addToNumberSomeVariable); // 25

// якщо функція працює тільки з тими даними , які в неї приходять - детермінована
//якщо функіція вилазить в світ, то в такому випадку, вона не завди може повертати один і той самий результат при одних і ти самих вхідних параметрах - недетемінована

/*

Чисті функції (pure Function

Побічні ефекти - зміни , які відбуваються під час виконання дії і мають вплив на оточуюче середовище
Побічні ефекти - зміни, які відбуваються разом х основною дією і мають вплив на оточуюче середовище
clg - розповсюджений побічний ефект
alert - розповсюджений побічний ефект
 fetch- запити на сервер або будб- які міжмережеві запити
*/

// недертміновані функції з побічними ефектами - функції з побічними ефектами

/*

Чисті функції (Pure Function)
1. детермінована функція
2. не має побічних ефектів

*/
