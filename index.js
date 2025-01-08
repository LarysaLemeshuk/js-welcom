/*

Дано правильний пароль = qwerty1234

prompt
заритуйте у користувача пароль через prompt, поки пароль, який вводить користувач, не співпаде з тим паролем, який лежить у змінній

*/

const correctPassword = "qwerty1234";
/*
const userPass = prompt('Введіть свій пароль');

while(userPass !== correctPassword){
    userPass = prompt('Введіть пароль ще раз');
}
*/

/*
while(true){
    const userPass = promt('Введіть свій пароль')
    if(userPass === correctPassword){
        break;
    }
}
    */

let isPasswordCorrect = false;
while(!isPasswordCorrect ){// isPasswordCorrect === false
    const userPass = prompt('Введіть свій пароль')

    if(userPass  === correctPassword){
        isPasswordCorrect = true;
    }
}
