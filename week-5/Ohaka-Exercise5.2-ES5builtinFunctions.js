/* ============================================
 ; Title: Arrays and Operators
; Author: Professor Krasso
; Date:   17 November 2020
; Modified By: Larry Ohaka
 ; Description: Keyed collection array with two errors
 ;===========================================
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 5.2') + '\n');


//standard array of my favorite foods
var favFoods = ["Bulgogi", "Rice", "Fries", "Chicken"];
//using the forEach function call the array
favFoods.forEach(function(food){
  console.log(food); // print the array by calling the anonymous function 'food'
});
