var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");



// function to set up square to 3 or 6 based on the type of button(Easy or Hard) clicked
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		const otherButton = modeButtons[1-i];
		modeButtons[i].addEventListener("click", function(){
			otherButton.classList.remove('selected')
			this.classList.add("selected");
			this.textContent.trim() === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}



// Set the square to have diiferent colors from the colors array
/* for (i=0; i < squares.length; i++){
    // console.log(squares);
    squares[i].style.backgroundColor = colors[i]
}
//add click events on the squares using the event listerners
for (i=0; i < squares.length; i++) {  
    //console.log(squares, i);
    squares[i].addEventListener("click", function () {
        alert('option was clicked');  
    });   
}

for (i=0; i< squares.length; i++) {
    squares[i].addeventListeners('click', function() {
        //if correct block is clicked do something....    
        //if wrong block is clicked do something....  
    });
} */

//pickedColor = colors[3]; 


function changeColors(color) { 
    for (i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;  
        //messageDisplay.textContent = "You are good at guessing!"; 
    }
}

function setupSquares (){
    for (i=0; i < squares.length; i++) {
        //apply background colour to all the squares... 
        squares[i].style.backgroundColor = colors[i]   
        //enable click event on each square.....     
        squares[i].addEventListener('click', function() {
			var clickedColor = this.style.background;
            //check if the selected colour matches the default colour...
            if (pickedColor === clickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(pickedColor);
                h1.style.background = pickedColor;
    
            }         //if the user user selected wrong colour....         
            else {
                this.style.backgroundColor = "#232323";           
                messageDisplay.textContent = "Wrong Choice!";         
            }    
    
        })
    };

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);  
    return colors[random];
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}




function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

init();






