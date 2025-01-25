//array.concat - використовується для обʼєднання двох або більше масивів і новий масив
// array.concat(array1, arry2, ..... arrayN)

const array1 = [1, 2, 3, 4];
const array2 = array1.concat([222, 888, 333], [555, 777]);
//console.log(array2);

// array.fill()- використовується для заповнення всіх елементві масиву якимсь одним значенням
// array.fill(value, start, [end]); start, end - не обовʼязкові

const array3 = new Array(5);
array3.fill(1);

// array.includes - використовується для перевірки наявності певного елементу у масиві
// array.includes(searchValue,[fromindex])

const array4 = [2, 4, 1, 5, 8, 13, 12];
console.log(array4.includes(5));

//array.indexOf - використовуєтьcя для отримання першого входження певного значення у масиві
// array.indexOf(searchElements,[fromIndex])

//console.log(array4.indexOf(12));

//array.join - використовується для створення рядка обʼєднуючи всі елементи масиву
//array.join(separator)

const array5 = ["hello", "world", 4, 2, "hi"];
array5.join();
console.log(array5.join());
//
