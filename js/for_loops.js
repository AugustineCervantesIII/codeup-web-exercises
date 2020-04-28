'use strict';
function showMultiplicationTable(num) {
    for (let a = 1; a <= 10; a++){
        let b = num * a;
        console.log(num + ' x ' + a + ' = ' + b);
    }
}
console.log(showMultiplicationTable(7));
// for(let counter = 7; counter <= 10; counter++){
//     console.log(counter);
// }
//
// for (let counter = 3; counter >= 0; --counter){
//     console.log(counter);
// }

//for loop. for(initialization; test; iteration) {
//             do something a set number of times
//          }
for (let b = 1; b <= 10; b++){
    let randomNumber = Math.floor(Math.random() * 180) + 20;
    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd")
    }
}



// for (let c = 1; c <= 9; c++) {
//     for (let j = 0; j < c; j++)
//     {
//         console.log(c);
//     }
// }
for (let c = 1; c < 10; c++){
    console.log(c.toString().repeat(c));
}



for (let d = 100; d >= 5; d -= 5) {
    console.log(d);
}
// for then while then do-while

// for (var x = 0; x <= 20; x += 2){
//     console.log(x);
// }
//
// var x = 0;
// while (x <= 20){
//     console.log(x);
//     i += 1
// }
//
// do {
//     console.log(x);
//     x += 1;
// } while (x <= 20);



// make a loop go from 10 to 20 in tens
// var t = 20;
// while (t <= 50) {
//     console.log(t);
//     i += 10;
// }

//write a program until the user clicks ok
// var willContinue = true;
// while (willContinue){
//     willContinue = !confirm('Will you exit?');
// }

//do-while loop
// var willContinue = false;
// do {
//     willContinue = !confirm('will you exit?');
// } while(willContinue);

