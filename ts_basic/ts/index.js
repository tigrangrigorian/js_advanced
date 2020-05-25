// SIMPLE TYPES
// String
var str = "String";
// Number
var num = 15;
// Boolean
var isTrue = true;
var isFalse = false;
// Other
var unknown = "1";
unknown = 1;
unknown = true;
// Different
var def = "1";
def = 1;
def = "str";
// OBJECT TYPES
// Array
var arrNum_1 = [1, 2, 3];
var arrNum_2 = [1, 2, 3];
var arrStr_1 = ['1', '2', '3'];
var arrStr_2 = ['1', '2', '3'];
var arrBool_1 = [true, false];
var arrBool_2 = [true, false];
// Tuples
var array_1 = [1, 2, "3"];
var array_2 = [true, "text", 10];
// Error
// let array_3: Array<number,string> = [15, "Text"];
// FUNCTIONS
//Return string
var myName = "Sem";
function getMyName() {
    return myName;
}
console.log(getMyName());
//Return number
var myAge = 27;
function getMyAge() {
    return myAge;
}
console.log(getMyAge());
//Return Different
function getAge(age, prefix) {
    if (age === void 0) { age = 45; }
    if (prefix === void 0) { prefix = "Someone"; }
    return prefix + " is " + age;
}
console.log(getAge(27, "Sem"));
// Return Undefined(Void)
function consLog(str) {
    console.log(str);
}
consLog("Test string");
//
var testFunc = function () { return 1 + 1; };
var testFunc2 = function () {
    return 1 + 1;
};
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(5, 10));
