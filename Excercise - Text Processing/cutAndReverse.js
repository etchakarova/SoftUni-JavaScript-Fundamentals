function cutAndReverse(input) {
    input = input.split("").reverse();
    let mid = (input.length) / 2;
    input = input.join("");
    let secondHalf = input.substring(0, mid);
    let firstHalf = input.substring(mid);
    console.log(firstHalf);
    console.log(secondHalf)
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('---');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
