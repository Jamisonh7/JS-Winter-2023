// Ensure that sentence1 is logged into the terminal
const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`\nPrinted Sentence -> ${sentence1}`);

let sentence_Replace = sentence1.replace(/A/ig, 'Queen and King');
console.log(`\nsentence replace with King and Queen -> ${sentence_Replace}`);


const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.'
let sentence2_length = sentence2.length
console.log(`\nlength of sentence2 -> ${sentence2_length}`);

let sentence2Upper = sentence2.toUpperCase();
let patternUpperCase = "Com".toUpperCase();
let result = sentence2Upper.startsWith(patternUpperCase);
console.log(`\n Starts with COM ignoring cases -> ${result}`);


let sentenceGoogle = sentence2.toUpperCase();
let googleUpper = "GOOgle NeWs.".toUpperCase();
let result2 = sentenceGoogle.endsWith(googleUpper);
console.log(`\n Ends with GOOgle NeWs ignoring cases -> ${result2}`);

let sentenceFrom = sentence2.toUpperCase();
let fromUpper = "frOM".toUpperCase();
let result3 = sentenceFrom.includes(fromUpper);
console.log(`\n Includes frOM ignoring cases ->${result3}`)


let charAt97 = sentence2.charAt(97);
console.log(`\nChar at second to last index -> ${charAt97}`);

