function requiredReading(pagesOfBook, pagesInOneHour, daysToRead) {

    let hoursToReadBook = pagesOfBook / pagesInOneHour
    let hoursPerDay = hoursToReadBook / daysToRead
    console.log(hoursPerDay)

}
requiredReading(212, 20, 2);