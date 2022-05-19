function heartDelivery(arr) {
    arr = arr.join(",").split(",")
    let housesInNeighborhood = [arr[0]];
    housesInNeighborhood = housesInNeighborhood.join("@").split("@").map(Number);
    let startIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        let jump = [arr[i]];
        jump = jump.join(" ").split(" ");
        let currentCommand = jump[0];
        let commandLength = Number(jump[1]);
        if (currentCommand === "Jump") {
            startIndex += commandLength;
            if (startIndex > housesInNeighborhood.length - 1) {
                startIndex = 0;
            }
            housesInNeighborhood.splice(startIndex, 1, (housesInNeighborhood[startIndex] - 2));
            if (housesInNeighborhood[startIndex] === 0) {
                console.log(`Place ${startIndex} has Valentine's day.`)
            }
            if (housesInNeighborhood[startIndex] < 0) {
                housesInNeighborhood[startIndex] = 0;
                console.log(`Place ${startIndex} already had Valentine's day.`);
            }
        }
        if (currentCommand === "Love!") {
            console.log(`Cupid's last position was ${startIndex}.`);
            let failedHouses = 0;
            for (let char of housesInNeighborhood) {
                if (char !== 0) {
                    failedHouses++;
                }
            }
            if (failedHouses === 0) {
                console.log(`Mission was successful.`);
            } else {
                console.log(`Cupid has failed ${failedHouses} places.`)
            }
        }
    }
}
heartDelivery([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
]);
console.log("---")
heartDelivery([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]);
console.log("---")
heartDelivery([
    "4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"
]);