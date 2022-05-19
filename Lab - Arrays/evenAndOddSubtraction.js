function evenAndOddSubtraction(input) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let num of input) {
        if (num % 2 === 0) {
            sumEven += num
        } else {
            sumOdd += num
        }
    }
    console.log(sumEven - sumOdd)

}
evenAndOddSubtraction([2, 4, 6, 8, 10]);