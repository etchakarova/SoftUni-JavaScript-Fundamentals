function replaceRepeatingChars(input) {
    input = input.split("");
    let result = [];
    result.push(input[0]);
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] !== input[i + 1]) {
            result.push(input[i + 1])
        }
    }
    console.log(result.join(""))
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('---');
replaceRepeatingChars('qqqwerqwecccwd');