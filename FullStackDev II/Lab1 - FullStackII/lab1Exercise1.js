// Return "Happy Hallowen" if the date is October 31st

var halloween = function (date){
    var month = date.getMonth()+1;
    var day = date.getDate();
    if (month == 10 && day == 31){
      return "Happy Halloween"
    }
    else {
      return "It is just another day"
    }
    
  }
  
  halloween(new Date ("2013/10/31"));
  halloween(new Date ("2012/07/31"));
  halloween(new Date ("2011/10/12"));