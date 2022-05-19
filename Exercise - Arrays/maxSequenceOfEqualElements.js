function maxSequenceOfEqualElements(arr) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1 = [];
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr1.push(arr[j])
            } else {
                break;
            }
            if (arr1.length > arr2.length) {
                arr2 = arr1;
            }
        }
    }
    console.log(arr2.join(' '))
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
