// increment, decrement

let superNumber = 1;

// задача - збільшити значення змінної на 1
superNumber++;
// значення збільшується на 1
// інкремент - операція, яка використовується для збільшення числа на 1.
// дектремент - операція, яка використовується для зменшення числа на 1.
superNumber--; // 1 - 1 = 0
// значення зменшуєься на 1

//prefix
++superNumber// інкремент буде виконано першим, потім всі інші операції
--superNumber// декремет буде виконано першим, потім всі інші операції

//postfix
superNumber++;// Спочатку буде використано значення змінної, а після завершення операції змінна інкрементується
superNumber--;//Спочатку буде використано значення змінної, а після завершення операції змінна декрементується

console.log(--superNumber);//1 - 1 = 0







let k = 0;
// задача: збільшити значення к на 3
k = k + 3;//3

//задача: зменшити значення к на 3
k = k - 2;//-2

//задача: збільшити значення к на 3
k +=3;//k = k + 3

//задача: зменшити значення к на 3
k -= 2;//k = k - 2

k *= 4;//k = k * 4

k /= 5;//k = k / 5

// унарні оператори
-k;
+k;

// + як оператор приведення строки до числа
//let thisIsNumber = +'455'; //bad practice
let thisIsNumber = Number('455'); // good practice
console.log(thisIsNumber);

/*

"+"  - оператор додавання
"+"  - оператор конкатенації

Унарний "+" - оператор привведення строки до числа

*/
