var startButton = document.querySelector("#btnStart");
var stopButton = document.querySelector("#btnStop");
var resetButton = document.querySelector("#btnReset");
var startTimeText = document.querySelector("#txtStartTime");
var endTimeText = document.querySelector("#txtEndTime");
var timerdifferentdiv = document.querySelector("#timer");
var startDate;
var endDate;


// function to format the date output
var date = function(date){
    var hours= date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var amPM;
    if (hours<12){
        amPM = "am" 
    }
    else{
        amPM = "PM"
    }
    return hours + ":"+ minutes +":" +seconds +" " + amPM

}

// Event Handler for when window is loaded
window.addEventListener("load", function(event){
    console.log("Window loaded---");

});

var time1;
var time2;

// load time at start button click
startButton.addEventListener('click', function(){
    startDate = new Date();
    var formattedStartDate = date(startDate);
    time1 = startDate.getTime();
    console.log("start timer: " + formattedStartDate);
    startTimeText.value =  formattedStartDate;
    //Remove end Time Text value when a new start click happens
    endTimeText.value = "";
   
});

//give stop sign at stop button click
stopButton.addEventListener("click",function(){
    endDate = new Date();
    console.log("end timer: " + date(endDate));
    endTimeText.value = date(endDate);

    // Difference in time in Minutes and Seconds
    time2 = endDate.getTime();
    var differentInTime = time2 - time1;
    //console.log(differentInTime)
    var totalSec = differentInTime / 1000;
    var mm = totalSec / 60;
    var ss = totalSec % 60;
    var logTime = "Duration => minutes: " + Math.floor(mm) + " seconds: " + Math.floor(ss);
    console.log(logTime);

    //Create and add time log element
    var CreateLogElement = document.createElement("p");
    CreateLogElement.textContent = logTime; 
    timerdifferentdiv.appendChild(CreateLogElement);

} );

//event handler for the reset button
resetButton.addEventListener("click", function(){
    console.log("reset button clicked")
    startTimeText.value = "";
    endTimeText.value = "";

    while (timerdifferentdiv.lastElementChild){
        timerdifferentdiv.removeChild(timerdifferentdiv.lastElementChild); 
    }
});









