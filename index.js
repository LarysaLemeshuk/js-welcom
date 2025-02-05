/*
Cтворити новий масив, кожен елемент якого = елемент із старого масиву * 2
*/

const oldArray = [2, 3, 4, 5, 1, 2]; // old array

const newStr = oldArray
  .map((item) => {
    return item * 2;
  })
  .reverse()
  .join(","); // chaining(map -> reverse)

// Змінити порядок слідування елементів в масиві на протилежний
// Потрібно зробити з маисва - рядок, розділений комами
