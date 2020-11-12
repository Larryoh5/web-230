/*
============================================
; Title:  Functions
; Author: Professor Krasso
; Date:   10 October 2020
; Modified By: Larry Ohaka
; Description: Filters
;===========================================
*/


// A link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 4.3') + '\n');


// A string array of 5 vehicles
var vehicles = ["Car", "Bike", "Train", "Jetski", "Plane"];


// An array with two parameters
function getValue(arr1, value) {
  for(var k = 0; k < arr1.length; k++) {
    if(arr1[k] === value)
    console.log(arr1[k]);
  }

}


//Output
console.log("--DISPLAYING ARRAY ITEMS--");
 for(var x = 0; x < vehicles.length; x++) {
   console.log(vehicles[x]);
 }

//new line
console.log("");

//Output
console.log("--SELECTED VALUE--");
getValue(vehicles,"Bike");

//new line
console.log("");

//Output
console.log("--SELECTED VALUE--");
getValue(vehicles,"Plane");
