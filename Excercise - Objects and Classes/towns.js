function towns(arr) {
    for (let townInfo of arr) {
        townInfo = townInfo.split(" | ");
        let town = townInfo[0];
        let latitude = Number(townInfo[1]).toFixed(2);
        let longitude = Number(townInfo[2]).toFixed(2);
        let townObj = {
            town,
            latitude,
            longitude
        }
        console.log(townObj);
    }
}
towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
console.log("---");
towns([
    'Plovdiv | 136.45 | 812.575'
]);