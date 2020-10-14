//Function to check if a month contain Friday 13th

var hasFriday13 = function(month, year){
    const date = new Date(year,(month-1),13);
      if (date.getDay() == 5){
        return "it is Friday the 13th"
      }
      else{
        return "it is Crystal Lake"
      }
    
    }
    
hasFriday13(3, 2020);
hasFriday13(10, 2017);
hasFriday13(1, 1985);
  