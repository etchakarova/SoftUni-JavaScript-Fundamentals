function extractFile(input) {
    input = input.split("\\");
    let infoNeeded = input.pop();
    infoNeeded = infoNeeded.split("");
    let lastDot = infoNeeded.lastIndexOf(".");
    let fileExtension = infoNeeded.slice(lastDot + 1).join("")
    let fileName = infoNeeded.slice(0, lastDot).join("");
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('---');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');