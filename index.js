/*
Задача: у нас є обʼєкт, ключем в якому є день тижня, а значенням - плани на цей деь
прийняти від користувача через промпт назве тижня і видати альорт що заплановано у користувача на цей день
*/

const obj = {
  mon: "drive lesson",
  tue: "dantist",
  wed: "go to party",
  thu: "hard work",
  fri: "chill",
  sat: "go to park",
  'favorite color': 'white',
  0: 'value'
};
const userValue = prompt("введи день тижня :\n Monday = mon, /ntuesday = tue, /n...");
alert (obj[userValue] ? obj[userValue] : 'Error happened')

// опеератор in
// in - бінарний оператор
// 'key' in obj

console.log('mon' in obj);

