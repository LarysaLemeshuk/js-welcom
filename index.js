const cat = {
  name: 'Barsik',
  color: 'red',
  age: 1,
};

const cat2 = {
  name: 'Murzik',
  color: 'black',
  age: 5,
};


const catMathods = {
  //прототип
  run: function () {
    console.log('Cat is run');
  },
  meow: function () {
    console.log('Meow!');
  },
};

// Як прикрутити catMathods до обʼєкту cat

cat.__proto__ = catMathods; // прототипне посилання
cat2.__proto__ = catMathods;
