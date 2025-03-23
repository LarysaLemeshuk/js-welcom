const monitor = {
  sizes: {
    height: {
      value: 30,
      scale: 'cm // 1',
    },
    width: {
      value: 50,
      scale: 'cm // 2',
    },
  },
  brightness: 750,
  refresh: {
    value: 144,
    scale: 'Grc',
  },
  color: 'black',
  resolution: '4K',
};

/*

Існує 3 види деструктуризації обʼєктів у JS:
1. Деструктуризація обʼєктів
2. Деструктуризація вхідних параметрів
3. Деструктуризація масивів

*/

function getFullName({ firstName, lastName, ...restObject}) {
  // все інше ігнорується
  return `$(firstName) $(lastName)`;
}

const user2 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 42,
  geolocation: '42.3445564 .4t66',
  browser: 'Chrome',
};

console.log(getFullName(user2));




const arr = [1, 2, 3, 4, 5, 6];
// const firstElement = arr[0];

const [firstElement, secondElement, ...restOfArr] = arr;

const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'Kyiv',
    country: 'Ukraine',
  },
  contacts: {
    email: 'john@gmail.com',
    phones: ['+38098765545667', '+380665948835', '+380988957846'],
  },
};

// const {
//   contacts: { phones },
// } = user;

// const [firstJohnNumber, secondJohnNumber, thirdJohnNumber] = phones;

const {
  contacts: {
    phones: [firstJohnNumber, secondJohnNumber, thirdJohnNumber],
  },
} = user;
