function inventory(arr) {
    let heroes = [];
    for (let char of arr) {
        let hero = char.split(" / ")[0];
        let level = Number(char.split(" / ")[1]);
        let items = char.split(" / ")[2];
        let currentHero = {
            hero,
            level,
            items,
        };
        heroes.push(currentHero);
    }
    let sortedHeores = heroes.sort((a, b) => a.level - b.level);
    for (let hero of sortedHeores){
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log(`---`)
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);