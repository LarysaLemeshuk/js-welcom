// && (i)
// && - бінарний оператор, повертає boolean
// && -  повертає істину тільки тоді, коли обидва операнди є істиними
// в якості операндів тут будуть умови
// якщо обитві умови будуть true --&& повертає true
// якщо хоча б одна з умов буде false -&& повертає False

/*Задача перевірити вік людини і наявність права управління авто. 
 На підставі цього висновок чи може людина сісти за руль чи ні

 Базові правила
 керування авто можливе з 18 років = для цього потрібні права
 
 */

const age = 19;
const hasLicense = false;

if (age >= 18 && hasLicense === true) {
  console.log("ви можете сідати за руль");
} else if (age <= 18) {
  console.log(" Ви не можете сідати за руль");
} else if (hasLicense === false) {
  console.log("У вас немає прав на керування т.с");
} else {
  console.log("виникла помилка");
}
