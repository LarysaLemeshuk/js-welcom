//практика
// у нас ж функція
function greetingUser (user){
return 'Hey ${user.name} ${user.surname}. You will be ${user.age + 1} naxt year'
}

//та обʼєкт
const user = {
    name: 'John',
    surname:'DOE',
    age: 19
}
// написати функцію greetingUser таким чином, щоб вона вітала користувача та вказалаБ скільки йому років має бути у настопному році

greetingUser(user);