function pascalCaseSplitter(input) {
    let words = [];
    let currentWord = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i].toUpperCase() !== input[i]) {
            currentWord += input[i]
        } else {
            words.push(currentWord);
            currentWord = input[i];
        }
    }
    words.push(currentWord);
    console.log(words.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('---');
pascalCaseSplitter('HoldTheDoor');
console.log('---');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');