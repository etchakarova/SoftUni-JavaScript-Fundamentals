function deckOfCards(arr) {
    let listOfCrads = arr.shift();
    listOfCrads = listOfCrads.split(", ")
    let numberOfCommands = Number(arr.shift());

    for (let i = 0; i < numberOfCommands; i++) {
        let commands = arr[i];
        commands = commands.split(", ");
        let currentCommand = commands[0];

        if (currentCommand === "Add") {
            let cardName = commands[1];
            if (listOfCrads.includes(cardName)) {
                console.log(`Card is already in the deck`);
                continue;
            } else {
                console.log(`Card successfully added`)
                listOfCrads.push(cardName)
            }

        } else if (currentCommand === "Remove") {
            let cardName = commands[1];
            if (listOfCrads.includes(cardName)) {
                let indexOfCard = listOfCrads.indexOf(cardName);
                listOfCrads.splice(indexOfCard, 1);
                console.log(`Card successfully removed`)
            } else {
                console.log(`Card not found`)
            }

        } else if (currentCommand === "Remove At") {
            let index = Number(commands[1]);
            if (index >= 0 && index < listOfCrads.length) {
                listOfCrads.splice(index, 1)
                console.log("Card successfully removed")

            } else {
                console.log("Index out of range")
            }
        } else if (currentCommand === "Insert") {
            let index = Number(commands[1]);
            let cardName = commands[2];
            if (index >= 0 && index < listOfCrads.length) {
                if (listOfCrads.includes(cardName)) {
                    console.log("Card is already added")
                } else {
                    listOfCrads.splice(index, 0, cardName)
                    console.log("Card successfully added")
                }
            } else {
                console.log("Index out of range")
            }
        }
    }
    console.log(listOfCrads.join(", "));
}
deckOfCards([
    "Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"
]);
console.log("---")
deckOfCards([
    "Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
    "2",
    "Add, Two of Clubs",
    "Remove, Five of Hearts"
]);
console.log("---")
deckOfCards([
    "Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"
]);
