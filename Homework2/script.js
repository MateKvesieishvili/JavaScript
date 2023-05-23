// !Problem 1


let car = {
    carColor: "Black",
    carProducer: "MERCEDES-BENZ",
    carModel: "CLS 320",
    carEngine: 2100
};

console.log(car.carModel);
console.log(car.carColor);


// !Problem 2

car.carProperty = "Mate";
delete car.carEngine;

// *console.log(car) (ეს სატესტოდ)

// !Problem 3

let names = ['Mate', 'Gio', 'Saba', 'Nino', 'Eka'];


console.log (names[2]);  // *აქ გამოტანაში რა იგულისხმეთ ვერ გავიგე

names.push("Sofo")

names.shift("Mate")

// *console.log(names) (ეს სატესტოდ)