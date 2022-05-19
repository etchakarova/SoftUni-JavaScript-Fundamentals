function numbers(arr) {
    let list = arr.shift();
    list = list.split(" ").map(Number);
    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i];
        commands = commands.split(" ");
        let currentCommand = commands[0];
        let num = Number(commands[1]);
        if (currentCommand === "Add") {
            list.push(num);
        } else if (currentCommand === "Remove") {
            if (list.includes(num)) {
                let indexOfNum = list.indexOf(num)
                list.splice(indexOfNum, 1);
            } else {
                continue;
            }
        } else if (currentCommand === "Replace") {
            if (list.includes(num)) {
                let indexOfNum = list.indexOf(num);
                list.splice(indexOfNum, 1, Number(commands[2]))
            } else {
                continue;
            }
        } else if (currentCommand === "Collapse") {
            let newArr = []
            for (let char of list) {
                if (char > num) {
                    newArr.push(char)
                }
            }
            list = newArr
        } else if (currentCommand === "Finish") {
            console.log(list.join(" "));
            break; 
        }
    }
}
numbers([
    "1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"
]);

numbers([
    "1 20 -1 10",
    "Collapse 8",
    "Finish"
])

numbers([
    "5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"
])