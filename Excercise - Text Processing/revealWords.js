function revealWords(words, sentance) {
    words = words.split(", ");
    for (let word of words) {
       sentance = sentance.replace("*".repeat(word.length), word)
    }
    console.log(sentance)
}
revealWords('great',
    'softuni is ***** place for learning new programming languages');
console.log('---');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');