function wordTracker(input) {
    let words = input.shift().split(" ");
    let result = new Map();

    for (let word of words) {
        result.set(word, 0);
    }
    for (let word of input) {
        if (result.has(word)) {
            let existingCount = result.get(word);
            existingCount++
            result.set(word, existingCount);
        }
    }
    let sorted = Array.from(result);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let word of sorted) {
        console.log(`${word[0]} - ${word[1]}`)
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
console.log('---');
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);