// using the object constructor pattern to create an object.
var Car = function(object){
    this.brand = object["brand"];
    this.model = object["model"];
    this.getBrand = function(){
      console.log("The manufacturer is: " + this.brand);
    }
    this.getModel = function(){
      console.log("The model is: " + this.model);
    }
  }
  
var telsa = new Car({"brand":"Tesla", "model": "S"});
telsa.getBrand();
telsa.getModel();
  
var camaro = new Car({"brand":"chevy", "model": "Camaro"});
camaro.getBrand();
camaro.getModel();
  