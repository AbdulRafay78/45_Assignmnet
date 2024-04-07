interface Car {
    make: string;
    model: string;
    year: number;
    color: string;
}
let cars: Car[] = [
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
for (let car of cars) {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}`);
}
