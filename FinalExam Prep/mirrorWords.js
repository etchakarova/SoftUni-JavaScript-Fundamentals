function mirrorWords(input) {
    let string = input[0];
    let pairCounter = 0;
    let mirrorWordsArr = [];
    let result = [];
    let pattern = /(@|#)[A-Za-z]{3,}(\1)(\1)[A-Za-z]{3,}(\1)/g;
    let match = pattern.exec(string);
    while (match !== null) {
        let pair = match[0];
        pair = pair.split("##").join("").split("@@").join("")
        let stringOfPair = pair.split("");
        stringOfPair.shift();
        stringOfPair.pop();
        let midIndex = (stringOfPair.length) / 2;
        let firstWord = stringOfPair.splice(0, midIndex);
        let secondWord = stringOfPair;
        pairCounter++

        let reversed = secondWord.reverse().join("");
        firstWord = firstWord.join("");
        if (firstWord === reversed) {
            mirrorWordsArr.push(firstWord);
            secondWord = secondWord.reverse().join("")
            mirrorWordsArr.push(secondWord);
        }
        match = pattern.exec(string);
    }
    if (pairCounter >= 1) {
        console.log(`${pairCounter} word pairs found!`)
    } else {
        console.log(`No word pairs found!`)
    }
    if (mirrorWordsArr.length <= 0) {
        console.log(`No mirror words!`)
    } else {
        for (let i = 0; i < mirrorWordsArr.length; i += 2) {
            result.push(mirrorWordsArr[i] + " <=> " + mirrorWordsArr[i + 1]);
        }
        console.log(`The mirror words are:`);
        console.log(result.join(", "));
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('---');
mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);