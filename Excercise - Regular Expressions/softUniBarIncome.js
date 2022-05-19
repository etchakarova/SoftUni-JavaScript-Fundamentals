function softUniBarIncome(input) {
    let totalSum = 0;
    for (let line of input) {
        if (line === "end of shift") {
            break;
        }
        let pattern = /%(?<name>[A-Z][a-z]+)%[^%$|.]*<(?<product>\w+)>[^%$.|]*\|(?<quantity>\d+)\|[^%$|.]*?(?<price>\d+(.\d+)?)\$/g;
        let match = pattern.exec(line);
        if (match !== null) {
            let name = match.groups.name;
            let product = match.groups.product;
            let sum = Number(match.groups.quantity) * Number(match.groups.price);
            totalSum += sum;
            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
console.log('---');
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);
