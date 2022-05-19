function dungeonestDark(arr) {
    let initialHealth = 100;
    let intialCoins = 0;
    let roomNumber = 0;
    let arrToString = arr.toString().split('|')

    for (i = 0; i < arrToString.length; i++) {
        let roomArr = arrToString[i];
        let roomArrToString = roomArr.toString().split(" ")
        roomNumber++;
        if (roomArrToString[0] === "potion") {
            let diff = 100 - initialHealth
            initialHealth += Number(roomArrToString[1]);
            if (initialHealth > 100) {
                initialHealth = 100;
                console.log(`You healed for ${diff} hp.`)
                console.log(`Current health: ${initialHealth} hp.`);
                continue;
            }
            console.log(`You healed for ${roomArrToString[1]} hp.`)
            console.log(`Current health: ${initialHealth} hp.`);
        }
        if (roomArrToString[0] === "chest") {
            intialCoins += Number(roomArrToString[1]);
            console.log(`You found ${roomArrToString[1]} coins.`);
        }
        if (roomArrToString[0] !== "potion" && roomArrToString[0] !== "chest") {
            initialHealth -= Number(roomArrToString[1])
            if (initialHealth > 0) {
                console.log(`You slayed ${roomArrToString[0]}.`)
            } else {
                console.log(`You died! Killed by ${roomArrToString[0]}.`)
                console.log(`Best room: ${roomNumber}`);
                break;
            }
        }
    }
    if (roomNumber = arrToString.length && initialHealth > 0) {
        console.log(`You've made it!`)
        console.log(`Coins: ${intialCoins}`)
        console.log(`Health: ${initialHealth}`)
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);