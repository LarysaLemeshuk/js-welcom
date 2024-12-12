// Перетворення (приведення) типу даних

//перетворення типу даних - коли значення змінює тип даних з одого на інший
// Існує два ти перетворення даних явне і неявне

//неявне перетворення типів (implicit type conversio)
let num = 6 - '1';
//console.log(num);

//Явне перетворення типів ( explicit type conversion)
//(приведення типів)

let thisIsNamber =  Number ('45');

//Boolean автоматично приводиться до типу Namber при арифметичних розрахенках
//true -> 1
//false -> 0

let boolenNamber = true + 1; // 1 + 1 =2
//console.log(boolenNamber);

//String

let thisIsString = String (45); // '45'
//console.log(thisIsString);

let testString = null + '';// неявне приведення типу до string
//console.log(testString);

//Явне приведення типів краще за неявне

let test = 15 - Number('17');
//console.log(test);

//NaN - Not-a-Number
let notANumber = 2 * 'Hello'; // приведення типів неможливе, некоректна математична операція - NaN
//console.log(notANumber);

//() - оператор виклику функції
// математичні оператори (+, -, *, /)
// оператор конткатенації

// оператор typeof - дозволяє отримати тип даних операнда
let box = true;
console. log (typeof box);