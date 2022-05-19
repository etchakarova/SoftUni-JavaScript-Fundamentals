function storeProvision(currentStock, deliveredStock) {
    let storedProducts = {}
    for (let i = 0; i < currentStock.length; i += 2) {
        let currentProduct = currentStock[i];
        storedProducts[currentProduct] = Number(currentStock[i + 1])
    }
    for (let i = 0; i < deliveredStock.length; i += 2) {
        let currentProduct = deliveredStock[i];
        if (!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += Number(deliveredStock[i + 1]);
    }
    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
console.log("---")
storeProvision(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);