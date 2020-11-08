// using Object Factory Pattern to create an object.
var product = function(name, price){
    const object = {};
    object.name = name;
    object.price = price;
    object.getInfo = function(){
      console.log("The item: " + name + " costs: "+ price)
    }
    return object;
  
  }
  
  var apples = product("apples", 25);
  apples.getInfo();
  
  var soda = product("soda", 2);
  soda.getInfo();

  
  