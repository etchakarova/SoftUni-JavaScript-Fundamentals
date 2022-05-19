function searchForANumber(arr, specialArr) {
    let newArr = arr.slice(0, specialArr[0]);
    newArr.splice(0, specialArr[1]);
    let count = 0;
    for (let char of newArr) {
        if (char === specialArr[2]) {
            count++;
        }
    }
    console.log(`Number ${specialArr[2]} occurs ${count} times.`)

}
searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);
searchForANumber(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]
);