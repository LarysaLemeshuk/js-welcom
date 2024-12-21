// задача. написати програму яка перевіряє число на те, чи ділиться воно на 5, 3, 2

const number = Number(prompt("введіть число: "));
/*
if (number % 5 === 0) {
  console.log(number + " ділиться на 5");
} else if (number % 3 === 0) {
  console.log(number + " ділиться на 3");
} else if (number % 2 === 0) {
  console.log(number + " ділиться на 2");
} else {
  console.log("число націло не ділиться");
}
  */

// switch - спосіб реалізації вибору з декількох можливих варіантів в залежності від значення виразу
// конструкція switch використовується у випадках коли одна змінна на різні значення
/* Синтаксис

 switch(вираз - якась змінна){
   case значення_виразу: робимо щось одне;
   case значення2_виразу: робимо щось інше;
   case значення_виразу: робимо щось інше;
   default: робимл щось, якщо інші значення не підійшли
 }
 
 */

// задача. нам приходить номер місяця. За номером місяця потрібно визначити пору року

const monthNumber = 3;

switch (monthNumber) {
  case 1:
  case 2:
  case 12: {
    console.log("зима");
    break;
  }
  case 3:
  case 4:
  case 5: {
    console.log("весна");
    break;
  }
  case 6:
  case 7:
  case 8: {
    console.log("літо");
    break;
  }
  case 9:
  case 10:
  case 11: {
    console.log("осінь");
    break;
  }
  default: {
    console.log("Введи чило від 1 до 12");
    break;
  }
}
