// program to find a private key with a corresponding Ethereum address that starts with "0x1234".

const ethUtil = require('ethereumjs-util');
const crypto = require('crypto');

const EthereumAddressGen = function () {
  do {
    var privateKey = crypto.randomBytes(32);
    var publicKey = ethUtil.privateToPublic(privateKey);
    var publicKeyHash = ethUtil.keccak256(publicKey);

    // to get ethereum address of 20 bytes with the prefix "0x".
    //ethereum address is needed in hex as this is the standard format
    //for storing ethereum addresses. With the prefix "0x", overall lenght is 42 in hex format
    var ethereumAddress = '0x' + publicKeyHash.slice(12).toString('hex');

    compareValue = ethereumAddress.slice(0, 6);
    //console.log(compareValue);
  } while (compareValue !== '0x1234');

  console.log(`Private Key - Byte Length: ${privateKey.length}`);
  console.log(`Public Key - Byte Length: ${publicKey.length}`);
  console.log(`Ethereum Address - Hex Length: ${ethereumAddress.length}`);
  console.log(`Private Key: ${privateKey.toString('hex')}`);
  console.log(`Public Key: ${publicKey.toString('hex')}`);
  console.log(`Ethereum Address: ${ethereumAddress}`);
};

EthereumAddressGen();
