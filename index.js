// || (або)
// || бінарний оператор. boolean
// Повертає (істину) true , якщо хоча б один з операндів є істинним

// Задача - якщо вихідні або свято - то це чудовиц день для відпочинку
// Зробити висновок

const isWeekend = true;
const isHoliday = false;

if (isWeekend === true || isHoliday === true) {
  console.log("Чудовий день для відпочинку");
} else {
  console.log("Треба працюват");
}
