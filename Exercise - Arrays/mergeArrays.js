function mergeArrays(arr1, arr2) {
    arr3 = []
    output = "";
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            arr3.push(Number(arr1[i]) + Number(arr2[i]))
        } else {
            arr3.push((arr1[i] + arr2[i]))
        }
    }
    
    for (let j = 0; j < arr3.length; j++){
        output += arr3[j] + " - "

    }
    let result = output.slice(0, output.length-3)
    console.log(result)

    
  //  console.log(result.join(' - '))
}
mergeArrays(
['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
);