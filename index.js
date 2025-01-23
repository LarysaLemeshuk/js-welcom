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
};
const userValue = prompt("введи день тижня :\n Monday = mon, /ntuesday = tue, /n...");
alert (obj[userValue] ? obj[userValue] : 'Error happened')
