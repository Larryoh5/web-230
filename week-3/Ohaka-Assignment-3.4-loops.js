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
console.log(header.display('Larry', 'Ohaka', 'Exercise 3.4') + '\n');



//Variable
let ranNum = 4;

//A for loop with 10 iterations
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//Functions
function match( arg1, arg2){
  if (arg1 === arg2)
  return true
  else
  return false
}

function logMismatch(arg1, arg2){
  console.log (arg1 + "and" + arg2 + "do not match!");


}

function logMatch(arg1, arg2){
  console.log (arg1 + "and" + arg2 + "do match!");
}

  // if...else statement
for (i = 0; i < 10; i++) {
  let randomNum = randomNumber();

  if (match(ranNum, randomNum)) {
    logMatch(ranNum, randomNum);
  } else {
    logMismatch(ranNum, randomNum);
  }
}
