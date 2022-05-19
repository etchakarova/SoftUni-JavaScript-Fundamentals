function companyUsers(input) {
    let result = {};
    for (let line of input) {
        let [company, id] = line.split(" -> ");
        if (result.hasOwnProperty(company)) {
            let existing = result[company];
            existing.add(id);
        } else {
            let ids = new Set();
            ids.add(id);
            result[company] = ids;
        }
    }
    let sorted = Object.keys(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let company of sorted) {
        console.log(company);
        let ids = Array.from(result[company]);
        for (let id of ids) {
            console.log(`-- ${id}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
console.log('---');
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]); 