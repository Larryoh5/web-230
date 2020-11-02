/*
============================================
; Title:  Function Properties
; Author: Larry Ohaka
; Date:   28 October 2020
; Description: Displays a formatted header
;===========================================
*/

//This function will invoke my name
function myName() {
    myName.larry = "Larry";
    return myName.larry;
  }

//This function will execute the js file
const header = require("../Ohaka-header");

// This is to invoke the header
console.log(header.display("Larry", "Ohaka", "Exercise 2.3"));

// To put space between words
console.log(" ");

//This is the output block
console.log("Hi" + myName() + "Ohaka");