function triplesOfLatinLetters(number) {
    number = Number(number);

    for (i = 1; i <= number; i++) {
        let letterOne = String.fromCharCode(96 + i)
        for (k = 1; k <= number; k++) {
            let letterTwo = String.fromCharCode(96 + k)
            for (m = 1; m <= number; m++) {
                let letterThree = String.fromCharCode(96 + m)
                console.log(`${letterOne}${letterTwo}${letterThree}`)
            }
        }
    }
}

triplesOfLatinLetters('3')