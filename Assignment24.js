// Tests for equality and inequality with strings
var fruit1 = 'apple';
var fruit2 = 'orange';
console.log("Equality test:", fruit1 == fruit2); // False
console.log("Inequality test:", fruit1 != fruit2); // True
// Tests using the lower case function
var str1 = 'HELLO';
var str2 = 'hello';
console.log("Lower case test:", str1.toLowerCase() == str2.toLowerCase()); // True
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Equality test:", num1 == num2); // False
console.log("Inequality test:", num1 != num2); // True
console.log("Greater than test:", num1 > num2); // True
console.log("Less than test:", num1 < num2); // False
console.log("Greater than or equal to test:", num1 >= num2); // True
console.log("Less than or equal to test:", num1 <= num2); // False
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
console.log("AND operator test:", x > 0 && y > 0); // True
console.log("OR operator test:", x > 0 || y < 0); // True
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("In array test:", fruits.includes('banana')); // True
// Test whether an item is not in an array
console.log("Not in array test:", !fruits.includes('grape')); // True
