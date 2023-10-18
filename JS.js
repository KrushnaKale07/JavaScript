console.clear();

var firstNum = 10;
console.log(firstNum);
console.log(typeof(firstNum));

var secondNum = 15.1234;
console.log(secondNum);
console.log(typeof(secondNum));

var myFirstString = "This is a string for javascript string function, Javascript"

// returns the length of String
console.log(myFirstString.length);

// Find index of string inside another string
console.log(myFirstString.indexOf('a'));

//Find Last Index of a string inside another string
console.log(myFirstString.lastIndexOf('Javascript'));

//Get the part of string slice(start, end)
console.log(myFirstString.slice(0,4));
console.log(myFirstString.slice(21,31));
console.log(myFirstString.slice(-10));

//Get SubString function - substr(startPos, length)
console.log(myFirstString.substring(0,4) );
console.log(myFirstString.substring(21,10));
console.log(myFirstString.substring(21));

//String functions
var exampleString = 'This is javascript tutorial'

//toUpperCase() - it converts our string -> uppercase characters
console.log(exampleString.toUpperCase());

//toLowerCase() - it converts our string -> LowerCase Characters
console.log(exampleString.toLowerCase());

//concat() - it merges two or more strings
var firstName = 'Javascript'
var lastName = 'Playground'
console.log(exampleString.concat(firstName));
console.log(exampleString.concat(' ', firstName, ' ', lastName));

//We can also use '+' to concat two or more strings
console.log(firstName+' '+lastName+' '+exampleString);

//trim() - it removes extra spaces
var extraSpaceString = '     mystring     '
console.log(extraSpaceString.trim());

var extraSpaceStringExample2 = '    my string   '
console.log(extraSpaceStringExample2.trim);

//charAt() -> this take a position as an arg returns the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(5));
console.log(charAtExampleString.charAt(11));

//split() splits our string on the basis of the arguments passed

var sampleString = "This is my sample string "
console.log(sampleString.split());

var sampleString2 = "This,is,my,sample,string"
console.log(sampleString2.split(','));

var sampleString3 = 'This is awesome'
console.log(sampleString3.split()); 