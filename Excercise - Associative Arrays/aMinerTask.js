function aMinerTask(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (result.has(resource) === false) {
            result.set(resource, quantity);
        } else {
            let existing = result.get(resource);
            result.set(resource, existing + quantity);
        }
    }
    for(let [resource, quantity] of result){
        console.log(`${resource} -> ${quantity}`)
    }
}

/*aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log('---');*/
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);