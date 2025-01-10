/*
Задача 1 
Написати функцію, яка приймає 2 числа (діапазон) і виводть на консоль всі числа з цього діапазону , які діляться на 5

*/
/*
function printNumberDivisibleBy5(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

printNumberDivisibleBy5(10,)
*/

function count() {
  let numberOne = Number(prompt("Введіть число один"));
  let numberTwo = Number(prompt("Введіть число два"));
  if(numberOne < numberTwo){
    console.log('почтковечисло повинно бути менше за кінцеве число');
    return;//дострокове завершення функції
  }

  for (let it = numberOne; it <= numberTwo; it++) {
    if (it % 5 === 0) {
      console.log(it);
    } else {
      console.log('Число ' + it + 'не  кратне 5');
    }
  }
  alert("Результат: " + it);
}
count();
