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

/*
Задача 3:
 Створити новий масив користувачів, обʼєкти мають бути в такому виляді:
 {
 fullName: 'Jone Doe',
 email: ...
 }
*/
function newUserObject(user){
    return {
        fullName: `${user.name} ${user.lastName}`,
        email: user.email
    }
}

 const newUsers = users.map(newUserObject)