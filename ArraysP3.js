// Example array
let numbers = [5, 3, 8, 1, 2];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);
console.log("Sorted in ascending order:", numbers); // Output: [1, 2, 3, 5, 8]

// Sorting the array in descending order
numbers.sort((a, b) => b - a);
console.log("Sorted in descending order:", numbers); // Output: [8, 5, 3, 2, 1]

// Reversing the array
numbers.reverse();
console.log("Reversed array:", numbers); // Output: [1, 2, 3, 5, 8]