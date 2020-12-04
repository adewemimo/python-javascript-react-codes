//Program to create transaction and send to metamask account.
const ethers = require('ethers');

//create ethers provider
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

// Private Key picked from Ganache-cli
const privateKey =
  '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';

// create a wallet
const wallet = new ethers.Wallet(privateKey, provider);

//function to send ether to metamask wallet
const transactionFunction = async (accountAddress , value) => {
  let transaction = await wallet.sendTransaction({
    to: accountAddress,
    value: ethers.utils.parseEther(value),
  });
  console.log(transaction);
};

transactionFunction('0xF5FeA46B4eE91A8d08eB2aCF10Bfc5b6a4BEcdD5', "10.0" );

