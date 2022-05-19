function addAndSubtract(input) {
    let newArr = []
    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        originalSum += num
        if (num % 2 === 0) {
            num += input.indexOf(num)
        } else {
            num -= input.indexOf(num)

        }
        newSum += num
        newArr.push(num)
    }
    console.log(newArr)
    console.log(originalSum);
    console.log(newSum);

}
addAndSubtract([-5, 11, 3, 0, 2]);