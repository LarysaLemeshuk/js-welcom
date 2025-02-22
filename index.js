//Задача : написати функцію суми додатніх чисел

/**
 * Функція знаходить суму двох додатніх чисел
 * @param {number} a перший доданок
 * @param {number} b другий доданок
 * @returns {number} сума
 * @throws {RangeError} якщо a або b - не є цілим числом
 * @throws {TypeError} якщо a або b - не є числом
 */

function sumOfPositiveNumber(a, b) {
  if (a < 0 || b < 0) {
    // маємо "викинути" помилку
    const error = new RangeError('Якесь з чисел менше 0');
    console.log(error); // return, тільки дляя помилок
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError(' Параметри a та b мають бути числами!');
  }
  return a + b;
}

// throw < обʼєкт помилки>
// throw - кинути

try {
  //прописуєту код, очікуючи, що тут може виникнути помилка
  sumOfPositiveNumber(1, -2);
} catch (error) {
  console.log(error.massage);
}

console.log('Usual code flow');
