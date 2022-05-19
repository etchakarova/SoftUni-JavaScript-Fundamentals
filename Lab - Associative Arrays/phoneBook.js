function phoneBook(info) {
    let bookObj = {}
    for (let lines of info) {
        let personInfo = lines.split(" ");
        let name = personInfo[0];
        bookObj[name] = personInfo[1];
    }
    for (let key in bookObj) {
        console.log(`${key} -> ${bookObj[key]}`)
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
console.log('---');
phoneBook([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
]);