"use strict";

// var random = Math.floor((Math.random() * 31) + 1);
//
// console.log('Random odd number is: ' + random);
//
// for (var i = 1; i < 37; i = i + 2) {
//
//     if (i % 2 === 0) {
//         continue;
//
//     }
//
//     if (random === i) {
//         console.log('Yikes! Skipping number: ' + random);
//     } else {
//         console.log('Here is an odd number: ' + i);
//     }
//
//     if (i > 49) {
//         break;
//     }
// }

while (true){
    var num = parseInt(prompt('Enter an odd number between 1 and 50'));
    if(num % 2 !== 0 && num > 0 && num < 51){
        break;
    }
}

console.log("number to skip is " + num);

for (var i = 1; i < 50; i += 2){
    if(num === i){
        console.log("yikes skipping number: " + num);
        continue;
    }
    console.log(i);
}