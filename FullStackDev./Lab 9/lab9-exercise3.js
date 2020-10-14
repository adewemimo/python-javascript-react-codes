
function promptUser(){
    var message = window.prompt("Enter a message to display");
    function DisplayMessage(message){
        if (message === null) {
            console.log("message is null")
        }
        else if (message === "") {
            console.log("message is empty")
        }
        else {
            console.log(message)
        }
    }

    DisplayMessage(message)


}

promptUser()
