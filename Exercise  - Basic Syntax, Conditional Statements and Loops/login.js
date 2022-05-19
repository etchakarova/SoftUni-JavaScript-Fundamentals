function login(input) {
    for (let index = 1; index < input.length; index++) {

        let reverseUser = input[index];
        reverseUser = reverseUser.split('');
        reverseUser = reverseUser.reverse();
        reverseUser = reverseUser.join('');

        if (reverseUser === input[0]) {
            console.log(`User ${input[0]} logged in.`)
        } else {
            if (index === 4) {
                console.log(`User ${input[0]} blocked!`)
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);