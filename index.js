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

// У нас є обʼєкт юзера

const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'Kyiv',
    country: 'Ukraine',
  },
  contacts: {
    email: 'john@gmail.com',
    phone: '+380987766554443',
  },
};

// Задача: з використанням деструктуризації отримати значення: name, city, email, phone

const {
  name,
  address: { city },
  contacts: { email, phone },
} = user;

console.log(name);
console.log(city);
console.log(email);
console.log(phone);
