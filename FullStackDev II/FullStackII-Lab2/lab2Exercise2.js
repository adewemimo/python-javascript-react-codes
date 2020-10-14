//function to check if parameter is a number.

function helloWorlds(num){
    if (Number.isInteger(num)){
      for (counter = 1; counter <= num; counter++){
        console.log("Hello World!");
      }
    }
    else{
      console.log("Goodbye World.")
    }
}
  
helloWorlds(5);
helloWorlds(true);
helloWorlds("hello");
helloWorlds(null);
helloWorlds(undefined);
helloWorlds("5");
  
  