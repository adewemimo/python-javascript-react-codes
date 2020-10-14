function addNumbers(x,y){
    var add = x + y ;
    console.log("The sum is " + add);
};

function subtractNumbers(x,y){
    var subtr = x - y ; 
    console.log("The difference is " + subtr);
};

function multiplynumber(x, y){
    var multipliedResult = x * y ; 
    console.log("The multiplication is " + multipliedResult);
};

function divideNumber(x,y){
    var dividedResult = x/y;
    console.log("The division is " + dividedResult);

};

function userPrompt(){

    var option = window.prompt("Do you want to add, subtract, muiltiply or divide? Input the operator sign");
    var x = window.prompt("Enter the first number");
    var y = window.prompt("Enter the second number");
     x = parseInt(x);
     y =  parseInt(y);

    if (Number.isInteger(x) && Number.isInteger(y)){

        switch (option){
            case "+" :
                console.log("Adding two numbers " + x + " and " + y);
                addNumbers(x, y);
                break;
            case "-" :
                console.log("Subtracting two numbers " + x + " and " + y);
                subtractNumbers(x,y);
                break;
            case "*":
                console.log("Multiplying two numbers " + x + " and " + y);
                multiplynumber(x, y);
                break;
            case "/" :
                console.log("Dividing two numbers " + x + " and " + y);
                divideNumber(x, y);
                break;
            default:
                console.log('Unknown operation entered');
                break;
    
        }
    

    }
    else {
        console.log("Inputs are not numbers")
    }
    
};

userPrompt()
