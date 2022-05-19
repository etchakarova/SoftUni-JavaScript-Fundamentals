function wildZoo(input) {
    let animalList = {};
    let index = 0;
    while (input[index] !== "EndDay") {
        let lines = input[index].split(": ");
        let command = lines.shift();
        let animalInfo = lines[0];
        if (command === "Add") {
            let [animal, neededFood, area] = animalInfo.split("-");
            neededFood = Number(neededFood);
            if (animalList.hasOwnProperty(animal)) {
                animalList[animal].neededFood += neededFood;
            } else {
                animalList[animal] = {
                    neededFood,
                    area
                };
            }
        } else if (command === "Feed") {
            let [animal, food] = animalInfo.split("-");
            food = Number(food);
            if (animalList.hasOwnProperty(animal)) {
                let currentFood = Number((animalList[animal].neededFood)) - food
                animalList[animal].neededFood = currentFood;
                if (currentFood <= 0) {
                    console.log(`${animal} was successfully fed`);
                    delete animalList[animal]
                }
            }
        }
        index++
    }
    console.log(`Animals:`);
    for (let key of Object.entries(animalList)) {
        let animal = key[0];
        let list = key[1];
        console.log(`${animal} -> ${list.neededFood}g`);
    }
    console.log(`Areas with hungry animals:`);
    let areaList = {};
    for (let key of Object.entries(animalList)) {
        let list = key[1];
        let listArr = Object.values(list)
        for (let i = 0; i < listArr.length; i += 2) {
            let area = listArr[i + 1];
            let number = 1;
            if (areaList.hasOwnProperty(area)) {
                number++;
                areaList[area] = number
            } else {
                areaList[area] = number
            }
        }
    }
    for (let key in areaList) {
        console.log(`${key}: ${areaList[key]}`)
    }
}
/*wildZoo([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"
]);
console.log('---');*/
wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
]);
console.log('---');
wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
]);