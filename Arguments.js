// Example 1: Function with arguments
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

// Example 2: Function with multiple arguments
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8

// Example 3: Using the arguments object
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
function sum2(...Numbers) {
    let total = 0;
    for (let i = 0; i < Numbers.length; i++) {
        total += Numbers[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum2(1, 2, 3, 4)); // Output: 10

// Example 4: Default parameters
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

// Example 5: Rest parameters
function concatenate(separator, ...strings) {
    return strings.join(separator);
}

console.log(concatenate(", ", "red", "green", "blue")); // Output: red, green, blue