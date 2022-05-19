function heroesOfCodeAndLogicVII(input) {
    let numberOfHeros = Number(input.shift());
    let heroList = {};
    for (let i = 0; i < numberOfHeros; i++) {
        let heroInfo = input.shift().split(' ');
        let heroName = heroInfo[0];
        let hp = Number(heroInfo[1]);
        let mp = Number(heroInfo[2]);
        heroList[heroName] = {
            hp,
            mp
        };
    }
    while (input[0] !== "End") {
        let tokens = input.shift().split(' - ');
        let action = tokens[0];
        let heroName = tokens[1];

        if (action === "CastSpell") {
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];
            if (mpNeeded <= heroList[heroName].mp) {
                heroList[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroList[heroName].mp} MP!`)
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        }
        if (action === "TakeDamage") {
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            let currentHP = (heroList[heroName].hp) - damage;
            if (currentHP > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${currentHP} HP left!`);
                heroList[heroName].hp = currentHP;
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroList[heroName];
            }
        }
        if (action === "Recharge") {
            let amount = Number(tokens[2]);
            if (heroList[heroName].mp + amount >= 200) {
                console.log(`${heroName} recharged for ${200 - heroList[heroName].mp} MP!`);
                heroList[heroName].mp = 200;
            } else {
                heroList[heroName].mp += amount;
                console.log(`${heroName} recharged for ${amount} MP!`);
            }
        }
        if (action === "Heal") {
            let amount = Number(tokens[2]);
            if (heroList[heroName].hp + amount >= 100) {
                console.log(`${heroName} healed for ${100 - heroList[heroName].hp} HP!`);
                heroList[heroName].hp = 100;
            } else {
                heroList[heroName].hp += amount;
                console.log(`${heroName} healed for ${amount} HP!`);
            }
        }
    }
    for (let key of Object.entries(heroList)) {
        let heroName = key[0];
        let list = key[1];
        console.log(`${heroName}\n  HP: ${list.hp}\n  MP: ${list.mp}`);
    }
}
heroesOfCodeAndLogicVII([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);
console.log('---');
heroesOfCodeAndLogicVII([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);