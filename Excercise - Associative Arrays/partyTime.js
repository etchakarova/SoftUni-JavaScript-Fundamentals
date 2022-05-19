function partyTime(input) {
    let regularResult = new Set();
    let vipResult = new Set();
    let splitPoint = input.indexOf('PARTY');
    let guestList = input.splice(0, splitPoint);
    let arrivedList = input.splice(1);

    for (let person of guestList) {
        if (Number.isNaN(Number(person[0]))) {
            regularResult.add(person)
        } else {
            vipResult.add(person)
        }
    }
    for (let person of arrivedList) {
        regularResult.delete(person)
        vipResult.delete(person);
    }
    console.log(regularResult.size + vipResult.size);
    
    for (let person of vipResult) {
        console.log(person)
    }
    for (let person of regularResult) {
        console.log(person)
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
