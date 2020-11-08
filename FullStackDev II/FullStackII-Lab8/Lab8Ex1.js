//working with object as paremeter and augument 
let city1 = {
    name: "Toronto",
    population: "6,197,000",
    continent: "North America"
  
    };
  
let city2 = {
    name: "venice",
    population: "261,905",
    continent: "Europe"
  
    };
  
var findFacts = function(city){
    console.log(city.name + " has a population of " + city.population + " and is located in " + city.continent)
     }
  
findFacts(city1);
findFacts(city2);