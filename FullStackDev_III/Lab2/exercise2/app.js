const calculator = require("./calculator");
const comparer = require("./comparer");


const calculateOperation = function (num1, num2) {
    comparer.num1 = num1;
    comparer.num2 = num2;
    console.log(`Comparing two numbers: ${comparer.num1}, ${comparer.num2}`)

    comparer.AreNumberEqual(comparer.num1, comparer.num2);

    if (comparer.answer) {
        console.log(`Numbers are equal`);
        calculator.add(comparer.num1, comparer.num2);

    }
    else{
        console.log(`Numbers are not equal`);
        calculator.subtract(comparer.num1, comparer.num2);
}
};

calculateOperation(5,10);
calculateOperation(5,5);


