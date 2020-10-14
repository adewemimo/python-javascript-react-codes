var calculator = function(firstNum, operator, secondNum){
    if (!(isNaN(firstNum) || isNaN(secondNum) || typeof firstNum === "boolean" || typeof secondNum === "boolean")) {
        switch (operator){
            case "+" : 
                return firstNum + secondNum;
            case "-" : 
                return firstNum - secondNum;
            case "/" : 
                if (secondNum !== 0){
                    return firstNum / secondNum;
                }
                else{
                    return ("Can't divide by 0!");
                }
            case "*" : 
                console.log('4')
                return firstNum * secondNum;
            default :
                console.log('5')
                return ("Unknown operator used");
        }
    }
    else{
        return ("Enter numbers Only");
    }

}

calculator(2, "+", 2); 
calculator(2, "*", 2);
calculator(4, "/", 2);
calculator(4, "/", 0);
calculator(10, "-", 5);
calculator(true, "+", 5);
calculator(10, "+", "asdf");
calculator(false, "+", 5);
    
