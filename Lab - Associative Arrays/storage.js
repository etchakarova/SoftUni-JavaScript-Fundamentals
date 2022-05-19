function storage(arr) {
    let result = new Map();
    for (let line of arr) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (result.has(product)) {
            let existing = result.get(product);
            result.set(product, quantity + existing);
        } else {
            result.set(product, quantity);
        }
    }
    for (let [product, quantity] of result) {
        console.log(`${product} -> ${quantity}`)
    }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
console.log('---');
storage([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);