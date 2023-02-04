/* Q1 *
- Create variable my num and assign 17 to it
- If myNumber is divisible by 5 and 3 log 'Divisible by 5 and 3'
- If it is not divisible by 5 and 3 -> see if myNumber is divisible by 5
- If it is not divisible by 5 -> see if myNumber is divisible b y 3
- If it is not divisible by 3-> log myNumber


*/
let myNumber = 17;

if (myNumber%5 === 0 && myNumber%3 === 0) {
    console.log('Divisible by 5 and 3');
} else if (myNumber%5 === 0) {
console.log('Divisible by 5');
} else if (myNumber%3 === 0) {
    console.log('Divisible by 3');
} else {
    console.log(myNumber)
}

/* Q2 *
*/

const sports = ['Basketball','Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];

if (sports.includes('Basketball') === false) {
    sports.fill('Basketball', 2, 3); 
    console.log(sports)
} else {
    if (sports[2].toLowerCase().localeCompare('basketball') === 0) {
        console.log('Basketball is present at index-2');
}   else {
    console.log('Basketball is not present at index-2')
}

}


/* Q3 *
 Print "Earth is present at the correct place" if Earth is present at first index (ignoring cases)
 otherwise.. add Earth as the first element in the array and then print it in console
 */
const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
if (planets[0].localeCompare('Earth') === 0) {
    console.log('Earth is present at the correct place')
} else {
    planets.unshift('Earth');
    console.log(planets);
}