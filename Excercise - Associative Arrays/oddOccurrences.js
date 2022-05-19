function oddOccurrences(input) {
    let result = new Map();
    let elements = input.split(" ");
    elements = elements.map(element => element.toLowerCase());
    for (let element of elements) {
        if (result.has(element)) {
            let existing = result.get(element);
            existing++;
            result.set(element, existing);
        } else {
            result.set(element, 1);
        }
    }
    let newArr = Array.from(result);
    let resultArr = []
    for (let element of newArr) {
        if (element[1] % 2 === 1)
            resultArr.push(element[0])
    }
    console.log(resultArr.join(" "))
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('---');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');