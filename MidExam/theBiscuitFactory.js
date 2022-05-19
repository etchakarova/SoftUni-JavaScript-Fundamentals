function theBiscuitFactory(arr) {
    let biscuitsFromOneWorker = Number(arr[0]);
    let numberOfWorker = Number(arr[1]);
    let competitors = Number(arr[2]);
    let allBiscuitsPerDay = biscuitsFromOneWorker * numberOfWorker;
    let sum = 0;
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            sum += (allBiscuitsPerDay * 0.75);
            sum = Math.floor(sum);
        } else {
            sum += allBiscuitsPerDay;
            sum = Math.floor(sum);
        }
    }
    let diff = Math.abs(sum - competitors);
    let percentage = (diff / competitors) * 100;
    console.log(`You have produced ${sum} biscuits for the past month.`);
    if (sum > competitors) {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`)
    }
}
theBiscuitFactory([
    "78",
    "8",
    "16000"
]);
theBiscuitFactory(["65",
    "12",
    "26000"
]);
theBiscuitFactory(["163",
    "16",
    "67020"
]);