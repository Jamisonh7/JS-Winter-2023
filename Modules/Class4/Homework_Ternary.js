let sentence1 = 'Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.';

let result1 = sentence1.length >= 100 || sentence1.startsWith ('go to') ? 25 : 35;
console.log(`Result -> ${result1}`);

let sentence2 = 'go to home';

let result2 = sentence2.length >= 100 || sentence2.startsWith ('go to') ? 25 : 35;
console.log(`Result2 -> ${result2}`);

let sentence3 = ' ';
let result3 = sentence3.length >= 100 || sentence3.startsWith ('go to') ? 25 : 35;
console.log(`Result3 -> ${result3}`);


