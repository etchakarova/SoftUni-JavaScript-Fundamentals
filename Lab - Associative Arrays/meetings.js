function meetings(arr) {
    let meetingObj = {};
    for (let lines of arr) {
        let [day, name] = lines.split(" ");
        if (meetingObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in meetingObj) {
        console.log(`${day} -> ${meetingObj[day]}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
console.log('---');
meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);