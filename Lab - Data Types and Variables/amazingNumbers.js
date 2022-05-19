function amazingNumbers(num) {
    let numToString = num.toString();
    sum = 0;
    for (let char of numToString) {
        char = Number(char);
        sum += char

    }
    let result = sum.toString().includes(9) ? "True" : "False"
    console.log(`${num} Amazing? ${result}`);
}
amazingNumbers(1233);