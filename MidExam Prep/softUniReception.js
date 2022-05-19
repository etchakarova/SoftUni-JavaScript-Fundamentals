function softUniReception(arr) {
    let employeOneEff = Number(arr[0]);
    let employeTwoEff = Number(arr[1]);
    let employeThreeEff = Number(arr[2]);
    let numberOfStudent = Number(arr[3]);
    let hours = 0;
    let sumForOneHour = employeOneEff + employeTwoEff + employeThreeEff;
    while (numberOfStudent > 0) {
        numberOfStudent -= sumForOneHour;
        hours++;
        if (hours % 4 === 0) {
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`)
}

softUniReception(['5', '6', '4', '20']);
console.log("---");
softUniReception(['1', '2', '3', '45']);
console.log("---");
softUniReception(['3', '2', '5', '40']);