function shoppingList(arr) {
    let list = arr[0];
    list = list.split("!")
    for (let i = 1; i < arr.length; i++) {
        let command = arr[i];
        command = command.split(" ");
        let currentCommand = command[0];
        let item = command[1];
        let indexOfItem = list.indexOf(item)
        if (currentCommand === "Urgent") {
            if (list.includes(item)) {
                continue;
            }
            list.unshift(item);
        } else if (currentCommand === "Unnecessary") {
            if (!list.includes(item)) {
                continue;
            }
            list.splice(indexOfItem, 1)
        } else if (currentCommand === "Correct") {
            if (!list.includes(item)) {
                continue;
            }
            let newName = command[2];
            list.splice(indexOfItem, 1, newName);
        } else if (currentCommand === "Rearrange") {
            if (!list.includes(item)) {
                continue;
            }
            list.splice(indexOfItem, 1);
            list.push(item)
        }
    }
    console.log(list.join(", "))
}
shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);
shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
])