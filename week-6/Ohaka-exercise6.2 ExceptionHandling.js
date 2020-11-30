/* ============================================
 ; Title: Exception Handling
; Author: Professor Krasso
; Date:   17 November 2020
; Modified By: Larry Ohaka
 ; Description: Exception handling with errors
 ;===========================================
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 6.2') + '\n');

/*
  Expected output:
  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//Start Program

var petAge = [
  {
  name: 'Tony',
  age: 2
},
{
  name2: 'Spot',
  age2: 3
},
{
  name3: 'Luna',
  age3: 4
},

{
  name4: 'Lady',
  age4: 4
}
]

try{

   if (petAge.age >= 3)
    throw "Trainable age";
  else {
    status = "Not trainable age";
  }
    console.log(petAge.name + " " + "is of trainable age for this program")}

catch(k){
console.log("Catch Clause:" + k);
}

finally{
  console.log("Finally Clause reached");
}


