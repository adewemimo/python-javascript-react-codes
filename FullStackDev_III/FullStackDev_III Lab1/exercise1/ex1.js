let uc = require("upper-case");

console.log(uc.upperCase("string"));

const greeter = function(message){
    console.log(uc.upperCase(message));
}


let n = 0;
while (n < 10){
   greeter('Hello World')
    n++;
}