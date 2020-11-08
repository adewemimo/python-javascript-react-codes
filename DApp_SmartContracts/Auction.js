var url = "http://127.0.0.1:7545";

var abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_count",
				"type": "uint256"
			}
		],
		"name": "bid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "register",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "revealWinners",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "items",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winners",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var caller;
var contractInstance;
var contractAddress = "0xc4852F8BC762a5aDf7A5CA5ef77877B1808d1d56";

var regButton = document.querySelector(".regButton");   

var itemId = document.querySelector(".itemId-uint256");
var count = document.querySelector(".count-uint256");
var bidButton = document.querySelector(".BidButton");

var items = document.querySelector(".items-uint256");
var getItemsButton = document.querySelector(".items");

var winners = document.querySelector("winners-uint256");
var getWinnersButton = document.querySelector(".winners");

var beneficiary = document.querySelector(".beneficiary");
console.log(beneficiary);
var revealWinners = document.querySelector(".revealWinners");
console.log(revealWinners);


window.onload = () => {
    provider = new Web3(new Web3.providers.HttpProvider(url));
    contractInstance = new provider.eth.Contract(abi, contractAddress);
    provider.eth.getAccounts().then((accounts) => {
        caller = accounts[0];
        console.log(caller);
        return caller
    })

}


console.log(caller);

const beneficiaryFn = () => {
    contractInstance.beneficiary;
       
    };

const registerFn = (e) => {
    e.preventDefault();
    contractInstance.methods.register().send({ from: caller, gas: 500000 }).on('receipt', () => {
        console.log("Registration done");
    });
        
    
}

const bidFn = (e) => {
    e.preventDefault();
    contractInstance.methods.bid(itemId.value, count.value)
    .send({from:caller})
    .on("receipt",()=>{
        console.log("Bid has been placed!")
        })
    .on("error",message=>{
        console.error(message)
        });
}

const revealWinnersFn = (e) => {
    e.preventDefault();
    contractInstance.methods.revealWinners().send({ from: caller, gas: 500000 }).on('receipt', () => {
        console.log("Winner Reveal");
    })
    
}


    


regButton.addEventListener("click", registerFn);
bidButton.addEventListener("click", bidFn);
//getItemsButton.addEventListener("click", getItemsFn);
//getWinnersButton.addEventListener("Click", getWinnersFn);
beneficiary.addEventListener("Click", beneficiaryFn);
revealWinners.addEventListener("Click", revealWinnersFn);









