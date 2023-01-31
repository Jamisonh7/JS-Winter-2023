let firstAndLast = 'John Gig';
let firstMiddleLast = 'John Adams Gig';
let firstAndLastSplit = firstAndLast.split(' ');
let firstMiddleLastSplit = firstMiddleLast.split(' ');
let result = firstAndLastSplit.length === 2
let result2 = firstMiddleLastSplit.length === 2
console.log(`first and last name only -> ${result}`);
console.log(`first and last name only -> ${result2}`);



let abreviatedSentence = ['You Never Walk Alone'];
abreviatedSentence[0] = 'YNWA';
console.log(`\nAbreviated Sentence -> ${abreviatedSentence}`);


let sentence = ['CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.'];
console.log(sentence[0].split(' ').length);