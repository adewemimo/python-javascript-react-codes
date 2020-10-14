//function to know the realtives of Luke Skywalker

var starWarsRelations = function(relativeName){
    switch (relativeName){
      case "Darth Vader" : 
        return "Luke, I am your father";
      case "Leia" :
        return "Luke, I am your sister";
      case "R2D2" :
        return "Luke, I am your droid";
      default:
        return "I am not related to you";
    }
  }
  
starWarsRelations("Darth Vader");
starWarsRelations("Leia");
starWarsRelations("R2D2");
starWarsRelations("Seun");
  