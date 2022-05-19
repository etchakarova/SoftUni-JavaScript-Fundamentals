function cardGame(input) {
    let result = {};

    for (let line of input) {
        let [person, cards] = line.split(': ');
        cards = cards.split(", ");
        if (result.hasOwnProperty(person)) {
            let existing = result[person]
            for (let card of cards) {
                existing.add(card)
            }
        } else {
            let cardsResult = new Set();
            result[person] = cardsResult;
            for (let card of cards) {
                cardsResult.add(card);
            }
        }
    }
    for (let person in result) {
        let cards = Array.from(result[person]);
        let valueOfFirst = 0;
        let valueOfSecond = 0;
        let sumOfValues = 0;
        for (let card of cards) {
            let first = card.slice(0, -1);
            let second = card.charAt(card.length - 1);
            if (first.charCodeAt(0) >= 50 && first.charCodeAt(0) <= 57) {
                valueOfFirst = Number(first);
            } else if (first === "J") {
                valueOfFirst = 11;
            } else if (first === "Q") {
                valueOfFirst = 12;
            } else if (first === "K") {
                valueOfFirst = 13;
            } else if (first === "A") {
                valueOfFirst = 14;
            } else if (first == 10) {
                valueOfFirst = Number(first)
            }
            if (second === "S") {
                valueOfSecond = 4;
            } else if (second === "H") {
                valueOfSecond = 3;
            } else if (second === "D") {
                valueOfSecond = 2;
            } else if (second === "C") {
                valueOfSecond = 1;
            }
            let valueOfCards = valueOfFirst * valueOfSecond;
            sumOfValues += valueOfCards;
        }
        console.log(`${person}: ${sumOfValues}`)
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log('---');
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);