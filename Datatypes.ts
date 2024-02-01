let lname = 'Jhon';

//String declaration
let fname: string;
fname = 'saket'

let UpperFname: string


//as fname was declared as string we can use all thebuilt in functions of string with it now.
UpperFname = fname.toUpperCase();

console.log(lname);
console.log(fname);
console.log(UpperFname);
//lname =10;

//Number

let age = 20;

let ageNo: number;

ageNo = 25;
let dob: string = '25';

//Convert string to int
ageNo = parseInt(dob);


//Boolean

let isvalid: boolean;
isvalid = false;

//In TypeScript as the Strict mode is on we need to first a value to the variabe before we can use it
console.log(isvalid);


//Array

let Emplist: string[];
let EmpNo: number[];

//another syntax
let DeptList: Array<string>;
let NumList: Array<number>;

Emplist = ['abhishek', 'swaraj', 'josh'];
EmpNo = [1, 2, 3];
DeptList = ['CSE', 'ECE', 'EEE'];
NumList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//(method) Array<number>.filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[] (+1 overload)
//filter() helps to filter an array to a new array with required elements
let result = NumList.filter((num) => num % 2 == 0);

//(method) Array<string>.find(predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any): string | undefined (+1 overload)
//find() is used to find a particular item in the array
let Emp = Emplist.find(emp => emp == 'abhishek');

/*
(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)
reduce() can be used in object of products. let's say we need to calculate the sum of products present
in a cart so we can reduce the whole to a sum. returns a single value
*/
let SumOfNumList = NumList.reduce((acc,num) => acc+num );


console.log(result);
console.log(Emp);
console.log(SumOfNumList);

//Enum
const enum colour{
    red,
    green,
    blue
}

let rang = colour.red;

console.log(rang);

//Tuples
let SwapNum  : [number,number];

function SwapNumbers( n1:number, n2:number):[number,number]{
    return [n2,n1];
}
SwapNum = SwapNumbers(5,7);

console.log(SwapNum);


//Any  - We can assign anything to it
//avoid using any in tyescript, it defeats the purpose.
let department : any;

//this is also of the type any
let anything;

department="IT";
department = 10;

console.log(department);
