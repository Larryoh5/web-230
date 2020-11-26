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
console.log(header.display('Larry', 'Ohaka', 'Exercise 6.4') + '\n');


/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.
  FirstName LastName
  Assignment 6.4
  Today's Date
  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// Start of Program
// Object Literal 'ticket' created with several value pairs
 var ticket = {
   id: 105 ,
   name: "Larry",
   dateCreated: new Date().toLocaleDateString(),
   priority: "First come, First serve",
// Nested object literal 'person' created with several value pairs
  person: {
  id: 102,
  firstName: "Cory",
  lastName: "Booker",
  jobTitle: "Programer I"
  }
 };

// Display input
 console.log("Ticket" + " " + ticket.id + " " + "was created on" + " " + ticket.dateCreated + " " + "and assigned to employee" + " " + ticket.person.firstName + " " + ticket.person.lastName + " " + "(" + ticket.person.jobTitle + ").")





