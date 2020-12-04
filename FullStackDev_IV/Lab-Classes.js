class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    detail(){
        return `${this.model} Engine ${this.year}`
    }
}
class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of ${this.balance}`;
    }

}

const car1 = new Car('Pontiac Firebird', 1976);
console.log(car1.detail());
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info())