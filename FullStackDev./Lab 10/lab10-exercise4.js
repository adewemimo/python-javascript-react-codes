var fixedPi = function(num){
    return (Math.PI).toFixed(num);
    // correction to make sure the output is a number
    // use Number((Math.PI).toFixed(num))
  }
  
  fixedPi(5);
  fixedPi(4);
  fixedPi(15);
  