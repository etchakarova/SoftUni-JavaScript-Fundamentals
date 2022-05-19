function coffeeLover(arr) {
    let listOfCoffees = arr.shift();
    listOfCoffees = listOfCoffees.split(" ");
    let numberOfCommands = Number(arr.shift());
    for (let i = 0; i < numberOfCommands; i++) {
        let command = arr[i];
        command = command.split(" ");
        let currentCommand = command[0];
        if (currentCommand === "Include") {
            listOfCoffees.push(command[1]);
        } else if (currentCommand === "Remove") {
            if (Number(command[2]) < listOfCoffees.length) {
                if (command[1] === "first") {
                    listOfCoffees.splice(0, Number(command[2]));
                } else if (command[1] === "last") {
                    listOfCoffees.splice(listOfCoffees.length - Number(command[2]));
                }
            } else {
                continue;
            }
        } else if (currentCommand === "Prefer") {
            let firstIndex = Number(command[1]);
            let secondIndex = Number(command[2]);
            if ((listOfCoffees.includes(listOfCoffees[firstIndex]) && (listOfCoffees.includes(listOfCoffees[secondIndex])))) {
                [listOfCoffees[firstIndex], listOfCoffees[secondIndex]] = [listOfCoffees[secondIndex], listOfCoffees[firstIndex]];
            } else {
                continue;
            }
        } else if (currentCommand === "Reverse") {
            listOfCoffees = listOfCoffees.reverse();
        }
    }
    console.log(`Coffees:`);
    console.log(listOfCoffees.join(" "))
}
coffeeLover([
    "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"

]);
console.log("---");
coffeeLover([
    "Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"
]);
console.log("---");
coffeeLover([
    "Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"
]);