function messageDecrypter(input) {
    let numberOfMessages = Number(input.shift());
    for (let i = 0; i < numberOfMessages; i++) {
        let pattern = /^(\$|%)(?<tag>[A-Z][a-z]{3,})\1:[ ]\[(?<one>\d+)\]\|\[(?<two>\d+)\]\|\[(?<three>\d+)\]\|$/g;
        let match = pattern.exec(input[i]);
        if (!match) {
            console.log(`Valid message not found!`)
        }
        while (match !== null) {
            let firstChar = String.fromCharCode(Number(match.groups.one))
            let secondChar = String.fromCharCode(Number(match.groups.two))
            let thrirdChar = String.fromCharCode(Number(match.groups.three));
            console.log(`${match.groups.tag}: ${firstChar + secondChar + thrirdChar}`)
            match = pattern.exec(input[i])
        }
    }
}
messageDecrypter([
    "4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
]);
console.log('---');
messageDecrypter([
    "3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"
]);