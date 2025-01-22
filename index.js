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

function Country(name, population, area){
  this.name = name;
  this.population = population;
  this.area = area;

  this.getDensity = function(PopulationDensity){
    return  this.population / this.area;
  }
}
const UK = new Country ('UNITED KINDOM', 6733300, 243610);