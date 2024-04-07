var cars = [
    {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Red"
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2021,
        color: "Blue"
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2023,
        color: "Yellow"
    },
    {
        make: "BMW",
        model: "X5",
        year: 2020,
        color: "Black"
    }
];
console.log("List of Cars:");
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log("Make: ".concat(car.make, ", Model: ").concat(car.model, ", Year: ").concat(car.year, ", Color: ").concat(car.color));
}
