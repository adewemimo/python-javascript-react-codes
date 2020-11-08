// function with an object parameter to check a condition.
var hasFreeShipping = function(object){

    return Object.values(object) > 50 ? true : false;
}
  
hasFreeShipping({"Masks": 5.99, "HDMI Cable": 15.99});
hasFreeShipping({"XBOX Series X": 599.99});
hasFreeShipping({"Cards": 5.99, "Books": 25.99, "Yoga Mat":20.00});
  