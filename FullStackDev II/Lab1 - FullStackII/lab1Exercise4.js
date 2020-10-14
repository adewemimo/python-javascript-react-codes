var findCase = function(inputText){
    if (inputText == inputText.toUpperCase()){
      return "upper";
    }
    else if (inputText == inputText.toLowerCase()){
       return "lower";
    }
    else{
      return "mixed";
    }
  }
  
findCase("whisper...");
findCase("SHOUT!");
findCase("Quiet Voice");