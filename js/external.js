"use strict";

// console.log('Hello from external JavaScript!');
// alert('Welcome to my Website!');
// const userColor = prompt('What is your favorite color?');
// alert('Great, ' + userColor + ' is my favorite color too!');

// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

// alert('You have rented 3 movies. One for 3 days another for 5 days and the last movie for 1 day. Each movie costs $3 per day.')
// const total = prompt('How much will you have to pay?')
//     if(total === "27"){
//         alert("Correct, you will pay $27.")
//     } else {
//         alert("Sorry, you will pay $27.")
//     }

const pricePerMoviePerDay = 3
const littleMermaidPerDay = 3
const brotherBearPerDay = 5
const herculesPerDay = 1
const totalPayed = pricePerMoviePerDay * (littleMermaidPerDay + brotherBearPerDay + herculesPerDay)

console.log(totalPayed);


const googleHourlyRate = 400
const amazonHourlyRate = 380
const facebookHourlyRate = 350

const googleHoursWorked = 6
const amazonHoursWorked = 4
const facebookHoursWorked = 10

const weeksTotalPay = (googleHourlyRate * googleHoursWorked) + (amazonHourlyRate * amazonHoursWorked) + (facebookHourlyRate * facebookHoursWorked)

console.log(weeksTotalPay)



// const username = "codeup"
// const password = 'notastrongpassword'

const classNotFull = true
const noScheduleConflict = true
const canBeEnrolled = classNotFull && noScheduleConflict

console.log(canBeEnrolled)

const numberOfItemsBought = 3
const offerNotExpired = true
const premiumMember = true
const productDiscount = offerNotExpired && (premiumMember || numberOfItemsBought >= 3)

console.log(productDiscount)