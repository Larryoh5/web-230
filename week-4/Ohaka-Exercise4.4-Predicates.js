/*
============================================
; Title:  Functions
; Author: Professor Krasso
; Date:   10 October 2020
; Modified By: Larry Ohaka
; Description: Predicates
;===========================================
*/



//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 4.4') + '\n');


// An array of 5 states
const states = ["Maryland", "New York", "Alabama", "Virginia", "Colorado"];

// getState() function used to filter array
const filteredStates = states.filter(function(a) {
  return getState(a, 'Maryland')
});


// Prints each element of array according to the forEach function
console.log('-- ORIGINAL ARRAY --');
states.forEach(function(state) {
  console.log(state);
})

console.log(''); //Start a new line

// Arranges array using the sort function in alphabetical order
states.sort();

// Prints stated array using forEach in alphabetical order.
console.log('-- SORTED ARRAY --');
states.forEach(function(sortStates) {
  console.log(sortStates);
})

console.log(''); //Start a new line

// Prints sorted elements starting with index[0]
console.log('-- SELECTED VALUE --');
console.log(filteredStates[0]);

// A function with two strings
function getState(a, x){
  if(a === x){
 return true;
  }
 else{
 return false;
 }
}


// End program
