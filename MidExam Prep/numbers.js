function numbers(sequence) {
    sequence = sequence.split(" ").map(Number);
    let sum = 0;
    let average = 0;
    let newArr = [];
    for (let char of sequence) {
        sum += char;
    }
    average = sum / sequence.length;
    for (let el of sequence) {
        if (el > average) {
            newArr.push(el)
        }
    }
    newArr.sort((a, b) => b - a);

    if (newArr.length > 5) {
        newArr = newArr.slice(0, 5);
    }
    if (newArr.length === 0) {
        console.log("No");
    }
    console.log(newArr.join(" "));
}

numbers("1");
