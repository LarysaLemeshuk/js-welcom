// array.sort - використовується для сортування елементів в масиві (мутуючий)
//array.sort (compareFunction)

const numbersArray = [5, 3, 9, 21, 1, 2, 4];

//задача: відсортувати масив за зростанням

array.sort(); //сортування за зростанням (unicode)
const lettersArray = ['bbb', 'abb', 'aaa', 'aba'];
lettersArray.sort();//сортуання за зростанням

function compareFunction (a, b){// функція компаратор
  // a - поточне число
  // b - наступне число, яке слідує за поточним
  if (b > a){
    // 4(a),6(b)
    //сортування за зростанням
    return -1;
  } else{// b < a
//10 (a), 5(b) ---->5, 10
 //сортування за зростанням
 return 1;
  }
}

// функція-компаратор повинна повернути одне з трьох можливих значень:
/*
-1 - спочатку число а, потім b
0 - елементи залишаються на місці
1 - спочатку йде число b, потім а

*/

numbersArray.sort(compareFunction);

const newNumbersArray = [3, 4, 1, 0, -5, 12, 13];

function compareNumbers(a, b) {
  //return a - b;// сортування за зростанням
return b -a // сортування у порядку спадання
}

newNumbersArray.sort(compareNumbers);