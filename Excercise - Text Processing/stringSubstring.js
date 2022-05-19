function stringSubstring(word, text) {
    text = text.toLowerCase();
    word = word.toLowerCase();
    text = text.split(" ");
    let isFound = false;
    for (let element of text) {
        if (element === word) {
            isFound = true;
            console.log(word);
            break;
        }
    }
    if (isFound === false) {
        console.log(`${word} not found!`)
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
);
console.log('---');
stringSubstring('python',
    'JavaScript is the best programming language'
);