const user = {
  name: "Jone",
  lastName: "Doe",
  age: 20,
  "favorite color": "red",
  movie: "Blue moon",
  avatar: "http://....",
};

// for..in - використовується для перебору ключів в обʼєкті

/*

for (varieble in object){
// код, що виконується для кожої властивості
}
varieble - змінна, яка буде приймати значення ключів властивостей
object -обʼєкт, властивості ( ключі) якого ми хочемо перебрати
*/

// Задача: у обʼєкті user вивести назви всіх ключів і властивості

for (let key in user) {
  console.log(`${key}---> ${user[key]}`);
}

/*

Задача: написати функцію, яка приймає обʼєкт і виводить всв значення всіх властивостей, оформлені *....*
а ключі -"...."
*/

const obj = {
  key1: "value 1",
};

// 'key1': *value1*

function stylingObject(obj) {
  for (let key in obj) {
    console.log(`"key": *${obj[key]}*`);
  }
}
