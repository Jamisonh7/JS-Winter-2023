/* Q1 */

const arr1 = [21, 32, 12, 43, 45, 65, 12];
const num1 = 12;
let arr1Result = []

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== (num1)) {
        arr1Result.push(arr1[i]);
    }
}
console.log(`\n(Q1) Result -> ${arr1Result}\n`);






/* Q2 */
const accounts = [
    {
        accountNumber: 1234,
        balance: 1000
    },
    {
        accountNumber: 2345,
        balance: 2000
    },
    {
        accountNumber: 3456,
        balance: 3000
    },
    {
        accountNumber: 4567,
        balance: 4000
    },
    {
        accountNumber: 5678,
        balance: 5000
    },
]
let total = 0

for (let i = 0; i <= accounts.length -1; i++) {
    total = total + accounts[i].balance
}

console.log(`\n(Q2) Total of account balances -> $${total}\n`);




/* Q3 */


const arr3 = ['BASEball', 'FOOTBALL', 'rUGBY', 'football', 'sOCceR', 'BaskETBALL', 'bAsEbAlL', 'mARAthon'];
let count = 0;
let arr3Result = '';

for (let x = 0; x <= arr3.length -1; x++) {
    if (arr3[x].toLowerCase().localeCompare('baseball') === 0 && count < 2) {
        count++;
        if (count ===2) {
            arr3Result = x;

        }
    }
}
if (count !== 2) {
    arr3Result = -1

}
console.log(`\n(Q3) The second occurance of baseball ignoring cases -> ${arr3Result}\n`);