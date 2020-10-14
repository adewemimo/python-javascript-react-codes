const speakHacker = function (str){
    for (i=0; i < str.length; i++){
        switch (str[i]){
            case "a": 
                str = str.replace(str[i], "4");
                break;
            case "e" :
                str = str.replace(str[i], "3");
                break;
            case "i" :
                str = str.replace(str[i], "1");
                break;
            case "o" :
                str = str.replace(str[i], "0");
                break;
            case "s" :
                str = str.replace(str[i], "5");
                break;
        }
    
    }
    console.log(str);
    
} 
  
speakHacker("Long Weekend!");
speakHacker("matrix 4 is coming out");
speakHacker("marvel movies are delayed");