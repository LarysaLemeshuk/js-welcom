/* РОзробка прогами для керування книжковим магазином

 Предметна область: В кножковому магазині багато книг на продаж

 всі наші книги можна представити у вигляді обʼєкти з однаковою структурою.

 Задача: створити контсруктор обʼєктів для представлення книг з наступними властивостями
 Назва книги, автор, рік видання, ціна
 спроектувати методи для отримання і встановлення значень цих властивостей

 Задача 2: зробити для всіх книг метод, який повернув ціну книги , але зі знижкою
*/

function Book(title, author, year, price) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.price = price;

  this.getTitle = function () {
    //реалізувати перевірку права на доступ до властивості
    return this.title;
  };
  this.getAutor = function () {
    //реалізувати перевірку права на доступ до властивості
    return this.author;
  };
  this.getYear = function () {
    //реалізувати перевірку права на доступ до властивості
    return this.year;
  };
  this.getPrice = function () {
    //реалізувати перевірку права на доступ до властивості
    return this.price;
  };

  this.setTitle = function (newTitle) {
    //ралізувати перевірки на право на перейменування чи ін.
    this.title = newTitle;
  };
  this.setAutor = function (newAutor) {
    this.author = newAutor;
  };
  this.setYear = function (newYear) {
    this.year = newYear;
  };
  this.setPrice = function (newPrice) {
    this.price = newPrice;
  };

  this.calculateDiscountedPrice = function (DiscountPercentage) {
    const discountedPrice =
      this.price - this.price * (DiscountPercentage / 100);
    return discountedPrice;
  };
}

const book1 = new Book("Чотири вітри", "Крістін Генна", 2020, 450);

//console.log(book1.getTitle());
//console.log(book1.getAutor());
//console.log(book1.getYear());
//console.log(book1.getPrice());

//book1.setTitle("New Title");
//book1.setAutor("New Autor");
//book1.setYear(2025);
//book1.setPrice(350);

console.log(book1.calculateDiscountedPrice(90));