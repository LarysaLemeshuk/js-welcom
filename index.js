//array.filter - використовується для створення нового масиву, який містить лише ті елементи, які задовільняють певні умови (не мутуючий)
//array.filter (callback)
// -> ця колбек-функція всередині filter вона повинна повертати true/false для кожного елементу масиву

const numbersArray = [5, 3, -9, 21, -5, 1, -2, 4];

// Відфільтрувати масив numbersArray, щб залишились тільки додатні числа(>0)

function filterFunction(item) {
  /*if (item > 0) {
    return true;
  } else {
    //item < 0
    return false;
  }*/
 return item > 0
}

constfilterNumbersArray = numbersArray.filter(filterFunction);