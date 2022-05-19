function reverseAnArrayOfNumbers(n, inputArr) {
    let newArr = []
    let output = '';
    for (i = 0; i < n; i++) {
        newArr.push(inputArr[i])

    }
    newArr.reverse();
    output = newArr.join(' ')
    console.log(output)
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);