function specialNumbers(n) {

    for (i = 1; i <= n; i++) {
        iToString = i.toString();
        let sumOfChar = 0;
        for (char of iToString) {
            sumOfChar += Number(char)

        }
        let output = ((sumOfChar === 5) || (sumOfChar === 7) || (sumOfChar === 11)) ? 'True' : 'False'
        console.log(`${i} -> ${output}`)
    }
}
specialNumbers(20);