function guineaPig(arr) {
    arr = arr.map(Number);
    let foodInGrams = arr[0] * 1000;
    let hayInGrams = arr[1] * 1000;
    let coverInGrams = arr[2] * 1000;
    let weightOfPuppy = arr[3] * 1000;

    for (let i = 1; i <= 30; i++) {
        foodInGrams -= 300;
        if (i % 2 === 0) {
            hayInGrams -= (foodInGrams * 0.05);
        }
        if (i % 3 === 0) {
            coverInGrams -= (weightOfPuppy / 3);
        }
    }
    if (foodInGrams > 0 && hayInGrams > 0 && coverInGrams > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`)
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}
guineaPig([
    "10",
    "5",
    "5.2",
    "1"]);
guineaPig([
    "1",
    "1.5",
    "3",
    "1.5"
]);
guineaPig([
    "9",
    "5",
    "5.2",
    "1"
]);