var orderItem = window.prompt("Would you like Coffee, Tea or Water?");
console.log("The order is " + orderItem);

switch (orderItem){
    case "Coffee":
        console.log("Total is $2.50");
        break;

    case "Tea":
        console.log("Total is $1.50");
        break;

    case "Water":
        console.log("Total is $3.00");
        break;
}
