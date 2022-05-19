function needForSpeedIII(input) {
    let numerCars = Number(input.shift());
    let carObj = {};

    for (let i = 0; i < numerCars; i++) {
        let line = input.shift().split('|');
        let car = line[0];
        let mileage = Number(line[1]);
        let fuel = Number(line[2]);

        carObj[car] = {
            mileage,
            fuel,
        };
    }
    while (input[0] !== 'Stop') {
        let tokens = input.shift().split(' : ');
        let command = tokens[0];
        let car = tokens[1];
        if (command === 'Drive') {
            let distance = Number(tokens[2]);
            let neededFuel = Number(tokens[3]);
            if (neededFuel < carObj[car].fuel) {
                carObj[car].mileage += distance;
                carObj[car].fuel -= neededFuel;
                console.log(`${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`)
            } else {
                console.log("Not enough fuel to make that ride");
            }
            if (carObj[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete carObj[car];
            }
        } else if (command === 'Refuel') {
            let fuelToRefill = tokens[2];
            if (carObj[car].fuel + fuelToRefill >= 75) {
                console.log(`${car} refueled with ${75 - carObj[car].fuel} liters`);
                carObj[car].fuel = 75;
            } else {
                carObj[car].fuel += fuelToRefill;
                console.log(`${car} refueled with ${fuelToRefill} liters`);
            }
        } else if (command === 'Revert') {
            let kms = tokens[2];
            if (carObj[car].mileage - kms <= 10000) {
                carObj[car].mileage = 10000;
            } else {
                carObj[car].mileage -= kms;
                console.log(`${car} mileage decreased by ${kms} kilometers`);
            }
        }
    }
    for (let key of Object.entries(carObj)) {
        let car = key[0];
        let list1 = key[1];
        console.log(`${car} -> Mileage: ${list1.mileage} kms, Fuel in the tank: ${list1.fuel} lt.`);
    }
}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
console.log('---');
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);