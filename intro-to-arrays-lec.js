"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet',];
// for(start; stop condition; how to get there){
// this is for-loop instead of console logging each array index
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]);
console.log(colors[6]);

//for-each loop iterating over all the arrays elements
// call foreach method on the array
//for each takes in a function parameter
//function has 3 available parameters
colors.forEach(function (color, index, array) {
    console.log(color, index);
    console.log(array);
});


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data


/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
let test = [];
console.log(test)

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
let pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
let shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
let instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
let daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
let favoriteFoods = ['pizza', 'ice cream', 'tacos', 'gyro',];
console.log(favoriteFoods);


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
    console.log(shapes.length);
// TODO: console.log the length of the instructors array
    console.log(instructors.length);
// TODO: console.log the length of the daysOfTheWeek array
    console.log(daysOfTheWeek.length);
// TODO: console.log the length of the favoriteFoods array
    console.log(favoriteFoods.length);

/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// 	console.log(shapes[1]);
// 	console.log(shapes[2]);
// 	console.log(shapes[3]);
// 	console.log(shapes[4]);

// TODO: console.log each element of the instructors array
	console.log(instructors[0]);
	console.log(instructors[1]);
	console.log(instructors[2]);
	console.log(instructors[3]);
	console.log(instructors[4]);
// TODO: console.log the first three elements of the daysOfTheWeek array
	console.log(daysOfTheWeek[0]);
	console.log(daysOfTheWeek[1]);
	console.log(daysOfTheWeek[2]);
	console.log(daysOfTheWeek[3]);
	console.log(daysOfTheWeek[4]);
// TODO: console.log the first three elements of the favoriteFoods array
	console.log(favoriteFoods[0]);
	console.log(favoriteFoods[1]);
	console.log(favoriteFoods[2]);
	console.log(favoriteFoods[3]);
	console.log(favoriteFoods[4]);


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
function returnLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(returnLastElement(shapes));

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
    console.log(shapes[0]);
    console.log(shapes[1]);
    console.log(shapes[2]);
    console.log(shapes[3]);


// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
//     for(let i = 0; i < shapes.length; i++){
//         console.log(shapes[i]);
//         if(shapes[i] === 'circle'){
//             alert('that\'s cool!')
//             break;
//         }
//     }

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.


// TODO: What happens if we change var i = 1? or var i = 2;
// TODO: What are benefits of using loops to iterate?
// TODO: How does the loop know when to stop iterating?

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
for(let i = 0; i < instructors.length; i ++){
    console.log(instructors[i]);
}

// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
for(let i = 0; i < daysOfTheWeek.length; i ++){
    console.log(daysOfTheWeek[i]);
}
// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food
for(let i = 0; i < favoriteFoods.length; i ++){
    console.log(favoriteFoods[i]);
}

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had
//  class with that instructor. If you have not had class with that instructor, alert "I haven't had
//  class with <INSTRUCTOR NAME HERE> yet!"
// for(let i = 0; i < instructors.length; i ++){
//     console.log(instructors[i]);
//     if(instructors[i] === 'justin' || instructors[i] === 'david' || instructors[i] === 'sophie'){
//         alert('hey i know ' + instructors[i]);
//     } else {
//         alert('i haven\'t had class with ' + instructors[i]);
//     }
// }

/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
shapes.forEach(function(shape,index) {
    console.log(shape, index);
});

// colors.forEach(function (color, index, array) {
//     console.log(color, index);
//     console.log(array);
// });

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
// var pies = ["apple", "cherry", "key lime", "huckleberry"];
pies.forEach(function(pie, index){
    console.log(pie, index)
});

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function(instructor, index){
    console.log(instructor, index)
});

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function(dayoftheweek, index){
    console.log(dayoftheweek, index)
});

// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
favoriteFoods.forEach(function(food, index){
    console.log(food, index)
});


