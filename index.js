// У нас є юзер

const userTelephone1 = "3802675434567";
const userTelephone2 = "3802675434577";
const userTelephone3 = "3802675434555";

const userTelephones = {
  0: "3802675434567",
  1: "3802675434577",
  2: "3802675434555",
};

// Масив (Array)

// Оголошення Масиву

// Перший спосіб

const arr = [2, 4, 6, 7];

// Другий спосіб

const arr2 = new Array(2, 4, 6, 7);

// Способи доступу до елементів масиву

arr[0]; // зчитування значень елементів масиву
arr[0] = 200; //присвоєння нових значень для елементів масиву

//Задача: вивести всі значення елементів масиву в консолі

// варіант 1
/*
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
*/

// варіант 2
/*
for( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
    */

// Задача: у нас є масив чисел. Вичести на консоль тільки парні числа цього масиву

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numberArray.length; i++) {
    if(numberArray[i] % 2 === 0){
        console.log(numberArray[i]);
    }
}

