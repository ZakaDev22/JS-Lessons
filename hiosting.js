// Example of variable hoisting
console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5

// Example of function hoisting
myFunction(); // Output: "Hello, world!"

function myFunction() {
    console.log("Hello, world!");
}

// Example of hoisting with let and const (they are not hoisted in the same way as var)
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;

console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 20;