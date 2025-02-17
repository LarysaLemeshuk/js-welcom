/* 

  Задача 1
Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'ххх' або 'viagra'
Якщо заборонених слів у рядку немає - повертається false

checkSpam ( 'buy ViAgRa now'); // true 
checkSpam( 'free xxxxxxx'); // true 
checkSpam( 'innocent rabbit'); // false

*/

function checkSpam(str) {  // variant 2

  const spamArray = ['viagra', 'xxx', 'drugs'];

  for (let i = 0; i < spamArray.length; i++) {
    if (str.toLowerCase().includes(spamArray[i])) {
      return true;
    }
  }
  return false;
}

console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxxx'));
console.log(checkSpam('innocent rabbit'));

/* 
Задача 2

Написати функцію, яка перевіряє, чи є переданий їй рядок - паліндромом. не зважаючи на регістр 
Паліндром - це коли рядок з обох сторін читається однаково

Anna - паліндром
Мата - не паліндром
Namman - паліндром
*/
