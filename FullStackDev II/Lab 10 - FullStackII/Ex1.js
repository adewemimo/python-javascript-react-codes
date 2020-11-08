let appendMyArray = (array, value) => {
  try {
    array.push(value);
  }
  catch(err){
    console.log(err.message);
  }
  finally {
    console.log(`exiting..MyArray: ${array}`)
  }
};
  
appendMyArray([53,54], 55);
appendMyArray('xyz', 100);
appendMyArray({'make': 'Tesla', model: 's'}, 5);