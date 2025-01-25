// Мутація - зміна
// Мутабельне - те, що можна змінити
// Іммутабельне - те, що не може бути змінено

const user = {// обʼєкти мутабельні
    name: 'John',
    lastName: 'Doe'
}

user.isHungry = false;

// примітивні типи (String, Number, Boolean, Null, Undefined, Symbol, Bigint) - іммутабельні

const userName = 'John Doe';
userName.isHungry = false;
