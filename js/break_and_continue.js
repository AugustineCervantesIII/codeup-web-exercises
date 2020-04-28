"use strict";

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
