const users =[{
    name: 'John',
    lastName: 'Doe',
    age: 19,
    email: 'john.doe@gmail.com'
}, {
    name: 'Jone',
    lastName: 'Doe',
    age: 22,
    email: 'jone.doe@gmail.com'
}, {
    name: 'Jackson',
    lastName: 'Doe',
    age: 55,
    email: 'jacksone.doe@gmail.com'
}]

// Задача 1: збільшити вік на 1
/*
function plusOneYear (item){
    item.age +=1;
}
array.forEach(plusOneYear)
 */

users.forEach((item) => item.age +=1);
console.log(users);
  