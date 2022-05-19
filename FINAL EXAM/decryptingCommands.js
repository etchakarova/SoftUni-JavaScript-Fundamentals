function decryptingCommands(input) {
    let str = input.shift();
    for (let line of input) {
        if (line === "Finish") {
            break;
        }
        line = line.split(" ");
        let command = line[0];
        if (command === "Replace") {
            let currentChar = line[1];
            let newChar = line[2];
            while (str.includes(currentChar)) {
                str = str.replace(currentChar, newChar);
            }
            console.log(str);
        } else if (command === "Cut") {
            let start = Number(line[1]);
            let end = Number(line[2]);
            if (((start >= 0) && (start < str.length)) && (end + 1 > start) && (end + 1 < str.length)) {
                let firstPart = str.substring(0, start);
                let secondPart = str.substring(end + 1);
                str = firstPart + secondPart;
                console.log(str);
            } else {
                console.log(`Invalid indices!`)
            }
        } else if (command === "Make") {
            if (line[1] === "Upper") {
                str = str.toUpperCase();
                console.log(str)
            }
            if (line[1] === "Lower") {
                str = str.toLowerCase();
                console.log(str)
            }
        } else if (command === "Check") {
            let string = line[1];
            if (str.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`)
            }
        } else if (command === "Sum") {
            let start = Number(line[1]);
            let end = Number(line[2]);
            let sum = 0;
            if (((start >= 0) && (start < str.length)) && (((end + 1) > start) && ((end + 1) < str.length))) {
                let substring = str.substring(start, end + 1)
                for (let char of substring) {
                    let valueOfChar = char.charCodeAt();
                    sum += valueOfChar;
                }
                console.log(sum)
            } else {
                console.log(`Invalid indices!`);
            }
        }
    }
}
decryptingCommands([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
]);
console.log('---');
decryptingCommands([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
]);