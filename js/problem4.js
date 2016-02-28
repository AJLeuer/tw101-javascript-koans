"use strict";

/*
 Problem 4:

 Background:
 At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and
 Rs.1000.
 http://www.rbi.org.in/currency/faqs.html

 Problem statement:
 Write a program that will enable counting of money given in the form of Indian currency notes. The program must take
 a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number
 that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum
 counted so far.

 Examples:

 Given Rs 10, 20, 100 notes
 When I count the money
 Then my total is Rs 130

 Given Rs 20, 50, 10, 20, 13, 500 notes
 When I count the money
 Then my total is Rs 100

*/

function changeElementText(element, answer) {
    $(element).text(answer);
}

// Write your JavaScript here
function countMoney() {

    var notesList = "" ;
    var sum = 0 ;

    var keepCounting = true ;
    for (var i = 0; i < arguments.length; i++) {

        var n = arguments[i] ;

        notesList += n.toString() + ", " ;

        if (keepCounting && isValidDenomination(n)) {
            sum += n ;
        }
        else {
            keepCounting = false ;
        }
    }

    if (notesList.length > 0) {
        notesList = notesList.substring(0, notesList.length - 2); //cut off the trailing comma
    }

    changeElementText("#listOfNotes", notesList) ;
    changeElementText("#total", sum) ;
}

function isValidDenomination(n) {
    if ((n == 5) || (n == 10) || (n == 20) || (n == 50) || (n == 100) || (n == 500) || (n == 1000)) {
        return true ;
    }
    else {
        return false ;
    }
}