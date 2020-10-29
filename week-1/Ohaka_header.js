/*
============================================
; Title:  header.js
; Author: Larry Ohaka
; Date:   28 October 2020
; Description: Displays a formatted header
;===========================================
*/

/**
 * Params: Larry, Ohaka, assignment
 * Response: output
 * Description: Returns a well-formatted string header
 */
exports.display = function (firstName, lastName, assignment) {
    let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
      new Date().toLocaleDateString()
  
    return output
  }