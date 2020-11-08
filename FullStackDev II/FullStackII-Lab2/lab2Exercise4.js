// function to read current date time for 10 times.
const startClock = function(){
    do {
        for (i = 1; i <= 10; i++){
          console.log("Current time is: " + new Date().toUTCString());  
        }
  
    } while (window.confirm("Do you want to continue the clock"))
}

startClock();