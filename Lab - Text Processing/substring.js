function substring(word, start, count) {
    let result = word.substring(start, count + start);
    console.log(result)
}
substring('ASentence', 1, 8);
console.log('---');
substring('SkipWord', 4, 7);