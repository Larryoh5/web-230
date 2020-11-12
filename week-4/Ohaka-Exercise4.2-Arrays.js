/*
============================================
; Title:  Functions
; Author: Professor Krasso
; Date:   10 October 2020
; Modified By: Larry Ohaka
; Description: Arrays
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 4.2
  Today's Date
  Apple
  Orange
  Banana
  Mango
  Pear
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 4.2') + '\n');



// a string array of five (5) fruit items
var fruit = ["Mango", "Orange", "Bananas", "Grape", "Melon"]

// function
function getFruit(arr) {
  for (var k = 0; k < arr.length; k++){
    console.log(arr[k]);
  }
}

getFruit(fruit);
