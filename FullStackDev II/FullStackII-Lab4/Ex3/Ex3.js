const displayAlert = function () {
    window.alert("Hi, This is an alert box");
}

const displayPrompt = function () {
    window.prompt("Hi, this is a prompt box");

}

const displayConfirm = function () {
    if (window.confirm("Do you really want to close the browser")){
        window.close()
    }
    

}