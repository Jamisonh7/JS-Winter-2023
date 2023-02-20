/* Question 1 */
const str1 = 'YOu lIve ONly ONce';
let titleCaseStr1 = '';
const arr = str1.toLowerCase().split(' ');

for (let i = 0; i <= arr.length -1 ; i++ ) {
    titleCaseStr1 = titleCaseStr1 + arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
}
console.log(`Original String -> ${str1}`);
console.log(`\nTitle Case String -> ${titleCaseStr1}`);



/* Question 2 */
const str2 = 'Jamison Ellsworth Hart';
let reverseStr2 = '';
const arr2 = str2.split(' ');

for (let i = arr2.length -1 ; i >= 0; i--) {
    reverseStr2 = reverseStr2 + arr2[i] + ' ';
}
console.log(`\n${reverseStr2}`);



/* Question 3 */

let arr3 = [100, 100, 50, 90, 30]
let avg;
let total = 0;

for (let t = 0; t <= arr3.length -1; t++) {
    total = total + arr3[t];
}
avg = total/arr3.length

console.log(`Average of arr3 -> ${avg}`);

/* Question 4 */

const str4 = 'Have a great summer';
let abbr = '';
const arr4 = str4.toUpperCase().split(' ');

for (let x = 0; x <= arr4.length - 1; x++) {
    abbr = abbr + arr4[x].charAt(0);
}
console.log(str4);
console.log(`abbr -> ${abbr}`);



/* Question 5 */

let arr5 = ['earth', 'mars', 'jupiter', 'saturn', 'uRanUS'];

for ( a = 0; a <= arr5.length -1; a++) {
    arr5[a] = arr5[a].toUpperCase()
}
console.log(arr5);