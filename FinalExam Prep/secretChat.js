function secretChat(input) {
    let hiddenMessage = input.shift();
    while (input[0] !== "Reveal") {
        let commandLine = input.shift().split(":|:")
        let name = commandLine[0];
        let p1 = commandLine[1];
        let p2 = commandLine[2];
        if (name === 'InsertSpace') {
            let index = p1;
            let firstPart = hiddenMessage.slice(0, index);
            let secondPart = hiddenMessage.slice(index)
            hiddenMessage = firstPart + " " + secondPart;
            console.log(hiddenMessage);
        } else if (name === "Reverse") {
            let str = p1;
            if (hiddenMessage.includes(str)) {
                hiddenMessage = hiddenMessage.replace(str, "");
                let newStr = str.split("").reverse().join("");
                hiddenMessage = hiddenMessage + newStr;
                console.log(hiddenMessage);
            } else {
                console.log("error");
            }
            continue;

        } else if (name === "ChangeAll") {
            let substring = p1;
            let replacement = p2;
            while (hiddenMessage.includes(substring)) {
                hiddenMessage = hiddenMessage.replace(substring, replacement);
            }
            console.log(hiddenMessage);
        }
    }
    console.log(`You have a new text message: ${hiddenMessage}`)
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('---');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);