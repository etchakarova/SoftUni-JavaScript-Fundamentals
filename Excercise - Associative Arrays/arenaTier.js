function arenaTier(input) {
    let obj = {};
    function objOperations(obj, name, skill, v) {
        if (obj.hasOwnProperty(name) == false) {
            obj[name] = {};
            obj[name][skill] = Number(v);
        } else {
            if (obj[name].hasOwnProperty(skill) == false) {
                obj[name][skill] = Number(v);
            } else {
                if (obj[name][skill] < Number(v)) {
                    obj[name][skill] = Number(v);
                }
            }
        }
    }
    function fightHandler(obj, p1, p2) {
        if (obj.hasOwnProperty(p1) == true && obj.hasOwnProperty(p2) == true) {
            let p1Skills = Object.keys(obj[p1]);
            let p2Skills = Object.keys(obj[p2]);
            let commonSkill = p1Skills.find(e => p2Skills.includes(e));
            if (commonSkill != undefined) {
                pvpMap[obj[p1][commonSkill] > obj[p2][commonSkill]](obj, p1, p2);
            }
        }
    }
    const pvpMap = {
        true: (obj, _, p2) => {
            delete obj[p2];
        },
        false: (obj, p1, _) => {
            delete obj[p1];
        }
    }
    const commandsMap = {
        false: (str, obj) => {
            let [name, skill, v] = str.split(' -> ');
            objOperations(obj, name, skill, v);
        },
        true: (str, obj) => {
            let [p1, p2] = str.split(' vs ');
            fightHandler(obj, p1, p2);
        }
    }
    let byPointsAndNames = (a, b) => Object.values(b[1]).reduce((a, b) => a + b) - Object.values(a[1]).reduce((a, b) => a + b) || a[0].localeCompare(b[0]);
    let bySkills = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);
    let skillsParse = ([k, v] = e) => `- ${k} <!> ${v}`;
    let outpuParse = ([name, skills] = e) => {
        let totalPoints = Object.values(skills).reduce((a, b) => a + b);
        let sortedSkills = Object.entries(skills)
            .sort(bySkills)
            .map(skillsParse)
            .join('\n');
        return `${name}: ${totalPoints} skill\n${sortedSkills}`;
    }

    while (input[0] != 'Ave Cesar') {
        let line = input.shift();
        commandsMap[line.includes('vs')](line, obj);
    }

    return Object.entries(obj)
        .sort(byPointsAndNames)
        .map(outpuParse)
        .join('\n');
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
console.log('---');
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);