function equalArrays(arr1, arr2) {
    let sum = 0;
    for (i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        sum += arr1[i]
        for (j = 0; j < arr2.length; j++) {
            arr2[i] = Number(arr2[i])
            if (arr1[i] !== arr2[i]) {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                return;
            }
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['1'], ['10']);