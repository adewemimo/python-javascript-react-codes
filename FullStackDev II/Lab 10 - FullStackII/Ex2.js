let tryCatchFinally = () => {
  try {
    throw new Error("Throwing an error");
  }
  catch(err){
    console.error(err.name ,  err.message);
  }
  finally {
    console.log('Runs Finally')
    
  }
};
  
tryCatchFinally();