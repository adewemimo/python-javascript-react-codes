//find the word "Nemo" in the sentence and return its position.
var findingNemo = function (mainSentence) {
    const subWord = mainSentence.split(" ").indexOf("Nemo");
    if (subWord !== -1){
      return "I found Nemo at " + (subWord+1) + "!";
    }
    else {
      return "I can\'t find Nemo :("
    }
  
  }
  
findingNemo("I am finding Nemo !");
findingNemo("Nemo is me");
findingNemo("I Nemo am");
findingNemo("Finding Dory");