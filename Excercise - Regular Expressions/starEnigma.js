function starEnigma(input) {
    let inputCount = input.shift();
    let attackedArr = [];
    let destroyedArr = [];
    for (let i = 0; i < inputCount; i++) {
        let key = 0;
        for (let char of input[i]) {
            let lowerChar = char.toLowerCase();
            if (lowerChar === "s" || lowerChar === "t" || lowerChar === "a" || lowerChar === "r") {
                key++
            }
        }
        let newSequence = [];
        for (let char of input[i]) {
            let newCharSymbol = char.charCodeAt(0) - key;
            let newChar = String.fromCharCode(newCharSymbol);
            newSequence.push(newChar);
        }
        newSequence = newSequence.join("");
        let pattern = /[^@\-!:>]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[A-Z])![^@\-!:>]*->(?<soldierCount>\d+)[^@\-!:>]*/g;
        let match = pattern.exec(newSequence);
        while (match !== null) {
            if (match.groups.type === "A") {
                attackedArr.push(match.groups.name)
            }
            if (match.groups.type === "D") {
                destroyedArr.push(match.groups.name)
            }
            match = pattern.exec(newSequence)
        }
    }
    let sortedAttahcedArr = attackedArr.sort((a, b) => a.localeCompare(b));
    let sorteddestroyedArr = destroyedArr.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${sortedAttahcedArr.length}`);
    for (let planet of sortedAttahcedArr) {
        console.log(`-> ${planet}`)
    }
    console.log(`Destroyed planets: ${sorteddestroyedArr.length}`)
    for (let planet of sorteddestroyedArr) {
        console.log(`-> ${planet}`)
    }
}
starEnigma([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
console.log('---');
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);