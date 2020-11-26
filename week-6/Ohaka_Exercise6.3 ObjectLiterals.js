/* ============================================
 ; Title: Objects Literals
; Author: Professor Krasso
; Date:   26 November 2020
; Modified By: Larry Ohaka
 ; Description: Keyed collection array with two errors
 ;===========================================
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 6.3') + '\n');

/*
  Expected output:
  FirstName LastName
  Exercise 6.3
  Today's Date
  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

//Start Program
// Object literal for ticketing system
var  tickSysm = {
  id: 101,
  name: "Help Desk Supporter",
  requestor: "Bob Jones"
};
// Display output
console.log("{" + "id: " + tickSysm.id + "," + " " + "name: " + tickSysm.name + "," + " " + "requestor: " + tickSysm.requestor + "}")
