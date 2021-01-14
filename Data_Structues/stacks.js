// functions used in stack include: push, pop, peek, length

var letters = []; //this is our stack using array
var word = 'freeCodeCamp';
var rword = '';

// put letters of word into stack using the push function
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off the stack in reverse order
for (var i = 0; i < letters.length; i++) {
  rword += letters.pop();
}

rword === word
  ? console.log(`${word} is a palindrome.`)
  : console.log(`${word} is not a palindrome`);

//code 2: code to create a stack
var Stack = function () {
  this.count = 0;
  this.storage = {};

  //adds a value onto the end of the stack
  this.push = function(value) {
    console.log(value);
    this.storage[this.count] = value;
    this.count++;
  };

  //Remove and returns the value at the end of the stack
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = () => {
    return this.count;
  };

  //Returnd the value at the end of the stack
  this.peek = () => {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('freeCodeCamp');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
