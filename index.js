function MyArray(){
  this.length = 0;

  this.push = function (value){
    // значення додати у кінець масиву
    this[this.length] = value;
    this.length ++;
    return this.length;
  }
}

const arr = new MyArray();
arr.push(1);
arr.push(2);

//Перепишіть push таким чином, щоб він міг приймати та додавати до масиву будь-яку кількість переданих елементів
// arr.push(3, 2, 5, 10, 12, 33);



