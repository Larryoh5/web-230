/* ============================================
 ; Title: Objects Collections
; Author: Professor Krasso
; Date:   17 November 2020
; Modified By: Larry Ohaka
 ; Description: Keyed collection array with two errors
 ;===========================================
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 5.3') + '\n');

var directors = [
  {
    firstName: 'Wes',
    lastName: 'Anderson'
  },

  {
    firstName: 'Bong',
    lastName: 'Joon-ho'
  },

  {
    firstName: 'Steven',
    lastName: 'Spielberg'
  },

  {
    firstName: 'Quentin',
    lastName: 'Tarantino'
  },

  {
    firstName: 'David',
    lastName: 'Fincher'
  },
]

directors.forEach(function(films) {
  console.log(films.firstName + " " + films.lastName)
});
