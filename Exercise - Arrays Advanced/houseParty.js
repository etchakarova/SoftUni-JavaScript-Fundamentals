function houseParty(messages) {
    let arr = [];
    for (let i = 0; i < messages.length; i++) {
        let currentInfo = messages[i].split(" ");
        let name = currentInfo.shift();
        let command = currentInfo.join(" ");
        if (command === "is going!") {
            if (arr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                arr.push(name);
            }
        }
        if (command === "is not going!") {
            if (arr.includes(name)) {
                arr.splice(arr.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(arr.join("\n"))
}
houseParty(
    ['Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!']
);
console.log("---");
houseParty(
    ['Tom is going!',
        'Annie is going!',
        'Tom is going!',
        'Garry is going!',
        'Jerry is going!']
);