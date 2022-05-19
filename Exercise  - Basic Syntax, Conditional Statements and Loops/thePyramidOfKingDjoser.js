function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let rows = 1;

    for (let side = base; side > 2; side -= 2) {
        let currentOuter = side * 4 - 4;
        stone += side * side - currentOuter;
        if (rows % 5 === 0) {
            lapis += currentOuter;
        } else {
            marble += currentOuter;
        }
        rows++;
    }

    if (base % 2 === 1) {
        gold = 1;
    } else {
        gold = 4;
    }

    console.log('Stone required: ' + Math.ceil(stone * increment));
    console.log('Marble required: ' + Math.ceil(marble * increment));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis * increment));
    console.log('Gold required: ' + Math.ceil(gold * increment));
    console.log('Final pyramid height: ' + (rows === 1 ? increment : Math.floor(rows * increment)));
}
thePyramidOfKingDjoser(11, 0.75);