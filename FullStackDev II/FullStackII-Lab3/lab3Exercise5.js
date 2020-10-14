const hasNumber = function (myArr, num){
    return (myArr.indexOf(num) > -1) ? true : false;
  }
  
hasNumber([1, 2, 3, 4, 5],3);
hasNumber([1, 1, 2, 1, 1],3);
hasNumber([5, 5, 5, 6],5);
hasNumber([],5);