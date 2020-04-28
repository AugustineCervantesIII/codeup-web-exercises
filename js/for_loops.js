'use strict';
// function showMultiplicationTable() {
//
// }
for(let counter = 7; counter <= 10; counter++){
    console.log(counter);
}

for (let counter = 3; counter >= 0; --counter){
    console.log(counter);
}


for (var i = 7; i <= 70; i++) {

    if (i % 7 * 2) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('7 x 1 = ' + i);
}