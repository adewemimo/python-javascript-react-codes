var allowedIntoMovie = function(age, isSupervised){
    if (age >=15 || isSupervised === true){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  allowedIntoMovie(14, true);
  allowedIntoMovie(14, false);
  allowedIntoMovie(16, false);