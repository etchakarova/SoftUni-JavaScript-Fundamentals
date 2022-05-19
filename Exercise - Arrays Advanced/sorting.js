function sorting(arr) {
    arr.sort((a, b) => a - b)
    let sortedArr = [];
    while (arr.length > 0) {
        let lastNum = arr.pop();
        let firstNum = arr.shift();
        sortedArr.push(lastNum, firstNum)
    }
    console.log(sortedArr.join(" "))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
