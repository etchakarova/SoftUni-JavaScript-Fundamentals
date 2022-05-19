function netherRealms(input) {
    let regexp = /\s*,\s*/g;
    let demonNames = input.split(regexp);
    let demons = {};
    let demonNameTest = /[^\s ,]+/;
    for (let demon of demonNames) {
        if (demonNameTest.test(demon)) {
            demon = demon.trim();

            let healthPattern = /[^0-9+\-*\/.]/g;
            let healthMatch = healthPattern.exec(demon);
            let health = 0;
            while (healthMatch != null) {
                health += healthMatch[0].charCodeAt(0);
                healthMatch = healthPattern.exec(demon);
            }
            let damagePattern = /[\+\-]*\d+(\.\d+)*/g;
            let damageMatch = damagePattern.exec(demon);
            let damage = 0;
            while (damageMatch != null) {
                damage += Number(damageMatch[0]);
                damageMatch = damagePattern.exec(demon);
            }
            let damageMultiDivi = /[\*\/]/g;
            let damageMultiDiviMatch = damageMultiDivi.exec(demon);
            while (damageMultiDiviMatch != null) {
                if (damageMultiDiviMatch[0] === "*") {
                    damage *= 2;
                }
                if (damageMultiDiviMatch[0] === "/") {
                    damage /= 2;
                }
                damageMultiDiviMatch = damageMultiDivi.exec(demon)
            }
            if (!demons.hasOwnProperty(demon)) {
                demons[demon] = [health, damage];
            } else {
                continue;
            }
        }
    }
    let sorted = Object.entries(demons);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [demon, arr] of sorted) {
        console.log(`${demon} - ${arr[0]} health, ${arr[1].toFixed(2)} damage`);
    }
}
netherRealms("M3ph-0.5s-0.5t0.0**");
console.log('---');
netherRealms("M3ph1st0**, Azazel");
console.log('---');
netherRealms("Gos/ho");