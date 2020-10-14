var firstNumber = window.prompt("Input the first number");
var secondNumber = window.prompt("Input the second number");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("one of the numbers is not an integer");
}
else {
    var biggerNumber = (firstNumber > secondNumber) ? (firstNumber):(secondNumber);
    console.log("The larger of " + firstNumber + " and " + secondNumber + " is " + biggerNumber);
}



