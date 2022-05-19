function spiceMustFlow(startingYield) {
    let daycounter = 0;
    let workerConsumption = 26;
    let spiceExtracted = 0;

    while (startingYield >= 100) {
        daycounter++;
        spiceExtracted += startingYield - workerConsumption;
        startingYield -= 10;

    }
    console.log(daycounter);
    if (spiceExtracted < workerConsumption){
        console.log(spiceExtracted)
    }else {
        spiceExtracted -= workerConsumption
        console.log(spiceExtracted)
    }
    
}
spiceMustFlow(450)