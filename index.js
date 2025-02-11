function MyArray(){
  this.length = 0;

  this.push = function (value){
   for(let i =0; i < arguments.length; i++){
     this[this.length] = arguments[i];
     this.length ++;
   }
    return this.length;
  }
  this.pop = function(){
    if(this.length > 0){
// зберегти останній елемент
const lastItem = this[this.length - 1];
// видалити останній елемент з масиву
delete this[ this.length -1];
// зменшити довжину масиву на 1
this.length --;
// повернути останній елемент
return lastItem;
    } else{
      return undefined;
    }
  }
  this.forEach = function(callback){
    for(let i = 0; i < this.length; i ++){
      callback(this[i], i, this)
    }
  }
}

const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(3, 2, 5,);

// відконсольлогувати квадрати кожного числа в масиві arr

arr.forEach((item)=>{
  console.log(otem ** 2);
})



