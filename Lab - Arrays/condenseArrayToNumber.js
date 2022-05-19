function condenseArrayToNumber(input) {
    while (input.length > 1) {
        let sum = 0;
        let condense = [];
        for (let i = 0; i < input.length - 1; i++) {
            sum = input[i] + input[i + 1];
            condense.push(sum)
        }
        input = condense;

    }
    if (input.length === 1) {
        input = Number(input[0])
        console.log(input)
        return;

    }
}
condenseArrayToNumber([1]);