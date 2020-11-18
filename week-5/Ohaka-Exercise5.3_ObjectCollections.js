/* ============================================
 ; Title: Objects Collections
; Author: Professor Krasso
; Date:   17 November 2020
; Modified By: Larry Ohaka
 ; Description: Keyed collection array with two errors
 ;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/


//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 5.3') + '\n');


console.log('-- DIRECTORS --');

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
  },
]

directors.forEach(function(films) {
  console.log( "Last Name: " + films.lastName  + "," + " " + "Genre: " + films.genre  + ","  +  " " + "Rating: " + films.rating)
});
