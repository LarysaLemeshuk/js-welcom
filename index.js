new Map();// < --[[[key1, valuel], [key2, value2], [key3,value3]];

// Map.prototype.entries() - метод, який поертає ітератор. Ітераор повертає пари ключ-значення для кодного елемента

const map1 = new Map([
  ['key1', 'value'],
  ['key2', 'value'],
]);
const entriesIterator = map1.entries();

entriesIterator.next().value; // ['key1', 'value']
entriesIterator.next().value; // ['key2', 'value']
entriesIterator.next().value; // value: undefined, done: true

// Map.prototype.keys - метод, який повертає ітераор з усіма ключами з обʼєкта Map

const keysIterator = map1.keys;

keysIterator.next().value; //'key1'
keysIterator.next().value; // 'key2'
keysIterator.next().value; // undefined, done: tru

// Map.prototype.values - метод, який повертає ітератор з усіма значеннями ключей з обʼєкта Мар
const valuesIterator = map1.values();

valuesIterator.next().value; // 'value1'
valuesIterator.next().value; // 'value2'
valuesIterator.next().value; // undefined, done: true

// Map.prototype.forEach - використовується для ітерації (перебору) всіх елементів у Мар і виклику певної функції (callback) для кожного елементу

// Задача: вивести на консоль мапу

map1.forEach((value, key, map) => {
  console.log('$(key} - $(value)');
});

// Map.prototype.delete - використовується для видалення пари ключ-значення з обʼєкта Мар відповідно до якогось ключа

map1.delete('key1');

console.log(map1.has('key1')); // false
console.log(map1.get('key1')); // undefined

// Map.prototype.clear -  використовується для повного очищення обʼєкта Map, видаляючи всі пари ключі: значення, які знаходяться там

map1.clear();
console.log(mapl.size); //0

// Задача: вивести на консоль мапу

console.log(...map1);
console.log(...map1.keys());
console.log(...map1.vaues());
