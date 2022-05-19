function schoolGrades(arr) {
    let result = new Map();
    for (let line of arr) {
        let studentInfo = line.split(" ");
        let name = studentInfo.shift();
        let grades = studentInfo.map(Number);

        if (result.has(name) === false) {
            result.set(name, []);
        }
        let existing = result.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    let sorted = Array.from(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sorted) {
        let average = 0;
        for (let grade of grades) {
            average += grade;
        }
        average /= grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
console.log('---');
schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);