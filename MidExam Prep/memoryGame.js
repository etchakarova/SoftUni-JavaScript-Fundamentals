function memoryGame(arr) {
    let list = arr[0];
    list = list.split(" ");
    let moves = 0;
    for (let i = 1; i < arr.length; i++) {
        if (list.length < 2) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
        let sequence = arr[i];
        if (sequence === "end") {
            break;
        }
        sequence = sequence.split(" ").map(Number);
        let firstIndex = sequence[0];
        let secondIndex = sequence[1];
        moves++
        if (list[firstIndex] === list[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${list[firstIndex]}!`);
            let biggerIndex = Math.max(firstIndex, secondIndex);
            let smallerIndex = Math.min(firstIndex, secondIndex)
            list.splice(biggerIndex, 1);
            list.splice(smallerIndex, 1);
        } else if (firstIndex < 0 || secondIndex < 0 || firstIndex > (list.length - 1) || secondIndex > (list.length - 1)) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let midIndex = Math.floor(list.length / 2);
            list.splice(midIndex, 0, (-moves + 'a'));
            list.splice(midIndex, 0, (-moves + 'a'));
        } else if (list[firstIndex] !== list[secondIndex]) {
            console.log(`Try again!`);
        }
    }
    if (list.length > 0) {
        console.log(`Sorry you lose :(`)
        console.log(list.join(" "));
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);
console.log("---");
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
console.log("---");
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);