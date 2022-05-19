function abc(arr) {
    for (let m = 0; m < arr.length; m++) {
        let firstNum = arr[m];
        let secondNum = arr[m + 1]
        let sumPairs = firstNum + secondNum
        arr.splice(0, 2, sumPairs);
        console.log(arr)

        
    }
}
abc([1, 2, 3, 4, 5, 6, 7])