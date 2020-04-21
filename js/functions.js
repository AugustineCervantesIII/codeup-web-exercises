(function() {


    "use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */
    function sayHello(name) {
        return "Hello " + name + "!";
    }

    console.log(sayHello('Class'));

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */
    const helloMessage = sayHello("Augustine");

    console.log(helloMessage);


    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */
// const myName = "Augustine C.";
    const myName = "Augustine C.";
    console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    const random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */
    function isTwo(num1) {
        return num1 === 2;
    }

    console.log(random);
    console.log(isTwo(random));


    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */

    function calculateTip(tipPercent, bill) {
        return tipPercent * bill;
    }

    console.log(calculateTip(0.20, 20));
    console.log(calculateTip(0.25, 25.50));
    console.log(calculateTip(0.15, 33.42));


    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

// const billAmount = prompt("What is your bill amount?");
// const tipAmount = prompt('How much would you like to tip?')
// const total = alert("Total is $" + (parseFloat(billAmount) + parseInt(tipAmount)));
//
// console.log(total);

    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var dicountPercent = .2; // 20%
     * > applyDiscount(originalPrice, dicountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */

    function applyDiscount(price, discount) {
        return price - (price * discount);
    }

    console.log(applyDiscount(45.99, .12))

// ===== MINI PROBLEMS
// Write a function, returnFive, that returns the number five. No inputs should be defined.
// function returnFive(){
//     return 5;
// }
//
// const result = returnFive();
// console.log(result);
//
// // Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
// function isFive(num1){
//     return 5 === num1 || '5' === num1;
// }
//
// console.log(isFive(5), true);
// console.log(isFive(10), false);

// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// function isShortWord(string){
//     return string.length() < 5;
// }
//
// console.log(isShortWord('going'), true)
// console.log(isShortWord('codeup'), false)
// console.log(isShortWord('one'), false)

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
// function isSameLength(str1, str2){
//     return str1.length === str2.length;
// }
//
// console.log(isSameLength('me', 'us'), true)
// console.log(isSameLength('hello', 'goodbye'), false)
//
// // Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.
// function getSmallSegment(str1, length){
//     return str1.substring(0,length).toLowerCase();
// }
//
// console.log(getSmallSegment('warrior', 3), 'war')
// console.log(getSmallSegment('call of duty', 4), 'call')

// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

// Function Drills

// function isOdd(num){
//     return num
// }
//
// function isEven(num1){
//     return num1
// }

    // function identity(input) {
    //     return input;
    // }
    //
    // console.log(identity(77));
    //
    // function addFive(input1) {
    //     return (input1 + 5);
    // }
    //
    // console.log(addFive(5))






// condition: running out of milk
    // action: go to store, to the store.
    // var outOfMilk = false;
    // var goingToStore = false;
    //
    // if (outOfMilk === true){
    // goingToStore = true;
    //     outOfMilk = false;
//}
    // console.log(outOfMilk);
    // console.log(goingToStore);




    // var x = 5
    // if (x === 5){
    //     console.log('Yep, that is five.');
    // } else {
    //     console.log('Nope, not five.')
    // }




//     function isiTANumber(parameter){
//         if(typeof parameter === "number"){
//             return 'Yep, that ids a number.';
//         }
//     }
//
//     console.log(isItANumber(7));



    // if (ownCow === tue) {
    //     // milk my cow for milk
    //
    // } else {
    //     //going to store for milk
    //
    // }
    //
    // // reversed
    // // or ownsCow === false, or ownsCow !== true
    // if (!ownsCow){
    //     //going to store for milk
    //
    // } else {
        //milk my own cow

    //}




    // function isItANumber(parameter) {
    //     if (typeof parameter === "number") {
    //         return "yep, that is a number.";
    //     } else {
    //         return "nope not a number";
    //     }
    // }

//     console.log(isItANumber(7));
//     console.log(isItANumber("Pop"));
//     console.log(isItANumber(false));



// if/else if/else
    //cow but goat
    // var ownsCow = true;
    // var ownsGoat = false;
    //
    // if (ownsCow === true){
    //     console.log("get milk from cow.")
    // } else if(ownsGoat === true) {
    //     console.log("get milk from goat.")
    // } else {
    //     console.log("going to store for milk.")
    // }



// function isThisThirtyFive(parameter){
//         if(parameter === 35) {
//             return "nailed it, that's 35";
//         } else if(parameter > 35) {
//             return "nope, that's too high";
//         } else if(parameter < 35){
//             return "sorry, too low";
//         }
//}
// parameter == 35. console.log "35" console that's 35
// console.log(isThisThirtyFive(35));



// var doWeHaveMilk = true
//     var action = (doWeHaveMilk) ? "Making a bowl of cereal." : "heading over to the store";
//
// console.log(action);



// function isItANumber(parameter){
//         var message = (typeof parameter === "number") ? "yep that's a number" : "nope not a number";
//     return message;
// }
// or return instead of var message and delete the return message




// var animal = "Cow";
//     switch (animal) {
//         case "cow":
//             console.log("Milking the cow");
//             break;
//         case "goat":
//             console.log("Milking the goat");
//             break;
//         case "camel":
//             console.log("Milking the camel");
//             break;
//         default:
//             console.log("Got to store to get milk");
//             break;
//     }


switch (prompt("What is your favorite sandwich meat").toLowerCase()){
    case "olive loaf":
        alert("a great choice");
        break;
    case "brisket":
        alert("A simple meat");
        break;
    default:
        alert("gross");
        break;//dont have to have break on last case but is better to have
}






})();