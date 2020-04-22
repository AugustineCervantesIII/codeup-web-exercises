
    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    //davids code
    // function analyzeColor(color){
    //     if(color === "blue"){
    //         return "blue is the sky";
    //     } else if (color === "red"){
    //         return 'strawberries are red';
    //     } else {
    //         return 'idk anything about cyan';
    //     }
    // }



    //my code
//     function analyzeColor(colorInput) {
//         if (colorInput === 'blue') {
//             return "Blue is the color of the sky.";
//         } else if (colorInput === 'red') {
//             return "Strawberries are red.";
//         } else if (colorInput === 'cyan') {
//             return "I dont know anything about cyan.";
//         } else if (colorInput === 'orange') {
//             return "Oranges are tasty";
//         } else if (colorInput === 'yellow') {
//             return "Pineapple is yellow on the inside";
//         } else if (colorInput === 'green') {
//             return "Green apples are best";
//         } else if (colorInput === 'indigo') {
//             return "Indigo tribe from DC";
//         } else if (colorInput === 'violet') {
//             return "Violet is seen in flowers";
//         }
//     }
//
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('red'));
// console.log(analyzeColor('cyan'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
// console.log(randomColor);
// console.log(analyzeColor(randomColor));


    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    //davids code
    // function analyzeColorSwitch(color){
    //     switch (color){
    //         case"blue":
    //             return "blue is the sky";
    //         case "red":
    //             return "strawberries are red";
    //         default:
    //             return "idk anything about cyan";
    //     }
    // }
    // console.log(randomColor);
    // console.log(analyzeColor(randomColor));

    //my code
    // function colorSwitch(colorInput) {
    //     switch (colorInput) {
    //         case 'yellow':
    //             return'yellow is two.';
    //             break;
    //         case 'green':
    //             return'Green is third.';
    //             break;
    //         case 'indigo':
    //             return'Indigo is fifth.';
    //             break;
    //         case 'violet':
    //             return'Violet is sixth.';
    //             break;
    //         default:
    //             return'No color selected from the options.';
    //             break;
    //     }
    // }

    // console.log(colorSwitch(randomColor));

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    //davids code
    // var usercolor = prompt('enter color').toLocaleLowerCase();
    //     alert(analyzeColor(userColor));


    //my code
    // switch (prompt('Please type a color')){
    //     case "yellow":
    //         alert('You entered yellow!');
    //         break;
    //     case "green":
    //         alert("You entered green!");
    //         break;
    //     case "indigo":
    //         alert("You entered indigo");
    //         break;
    //     case "violet":
    //         alert("You entered purple");
    //         break;
    //     default:
    //         alert("You did not enter a color or color option");
    //}

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */



    function calculateTotal(luckyNumber, total){
       if(luckyNumber === 0){
           return (total);
       } else if(luckyNumber === 1){
           return total -(total * .10);
       } else if (luckyNumber === 2){
           return total -(total * .25);
       } else if (luckyNumber === 3){
           return total -(total * .35);
       } else if(luckyNumber === 4){
       return total -(total * .50);
       } else if(luckyNumber === 5){    //}else{
           return total -(total);       //return 0
       }
    }
console.log(calculateTotal(0, 100));
    console.log(calculateTotal(4, 100));
    console.log(calculateTotal(5, 100));


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
 // Generate a random number between 0 and 6
 // var luckyNumber = Math.floor(Math.random() * 6);

 // var userTotal = prompt("What is your bill total?");
 //    alert("Your lucky number is " + luckyNumber);
 // var userDiscount = calculateTotal (luckyNumber, userTotal);
 //    alert("Your bill before discount is $" + userTotal);
 //    alert("Your new total is $" + userDiscount + " with your lucky number discount.");




    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

const userEntry = confirm('Would you like to enter in a number?');
    if (userEntry === true) {
        const userNumber = prompt('What is your number?');
        if (isNaN(userNumber)) {
            alert('That is not a number');
        } else {
            if (userNumber % 2 === 0) {
                alert('That is an even number.');
            } else {
                alert('That is an odd number')
            }
        const hundred = 100;
        const plusHundred = +hundred + +userNumber;
            alert(userNumber + " plus 100 is " + plusHundred);
        if (userNumber >= 0) {
            alert(userNumber + ' is also positive')
        } else {
            alert(userNumber + ' is also negative')
        }
        }
    }





