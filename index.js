/*

Обʼєкти

const назваОбїєкту = {
   ключ: значення
}

Обʼєкти мають
- властивості
- методи

*/

const obj = {
  color: "white",
  fontSize: 2,
};

// ООП - парадигма програмування, яка дозволяє створювати програми з використання обʼєктів

//Задачаю Опишуть обʼєкт лампочки

const bulb = {
  lightness: 200,
  power: "200W",
  cap: "small",
  on: function () {
    return "THE LIGHT ON";
  },
  off: function () {
    return "THE LIGHT OFF";
  },
};

console.log(bulb.lightness);

console.log(bulb.on());


const dog = {
    name: 'TIZIK',
    'favorit food': 'MEAT'
}

console.log(dog.name);
console.log(dog["favorit food"]);