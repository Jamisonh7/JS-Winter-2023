/* Q1 */

const arr1 = [21, 32, 12, 43, 45, 65, 12];
const num1 = 12;
let arr1Result = []

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== (num1)) {
        arr1Result.push(arr1[i]);
    }
}
console.log(arr1Result);






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
let total = []





/* Q3 */


const arr3 = ['BASEball', 'FOOTBALL', 'rUGBY', 'bASEBALL', 'sOCceR', 'BaskETBALL', 'bAsEbAlL', 'mARAthon'];
let splitArr3 = arr3.toString().toLowerCase();
console.log(`${splitArr3}`);