'use strict';
//strict mode

console.log(this); // => window

// this  у глобальній області видимості посилається на обʼєкт Window

function test() {
  // Function Declaration
  console.log(this); // => undefind
}

test();

//Function Expression
const test2 = function () {
  console.log(this); // undefined
};

test2();

console.log(this); // window

// весь код, оточений фігурними дужками - контекст виконання

/*
Strict mode запустив такий механізм, що у Function Declaration ta Function Expression зʼявляється свій власний контекст виконання
контекстом виконання функції стає сама функція, а не глобальний обʼєкт window
*/

// Arrow Function
const test3 = () => {
  console.log(this); //this  вказує на глобальний обʼєкт Wndow
  // Стрілочна функція не має свого власного контексту виконання
};

test3();

const newpaper = {
  title: 'News news news...',
  articles: [
    {
      author: 'John Doe',
      date: '25-08-2023',
      text: 'lorem',
    },
    {
      author: 'Richard Doe',
      date: '23-08-2023',
      text: 'lorem',
    },
    {
      author: 'Sam Doe',
      date: '25-08-2023',
      text: 'lorem',
    },
  ],
  showArticles: function () {
    this.articles.forEach((item, inex) => {
      console.log(`${this.item} ${index} - ${item.autor}`);
    });
  },
};

newspaper.showArticles();
