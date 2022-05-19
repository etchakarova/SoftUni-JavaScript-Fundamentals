function rightPlace(word1, character, word2) {
    let newWord1 = word1.replace("_", character);
    let result = newWord1 === word2 ? "Matched" : "Not Matched";
    console.log(result)

}
rightPlace('Str_ng', 'I', 'Strong');