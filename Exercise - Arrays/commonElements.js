function commonElements(arr1, arr2) {
    for (let char1 of arr1) {
        for (let char2 of arr2) {
            if (char1 === char2) {
                console.log(char1)
            }
        }
    }
}
commonElements(
['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);