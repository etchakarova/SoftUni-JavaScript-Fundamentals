function printAndSum(numStart, numEnd) {
    numStart = Number(numStart);
    numEnd = Number(numEnd);
    let sum = 0;
    let sequence = '';

    for (let n = numStart; n <= numEnd; n++) {
        sum += n;
        sequence += n + " ";
    }
    console.log(sequence.trim());
    console.log(`Sum: ${sum}`);
}
printAndSum(0, 26);