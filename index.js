function sum(a, b) {
  return a + b;
}

let superFunction = sum; // насправді, sum - це посилання на комірку в RAM

sum(2, 4);
console.log(sum(2, 4));

console.log(superFunction(5, 5));

