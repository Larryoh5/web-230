/* ============================================
 ; Title: Constructor Function
; Author: Professor Krasso
; Date:   6 December 2020
; Modified By: Larry Ohaka
 ; Description: Two ways Javascript objects are created
 ;===========================================
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 6.2') + '\n');

/*
  Expected output:
  FirstName LastName
  Exercise 7.2
  Today's Date
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//Program begin
//Employee constructor object with 4 parameters
function emply(id,firstName, lastName, title){
this.id = id;
this.firstName = firstName;
this.lastName = lastName;
this.title = title;
}
// An array on 5 employee objects and emply object initiated with the "new" keyword
 let comp = [
new emply(1, 'Thomas', 'Edison', 'Software Engineer'),
new emply(2, 'Benjamin', 'Franklin', 'Programmer'),
new emply(3, 'Nikola', 'Tesla', 'Project Manager'),
new emply(4, 'Charles', 'Babbage', 'Product Manager'),
new emply(5, 'Alexander', 'Bell', 'Business Analyst'),
]

// loop over the array and outputs objects
for (let i = 0; i < comp.length; i++){
  console.log(`${comp[i].id} ${comp[i].firstName} ${comp[i].lastName} ${comp[i].title}`)
}


