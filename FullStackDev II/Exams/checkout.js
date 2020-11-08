// const isCCValid = (ccn) =>
//   ccn !== null && !Number.isNaN(parseInt(ccn)) && ccn.length > 13;

window.onload = console.log("window loaded..");

var orderObj = {
  creditCardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  ccv: "",
};

const handleOrderClick = () => {
  console.log(1, "order placed");
  ccn = document.querySelector("#ccv").value;
  console.log(2, ccn);
  

  const isCCValid = (ccn) => {
    console.log(3, ccn);
    orderObj.creditCardNumber = document.querySelector(
      "#CreditCardNumber"
    ).value;
    console.log(4, ccn);
    orderObj.expiryMonth = document.querySelector("#ExpiryMonth").value;
    orderObj.expiryYear = document.querySelector("#ExpiryYears").value;
    orderObj.ccv = document.querySelector("#ccv").value;

    const processTransction = new Promise((resolve, reject) => {
      if (ccn !== null && !Number.isNaN(parseInt(ccn)) && ccn.length > 13) {
        console.log("order placed");
        console.log(orderObj);
        resolve("transaction sucessful");
      } else {
        reject("credit card is invalide");
      }
    });
    return Promise;
  };
  isCCValid(ccn);
};

let placeOrder = document.querySelector("#continue-button");
placeOrder.addEventListener("click", handleOrderClick);

/*ccn = document.querySelector("#ccv").value

    const isCCValid = (ccn) => {
        const processTransction = new Promise((resolve, reject) => {
    
            if (ccn !== null && !Number.isNaN(parseInt(ccn)) && ccn.length > 13){
                resolve("transaction sucessful"); 
            }
            else{
                reject("transaction fail")
            }
        });
        return Promise;
    }*/
