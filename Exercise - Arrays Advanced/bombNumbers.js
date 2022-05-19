function bombNumbers(arr, specialArr) {
    let specialNum = specialArr[0];
    let power = specialArr[1];
    let indexOfNum = arr.indexOf(specialNum)
    while (indexOfNum !== -1) {
        let start = Math.max(0, indexOfNum - power);
        let bombLength = power * 2 + 1;
        arr.splice(start, bombLength);
        indexOfNum = arr.indexOf(specialNum)
    }
    let sum = 0;
    for (let num of arr) {
        sum += num
    }
    console.log(sum)
}
bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);

console.log("---"); bombNumbers(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);
console.log("---");
bombNumbers(
    [1, 7, 7, 1, 2, 3],
    [7, 1]
);
console.log("---");
bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);
