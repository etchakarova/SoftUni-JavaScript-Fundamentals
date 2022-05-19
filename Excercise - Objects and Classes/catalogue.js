function catalogue(arr) {
    let products = []
    for (let prouct of arr) {
        let productName = prouct.split(" : ")[0];
        let productPrice = Number(prouct.split(" : ")[1]);
        let currentProduct = {
            productName: productName,
            productPrice: productPrice,
        };
        products.push(currentProduct);
    }
    products.sort((a,b) => a.productName.localeCompare(b.productName));

    let currentLetter = '';
    for (let product of products) {
        if (product.productName.charAt(0).toUpperCase() === currentLetter){
            console.log(`  ${product.productName}: ${product.productPrice}`)
        }else {
            currentLetter = product.productName.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.productName}: ${product.productPrice}`)
 
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
console.log("---");
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);