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
console.log(header.display('Larry', 'Ohaka', 'Exercise 5.4') + '\n');


//Start Program
// Below this line is an array of Movie Directors, their genre , and their rating
var directors = [
  {
    firstName: 'Wes',
    lastName: 'Anderson',
    genre:'Auteur',
    rating: 9
  },

  {
    firstName: 'Bong',
    lastName: 'Joon-ho',
    genre:'Thriller',
    rating: 8
  },

  {
    firstName: 'Steven',
    lastName: 'Spielberg',
    genre:'Science Fiction',
    rating: 9
  },

  {
    firstName: 'Quentin',
    lastName: 'Tarantino',
    genre:'Auteur',
    rating: 7
  },

  {
    firstName: 'David',
    lastName: 'Fincher',
    genre:'Neo Noir',
    rating: 8
  }
];

// Here is where I establish call the 'director' variable and its  'lastName' and 'rating' values
const dirRating = directors.map( director => {
  return [director.lastName, director.rating];
})
// Here is where I establish call the 'director' variable and its  'lastName' and 'rating' values
const dirGenre = directors.map( direct => {
  return [direct.lastName, direct.genre];
})



//Here is where i start the output
console.log('-- DIRECTOR BY RATING-');
//I instruct the 'dirRating' variable from above to continually repeat each block --usinf=g the forEach function--until the condition is met
dirRating. forEach(array2 => {
  console.log("Rating:" + array2[1]);
  console.log("Composer:" + array2[0], '\n');  // Add new line
})



console.log(''); //Start a new line



console.log('-- DIRECTOR BY GENRE --');
//I instruct the 'dirRating' variable from above to continually repeat each block --usinf=g the forEach function--until the condition is met
dirGenre. forEach(array1 => {
  console.log("Genre:" + array1[1]);
  console.log("Composer:" + array1[0], '\n');// Add new line
})

// End program
