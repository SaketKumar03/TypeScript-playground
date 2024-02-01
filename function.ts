//TypeSafe Named function
//function functionName (var :variable type) : returntype{ }
function add(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(add(123, 221));

//Arrow function
const substract = (num1: number, num2: number): number => num1 - num2;

console.log(substract(129, 33));

//Function Expression
const multiply = function (num1: number, num2: number, num3: number): number {
    return num1 * num2 * num3;
}

console.log(multiply(111, 234, 55));

//Optional parameter 
function addOptional(n1: number, n2: number, n3?: number): number {
    return n3 ? n1 + n2 + n3 : n1 + n2;
}
console.log(addOptional(3, 5));
console.log(addOptional(30, 50, 70));

//Required parameter
const substractRequired = (num1: number, num2: number, num3 = 25): number => num1 - num2 - num3;

console.log(substractRequired(129, 33));
console.log(substractRequired(129, 33, 33));

//rest parameters

const multiplyRest = function (num1: number, num2: number, ...num3: number[]): number {
    return num1 * num2 * num3.reduce((num, product) => num * product);
}

let multiplyNums: number[] = [1, 2, 3, 5];

console.log(multiplyRest(10, 2, ...multiplyNums));
console.log(multiplyRest(10, 2, ...[5, 2, 1, 0]));
console.log(multiplyRest(10, 3, 3, 5, 1));

//Generic Functions

function getitems<type>(items: type[]): type[] {
    return new Array<type>().concat(items);
}

let sumofnum = getitems<number>([1, 2, 3, 4]);
let concatenatedString = getitems<string>(['abc', 'bcd', 'zzz']);

console.log(sumofnum);
console.log(concatenatedString);


