let placeOrder = document.querySelector("#continue-button");

const isCCValid = (ccn) =>
  ccn !== null && !Number.isNaN(parseInt(ccn)) && ccn.length > 13;

window.onload = console.log("window loaded..");

var orderObj = {
  creditCardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  ccv: "",
};

const processTransaction = (ccn)=> {
  //let tr = document.createElement("tr");
  //let td = document.createElement("td");
  let td = document.querySelector(".buttonRow");
  let p = document.createElement("p");
  return promise = new Promise((resolve,reject) =>{
    if (isCCValid(ccn)) {
      if (td.contains(p) === true) 
        td.remove(1);
      p.className = "transaction-success";
      p.textContent = "transaction Successful";
      td.appendChild(p);

      resolve("Transaction was successful"); 
    }
    else{
      if (placeOrder.nextElementSibling === p)
        td.remove(1);
      p.className = "transaction-failure";
      p.textContent = "credit card is invalid";
      td.appendChild(p);

      reject("Credit Card Invalid");
    }
      
      
  })
}

const handleOrderClick = () => {
    console.log(1, "order placed..");
    orderObj.creditCardNumber = document.querySelector("#CreditCardNumber").value;
    orderObj.expiryMonth = document.querySelector("#ExpiryMonth").value;
    orderObj.expiryYear = document.querySelector("#ExpiryYears").value;
    orderObj.ccv = document.querySelector("#ccv").value;
    console.log(orderObj);
    
    processTransaction(orderObj.creditCardNumber)
      .then(result => console.log(result))
      .catch(error => console.log(error));

};


placeOrder.addEventListener("click", handleOrderClick);


