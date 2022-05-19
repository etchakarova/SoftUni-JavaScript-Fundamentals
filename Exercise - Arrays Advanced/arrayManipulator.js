function arrayManipulator(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(" ");
        if (currentCommand[0] === "add") {
            arr.splice(Number(currentCommand[1]), 0, Number(currentCommand[2]));
        } else if (currentCommand[0] === "addMany") {
            let index = Number(currentCommand[1]);
            currentCommand.splice(0, 2);
            let numToAdd = currentCommand.map(Number);
            arr.splice(index, 0, ...numToAdd);
        } else if (currentCommand[0] === "contains") {
            let result = arr.indexOf(Number(currentCommand[1]))
            console.log(result);
        } else if (currentCommand[0] === "remove") {
            arr.splice(Number(currentCommand[1]), 1);
        } else if (currentCommand[0] === "shift") {
            for (let k = 0; k < Number(currentCommand[1]); k++) {
                let num = arr.shift();
                arr.push(num)
            }
        } else if (currentCommand[0] === "sumPairs") {
            let newArr = [];
            if (arr.length % 2 !== 0) {
                arr.push(0);
            }
            for (let m = 0; m < arr.length - 1; m += 2) {
                let sum = arr[m] + arr[m + 1];
                newArr.push(sum);
            }
            arr = newArr
        } else if (currentCommand[0] === "print") {
            console.log((`[ ${arr.join(", ")} ]`));
            break;
        }
    }
}
arrayManipulator(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);