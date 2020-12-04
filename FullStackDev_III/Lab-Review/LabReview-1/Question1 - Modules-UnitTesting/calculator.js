const divideTwoNumber = (x,y)=>{
   try {
       y != 0 ? result = x/y : console.log("divisor should not be zero");
   }
   catch{
       throw "x or y is not integer";
   }
   return `divide two numbers ${x} / ${y} = ${result}`;
}   

const oddDoubler = (x)=> {
    try{
        x%2 ? result = x*x : result = 0 ;
    } 
    catch {
        throw "x is not an integer"
    }
    return `odd doubler: ${x} = ${result}`;
}

module.exports = {
    oddDoubler : oddDoubler,
    divideTwoNumber: divideTwoNumber
}
