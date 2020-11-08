//ES6 coding: reduce method in use
const array = [1, 2, 3, 4];
calculateSum = array.reduce((sumSoFar, currentValue) => sumSoFar + currentValue , 0);
calculateProduct = array.reduce((productSoFar , currentValue) => productSoFar * currentValue, 1)
console.log(calculateSum);
console.log(calculateProduct);
