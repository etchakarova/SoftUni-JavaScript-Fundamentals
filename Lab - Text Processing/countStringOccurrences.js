function countStringOccurrences(sentance, word) {
    sentance = sentance.split(" ");
    let counter = 0;
    for (let element of sentance) {
        if (word === element) {
            counter++;
        }
    }
    console.log(counter)
}
countStringOccurrences('This is a word and it also is a sentence',
    'is');
console.log('---');
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni');