function bitcoinMining(input) {
    let oneGramOfGold = 67.51
    let oneBitcoin = 11949.16;
    index = 0;
    let sum = 0;
    let dayOfFirstPurchase = 0;
    let amountOfBitcoin = 0;
    let bitcoinCount = 0;

    for (let day = 1; day <= input.length; day++) {
        let goldMined = input[index];
        index++;
        if (day % 3 === 0) {
            goldMined = goldMined * 0.70;
        }
        let earningsForDay = goldMined * oneGramOfGold;
        sum += earningsForDay;


        if (sum >= oneBitcoin) {
            if (bitcoinCount === 0) {
                dayOfFirstPurchase = day 
            }
            amountOfBitcoin = Math.floor(sum / oneBitcoin);
            bitcoinCount += amountOfBitcoin;
            sum -= (amountOfBitcoin * oneBitcoin);
        }

    }

    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (bitcoinCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);