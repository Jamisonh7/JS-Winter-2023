/* Question 1
 Create function to get the smallest value in the given string-array
*/

function getSmallestWordFromArray(inputArr) {
    let smallestWord = inputArr[0];
    let smallestWordLength = inputArr[0].length;

    for(let x=1; x <= inputArr.length -1; x++){
        if(inputArr[x].length < smallestWordLength) {
            smallestWord = inputArr[x];
        }
    }
    return smallestWord
}

console.log(getSmallestWordFromArray(['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT']));





/* Question 2
Create a function to get the first valye in the number array greater than 10
*/

function numGreaterthan10(inputArr) {
    
    let firstIndexGreater10;

    for (let b = 0; b <=inputArr.length - 1; b++) {
    if(inputArr[b] > 10) {
    firstIndexGreater10 = inputArr[b]
    break
    }
}
return firstIndexGreater10
    
}


console.log(numGreaterthan10([1, 3, 30, 6, 10, 7, 23, 1, 20]));

/* Question 3
Create function to get the minimum value in the given numbers-array
*/

function minimumValueInArray(inputArr){
    let minimumValue = inputArr[0];

for (let b=1; b <= inputArr.length -1; b++) {
    if (inputArr[b] < minimumValue) {
        minimumValue = inputArr[b];
        }
    }
    return minimumValue
}

console.log(minimumValueInArray([1, 23, 3, -6, 10, -7, 23, -1, 20]));