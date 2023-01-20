// F -> C
// T(°C) = (T(°F) - 32) / 1.8

let fTemp = 47;
let fTempintoCTemp = (fTemp - 32 ) / 1.8 
console.log(`${fTemp} F is equal to ${fTempintoCTemp} C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9

let fTempintoKTemp = (fTemp + 459.67)* 5/9;
console.log(`${fTemp} F is equal to ${fTempintoKTemp} K`);

// C -> F

let cTemp = 8.333333333333334;
let cTempintoFTemp = (cTemp * 1.8 + 32)
console.log(`${cTemp} C is equal to ${cTempintoFTemp} F`);

// C -> K

let cTempintoKTemp = (cTemp + 273.15);
console.log(`${cTemp} C is equal to ${cTempintoKTemp} K`);

// K -> F

let kTemp = 281.4833333333333;
let kTempintoFTemp = (kTemp * 9/5 - 459.67);
console.log(`${kTemp} K is equal to ${kTempintoFTemp} F`);

// K -> C

let kTempintoCTemp = (kTemp - 273.15)
console.log(`${kTemp} K is equal to ${kTempintoCTemp} C`);