function addNumbers(x,y){
    var add = x + y ;
    console.log("The sum is " + add);
};

function subtractNumbers(x,y){
    var subtr = x - y ; 
    console.log("The difference is " + subtr);
};

function userPrompt(){

    var option = window.prompt("Do you want to add or subtract");
    var x = window.prompt("Enter the first number");
    var y = window.prompt("Enter the second number");

    x = parseInt(x);
    y =  parseInt(y);


    switch (option){
        case "add" :
            console.log("Adding two numbers " + x + " and " + y)
            addNumbers(x, y);
            break;
        case "substract" :
            console.log("Subtracting two numbers " + x + " and " + y)
            subtractNumbers(x,y);
            break;
        default:
            console.log('Unknown operation entered')

    }

};

userPrompt()
