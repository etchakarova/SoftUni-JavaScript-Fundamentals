function furniture(input) {
    let totalSum = 0;
    console.log(`Bought furniture:`)
    for (let line of input) {
        if (line === "Purchase") {
            break;
        }
        let pattern = />>(?<furniture>[A-Za-z\s]+)<<(?<price>\d+(.\d+))!(?<quantity>\d+)/;
        let match = pattern.exec(line);
        if (match !== null) {
            totalSum += Number(match.groups.price) * Number(match.groups.quantity);
            console.log(match.groups.furniture)
        }
    }

    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
console.log('---');
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
console.log('---');
furniture([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
]);