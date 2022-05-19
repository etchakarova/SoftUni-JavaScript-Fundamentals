function arrayModifier(arr) {
    arr = arr.join(",").split(",");
    let initialArr = [arr[0]];
    initialArr = initialArr.join(" ").split(" ").map(Number);
    for (let i = 1; i < arr.length; i++) {
        let command = [arr[i]];
        command = command.join(" ").split(" ");
        let currentCmmand = command[0];
        let indexOne = Number(command[1]);
        let indexTwo = Number(command[2]);
        if (currentCmmand === "swap") {
            [initialArr[indexOne], initialArr[indexTwo]] = [initialArr[indexTwo], initialArr[indexOne]]

        } else if (currentCmmand === "multiply") {
            let newNumber = initialArr[indexOne] * initialArr[indexTwo];
            initialArr.splice(indexOne, 1, newNumber);

        } else if (currentCmmand === "decrease") {
            initialArr = initialArr.map(x => x - 1);

        } else if (command === "end") {
            break;
        }

    }
    console.log(initialArr.join(", "))

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
console.log('---');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);