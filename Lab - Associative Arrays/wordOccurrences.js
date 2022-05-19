function wordOccurrences(words) {
    let result = new Map();
    let count = 1;
    for (let word of words) {
        if (result.has(word) === false) {
            result.set(word, count);
        } else {
            let existingCount = result.get(word);
            existingCount++
            result.set(word, existingCount);
        }
    }
    let sorted = Array.from(result);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log('---');
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);