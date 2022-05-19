function convertToJSON(firstName, lastName, color) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: color
    }
    let personToString = JSON.stringify(person);
    console.log(personToString)
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');