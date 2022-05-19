function piccolo(input) {
    let result = new Set();
    for (let info of input) {
        let [direction, carNumber] = info.split(", ");

        if (direction === "IN") {
            result.add(carNumber);
        } else if (direction === "OUT") {
            result.delete(carNumber);
        }
    }
    if (result.size === 0) {
        console.log(`Parking Lot is Empty`);
    }
    let sorted = Array.from(result);
    sorted.sort();
    for (let carNumber of sorted) {
        console.log(carNumber);
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
console.log('---');
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);