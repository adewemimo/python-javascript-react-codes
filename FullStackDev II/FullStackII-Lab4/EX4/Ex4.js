const getDOMElements = function () {
    console.log(document.getElementById("menu"));
    console.log(document.getElementsByClassName("item"));
    console.log(document.getElementsByClassName('highlight'));
    console.log(document.getElementsByName("readBtn"));
    console.log(document.getElementsByTagName("h1"));
    console.log(document.getElementsByTagName("h2"));
}

getDOMElements();