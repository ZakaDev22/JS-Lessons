// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

// Function to find the maximum of two numbers
function max(a, b) {
    return (a > b) ? a : b;
}

// Function to find the minimum of two numbers
function min(a, b) {
    return (a < b) ? a : b;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to check if a number is even
function isEven(n) {
    return n % 2 === 0;
}

// Function to check if a number is odd
function isOdd(n) {
    return n % 2 !== 0;
}