function maxNumber(arr) {
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        let currentElement = arr[i]
        let isTopInteger = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            if (currentElement <= nextElement) {
                isTopInteger = false;
                break;
            }

        }
        if (isTopInteger) {
            arr2.push(currentElement);
        }
    }
    console.log(arr2.join(' '))
}
maxNumber([14, 24, 3, 19, 15, 17]);