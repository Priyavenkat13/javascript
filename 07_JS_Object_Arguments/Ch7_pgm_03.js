// A function to create planets

var NewCar;
var getCar;
var car1;
var car2;

NewCar = function (make, model, year, type, price) {
    return {
        make: make,
        model: model,
        year: year,
        type: type,
        price: price
    };
};

getCar = function (car) {
    return car.year + " " + car.make.toUpperCase() + " " + car.model + ": " + car.type + " priced at $" + car.price;
};

car1 = NewCar("Toyota", "Camry", 2022, "Sedan", 24000);
car2 = NewCar("Ford", "Mustang", 2024, "Coupe", 55000);

console.log(getCar(car1));
console.log(getCar(car2));



/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */