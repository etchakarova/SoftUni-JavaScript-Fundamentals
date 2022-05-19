function modernTimesOfHashtag(input) {
    input = input.split(" ");
    for (let char of input) {
        if (char.startsWith("#") && char.length > 1) {
            char = char.substring(1);
            let asciiCode = char.charCodeAt(0);
            let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)
            if (isLetter) {
                console.log(char)
            }
        }
    }
}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('---');
modernTimesOfHashtag('The symbol # is known #variously in English-speaking #regions as the #number sign');