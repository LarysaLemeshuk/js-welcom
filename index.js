const user = {
    name: 'Jone',
    lastName:'Doe',
    age: 20,
    'favorite color': 'red',
    movie:'Blue moon',
    avatar: 'http://....'
}

// for..in - використовується для перебору ключів в обʼєкті

/*

for (varieble in object){
// код, що виконується для кожої властивості
}
varieble - змінна, яка буде приймати значення ключів властивостей
object -обʼєкт, властивості ( ключі) якого ми хочемо перебрати
*/

// Задача: у обʼєкті user вивести назви всіх ключів і властивості

for(let key in user){
    console.log(`${key}---> ${user[key]}`);
}