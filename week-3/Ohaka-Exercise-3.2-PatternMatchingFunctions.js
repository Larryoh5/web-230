/*
============================================
; Title:  Functions
; Author: Professor Krasso
; Date:   30 October 2020
; Modified By: Larry Ohaka
; Description: Functions exercise
;===========================================
*/



//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 3.2') + '\n');

// These are my test variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";


//Functions
function match( arg1, arg2){
    if (arg1 === arg2)
    return true
    else
    return false
}

function logMismatch(arg1, arg2){
    console.log (arg1 + "and" + arg2 + "do not match!");


};

function logMatch(arg1, arg2){
    console.log (arg1 + "and" + arg2 + "do match!");

};


//Conditional "if...else" statements. Include checks for all six (6) tet=st variables
if (match(testVar1, testVar2)){
    logMismatch(testVar1, testVar2);
}
else {
    logMatch(testVar1, testVar2);
}



if (match(testVar3, testVar4)){
    logMismatch(testVar3, testVar4);
}
else {
    logMatch(testVar3, testVar4);
}


if (match(testVar5, testVar6)){
    logMatch(testVar5, testVar6);
}
else {
    logMismatch(testVar5, testVar6);
}



// end program
