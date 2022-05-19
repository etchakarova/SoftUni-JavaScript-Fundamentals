function censoredWords(sentance, word) {
    while (sentance.includes(word)) {
        sentance = sentance.replace(word, "*".repeat(word.length));
    }
    console.log(sentance)
}
censoredWords('A small sentence with some words', 'small');
console.log('---');
censoredWords('Find the hidden word', 'hidden');