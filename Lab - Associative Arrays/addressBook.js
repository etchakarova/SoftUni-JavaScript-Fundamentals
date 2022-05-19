function addressBook(adresses) {
    let result = {};
    for (let line of adresses) {
        let [name, address] = line.split(":");
        result[name] = address;
    }
    let sortedNames = Object.entries(result);
    sortedNames.sort((a, b) => a[0].localeCompare(b[0]));
    for (let name of sortedNames) {
        console.log(`${name[0]} -> ${name[1]}`);
    }
}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
console.log('---');
addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);