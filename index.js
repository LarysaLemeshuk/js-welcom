

const user1 = {
firstName: 'Alex',
lastName: 'Doe',
id: 1
}

const user2 = {
firstName: 'John',
lastName: 'Doe',
id: 1
}

const johnMessages = ['hello', 'How are you'];
const alexMessages = ['hi!', 'I`m fine'];


/*
 Задача: за допомогою мапи звʼязати користувача з його повідамленями,
  щоб по Id користувача можна булотзнайти його повідомлення
*/


const messageMap = new Map();
 
messageMap.set(user1.id, alexMessages);
messageMap.set(user2.id, johnMessages);