/*
============================================
; Title:  Functions
; Author: Professor Krasso 
; Date:   30 October 2020
; Modified By: Larry Ohaka
; Description: Functions exercise
;===========================================
*/

const header = require("../Ohaka-header");


//This is my full name
function fullName(firstName, lastName){
    return firstName + '' + lastName;
}


//This block defines  todays date
function dateWriter( month, day, year ){
    return month + '/' + day + '/' + year;
}



//This block of code is the current temperature
function formatNumber(number, numOfFixedPositions){
    return number.toFixed(numOfFixedPositions);
}



//This function block defines my age function
function convertToInt(age) {
    return parseInt(age);
}

//This function block defines my savings function
function convertToFloat(kaido){
    return convertToFloat(kaido);
}

// Everything below this outputs a statement
console.log(output);

console.log("\n" + 'Hello my name is' + fullName('Larry','Ohaka'));

console.log("\n" + 'Todays date is' + dateWriter(11, 1, 2020) + 'and the current temperature is' + formatNumber(33.5, 1) + 'degrees');

console.log("\n" + 'I am' + convertToInt(25) + 'years old and my savings account goal is' + convertToFloat(100000) + 'dollars');