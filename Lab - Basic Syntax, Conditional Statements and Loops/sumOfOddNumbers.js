function sumOfOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
            n++
            console.log(i)
        }
    }

    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)