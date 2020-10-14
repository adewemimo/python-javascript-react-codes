const emptyArray = function (myArray){
    counter = 0;
    while (counter < myArray.length){
      myArray.pop()
  
    }
    return myArray
    
}
  
emptyArray([1,2,3]);
emptyArray(["egg", "bacon", "toast", "coffee", "random", "juice"]);