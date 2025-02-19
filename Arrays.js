// Creating an array
let fruits = ["Apple", "Banana", "Mango"];

// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Adding elements to an array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Removing the last element from an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// Removing the first element from an array
fruits.shift();
console.log(fruits); // Output: ["Banana", "Mango"]

// Adding an element to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Banana", "Mango"]

// Finding the index of an element
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Removing an element by index
fruits.splice(index, 1);
console.log(fruits); // Output: ["Strawberry", "Mango"]

// Iterating over an array
fruits.forEach((item, index) => {
    console.log(index, item);
});
// Output:
// 0 Strawberry
// 1 Mango

// Mapping an array to a new array
let upperCaseFruits = fruits.map((item) => {
    return item.toUpperCase();
});
console.log(upperCaseFruits); // Output: ["STRAWBERRY", "MANGO"]

// Filtering an array
let filteredFruits = fruits.filter(function(item) {
    return item.startsWith("M");
});
console.log(filteredFruits); // Output: ["Mango"]

// Reducing an array to a single value
let concatenatedFruits = fruits.reduce(function(accumulator, item) {
    return accumulator + " " + item;
}, "");
console.log(concatenatedFruits); // Output: " Strawberry Mango"

// Finding an element in an array
let foundFruit = fruits.find(function(item) {
    return item === "Mango";
});
console.log(foundFruit); // Output: "Mango"


// Finding the index of an element using findIndex
let foundIndex = fruits.findIndex(function(item) {
    return item === "Mango";
});
console.log(foundIndex); // Output: 1

// Checking if an array contains a specific element
let hasMango = fruits.some(function(item) {
    return item === "Mango";
});
console.log(hasMango); // Output: true

// Checking if all elements start with "M"
let allStartWithM = fruits.every((item) => {
    return item.startsWith("M");
});
console.log(allStartWithM); // Output: false

// Concatenating two arrays
let moreFruits = ["Pineapple", "Grapes"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Strawberry", "Mango", "Pineapple", "Grapes"]