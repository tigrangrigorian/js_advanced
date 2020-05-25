// SIMPLE TYPES

// String
let str: string = "String";

// Number
let num: number = 15;

// Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

// Other
let unknown: any = "1";
unknown = 1;
unknown = true;

// Different
let def: string | number = "1";
def = 1;
def = "str";

// OBJECT TYPES

// Array
let arrNum_1: number[] = [1, 2, 3];
let arrNum_2: Array<number> = [1, 2, 3];

let arrStr_1: string[] = ['1', '2', '3'];
let arrStr_2: Array<string> = ['1', '2', '3'];

let arrBool_1: boolean[] = [true, false];
let arrBool_2: Array<boolean> = [true, false];

// Tuples
let array_1: [number, number, string] = [1, 2, "3"];

let array_2: [boolean,string, number] = [true,"text",10];

// Error
// let array_3: Array<number,string> = [15, "Text"];

// FUNCTIONS

//Return string
const myName: string = "Sem";
function getMyName(): string {
    return myName;
}
console.log(getMyName());

//Return number
const myAge: number = 27;
function getMyAge(): number {
    return myAge;
}
console.log(getMyAge());

//Return Different
function getAge(age: number = 45, prefix: string = "Someone") : string {
    return `${prefix} is ${age}`;
}
console.log(getAge(27, "Sem"));

// Return Undefined(Void)
function consLog(str: string): void {
    console.log(str);
}
consLog("Test string");

//

const testFunc = () => 1 + 1;
const testFunc2 = function() {
    return 1+1;
};

let mySum: (a:number, b:number) => number;

function sum(num1: number, num2: number):number {
    return num1+num2;
}
mySum = sum;

console.log(mySum(5, 10));




























