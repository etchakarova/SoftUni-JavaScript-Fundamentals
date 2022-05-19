function train(commands) {
    let filledWagons = commands.shift().split(" ").map(Number);
    let maxPassInWagon = Number(commands.shift());
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(" ");
        if (currentCommand[0] === "Add") {
            filledWagons.push(Number(currentCommand[1]));
        }
        currentCommand = Number(currentCommand);
        for (let k = 0; k < filledWagons.length; k++) {
            if (filledWagons[k] + currentCommand <= maxPassInWagon) {
                filledWagons[k] += currentCommand;
                break
            }
        }
    }
    console.log(filledWagons.join(" "))
}
train(
    ['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75']
);
console.log("---");
train(
    ['0 0 0 10 2 4',
        '10',
        'Add 10',
        '10',
        '10',
        '10',
        '8',
        '6']

);