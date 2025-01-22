/*
Задача 1:
зробити функцію-конструктр Country, яка приймає в якості аргументів:
- назва країни
- популяція (population)
- площа (area)
Спроектувати метод густоти населення
Густота населення = популяція цієї країни поділена на площу країни

Задача 2:
зробити функцію-конструктор авто, яку має:
-назву
-максимальну швидкість
-поточну швидкість
спроектувати методи:
- метод прискорення (accelearte) - приймає в якості аргумента певне прискорення
прискорення не може !== максимальній швидкості
- метод сповільнення (deaccelearte) - приймає в якості аргумента певне сповільнення
 при сповільненні поточна швидкість не може бути менша за нуль
 - метод упинки (stop)
*/

function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;

  this.getDensity = function (PopulationDensity) {
    return this.population / this.area;
  };
}
const UK = new Country("UNITED KINDOM", 6733300, 243610);

function Auto(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function (accelValue) {
    this.speed = this.speed + accelValue;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  };

  this.deaccelerate = function (deaccelValue) {
    this.speed = this.speed - deaccelValue;
    if (this.speed < 0) {
      this.speed = 0;
    }
    return this.speed;
  };

  this.stop = function () {
    this.speed = 0;
    return this.speed;
  };
}

const auto1 = new Auto('Audi', 300)
