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
    console.log(`${this.name} is running!`);
  },
  meow: function () {
    console.log(`${this.name} is meow`);
  },
};

// Як прикрутити catMathods до обʼєкту cat

cat.__proto__ = catMathods; // прототипне посилання
cat2.__proto__ = catMathods;
