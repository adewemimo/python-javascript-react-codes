const add = (num1, num2) => {
    this.num1 = num1;
    this.num2 = num2;
    console.log(`adding two numbers`);
    console.log(this.num1 + this.num2);
}

const substract = (num1,num2) => {
    this.num1 = num1;
    this.num2 = num2;
    console.log(`subtracting two numbers`);
    console.log(this.num1 - this.num2);
}


module.exports = {
   add: add,
   subtract: substract
}

