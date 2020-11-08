//writting code in ES6 format.
const difference = (givenNumber) => {
    let differenceInNumber = Math.abs(givenNumber - 13) ;
    if (givenNumber > 13)
      return differenceInNumber+= differenceInNumber ;
    else return differenceInNumber;
  }
  
console.log(difference(32));
console.log(difference(11));