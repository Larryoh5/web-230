/*
============================================
; Title:  Functions
; Author: Professor Krasso
; Date:   30 October 2020
; Modified By: Larry Ohaka
; Description: Functions exercise
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 3.3') + '\n');




 // Variable used in proceeding switch statements.
let eventKeyCode = 13


// Switch statements with potentiel outputs dependent on  variable eventKeyCode's value
switch (eventKeyCode) {
  case 13:
  console.log('The enter key was pressed.')
  break;

  case 16:
  console.log('The shift key was pressed.')
  break;

  case 32:
  console.log('The spacebar key was pressed.')
  break;

  case 8:
  console.log('The backspace / delete key was pressed.')
  break;

  default:
  console.log('Unrecognized key.')
  break;
}


//end of exercise
