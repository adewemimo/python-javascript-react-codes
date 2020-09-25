var numA = 10;
var numB = 20;
var numC = 5;
numAB = numA + numB;
numBA = numA * numB;
numBC = numB - numC;

 if (window.confirm("confirm you have three numbers")) {
    console.log(numAB);
    console.log(numBA);
    console.log(numBC);
 }
else {
    console.log("Cancelled")
};
         