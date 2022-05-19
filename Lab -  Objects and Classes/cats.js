function parseCats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let cats = [];
    for (let char of arr) {
        let catInfo = char.split(" ");
        let cat = new Cat(catInfo[0], Number(catInfo[1]));
        cats.push(cat);
    }
    for (let cat of cats) {
        cat.meow()
    }
}
parseCats(['Mellow 2', 'Tom 5']);
console.log("---")
parseCats(['Candy 1', 'Poppy 3', 'Nyx 2']);