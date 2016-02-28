"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here

function fixAdText(strArray) {
    changeElementText("#advertisingText", convertToMultilineStr(strArray)) ;

    reverseElements(strArray[1], 0, (strArray[1].length - 1)) ;

    changeElementText("#correctedAdvertising", convertToSingleLineStr(strArray)) ;

    var count = "count: " ;
    count += countElements(strArray) ;

    changeElementText("#wordCount", count) ;
}

function convertToMultilineStr(str2DArray) {
    var str = "" ;

    for (var i = 0 ; i < str2DArray.length ; i++) {
        str += convertToString(str2DArray[i]) + '\n'; //can't get newlines to display on safari or chrome...
    }

    return str ;
}

function convertToSingleLineStr(str2DArray) {
    var str = "" ;

    for (var i = 0 ; i < str2DArray.length ; i++) {
        str += convertToString(str2DArray[i]) ;
    }
    return str ;
}

function convertToString(strArray) {
    var str = "" ;

    for (var i = 0 ; i < strArray.length ; i++) {
        str += strArray[i] + ' ' ;
    }

    return str ;
}

function reverseElements(array, beginIndex, endIndex) {
    if (beginIndex >= endIndex) {
        return ;
    }
    else {
        swapElements(array, beginIndex, endIndex) ;
        reverseElements(array, beginIndex + 1, endIndex -1) ;
    }
}

function swapElements(array, firstElementIndex, secondElementIndex) {
    var temp = array[firstElementIndex] ;
    array[firstElementIndex] = array[secondElementIndex] ;
    array[secondElementIndex] = temp ;
}

function countElements(array2D) {
    var count = 0 ;
    for (var i = 0 ; i < array2D.length ; i++) {
        count += array2D[i].length ;
    }
    return count ;
}

function changeElementText(element, answer) {
    $(element).text(answer);
}