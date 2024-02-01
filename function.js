"use strict";
//TypeSafe Named function
//function functionName (var :variable type) : returntype{ }
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(123, 221));
//Arrow function
const substract = (num1, num2) => num1 - num2;
console.log(substract(129, 33));
//Function Expression
const multiply = function (num1, num2, num3) {
    return num1 * num2 * num3;
};
console.log(multiply(111, 234, 55));
//Optional parameter 
function addOptional(n1, n2, n3) {
    return n3 ? n1 + n2 + n3 : n1 + n2;
}
console.log(addOptional(3, 5));
console.log(addOptional(30, 50, 70));
//Required parameter
const substractRequired = (num1, num2, num3 = 25) => num1 - num2 - num3;
console.log(substractRequired(129, 33));
console.log(substractRequired(129, 33, 33));
//rest parameters
const multiplyRest = function (num1, num2, ...num3) {
    return num1 * num2 * num3.reduce((num, product) => num * product);
};
let multiplyNums = [1, 2, 3, 5];
console.log(multiplyRest(10, 2, ...multiplyNums));
console.log(multiplyRest(10, 2, ...[5, 2, 1, 0]));
console.log(multiplyRest(10, 3, 3, 5, 1));
//Generic Functions
function getitems(items) {
    return new Array().concat(items);
}
let sumofnum = getitems([1, 2, 3, 4]);
let concatenatedString = getitems(['abc', 'bcd', 'zzz']);
console.log(sumofnum);
console.log(concatenatedString);
