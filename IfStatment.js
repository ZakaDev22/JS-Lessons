// Example 1: Simple if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

// Example 2: if-else statement
let score = 75;
if (score >= 50) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}

// Example 3: if-else if-else statement
let temperature = 30;
if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a warm day.");
} else {
    console.log("It's a cold day.");
}

// Example 4: Nested if statement
let username = "admin";
let password = "1234";
if (username === "admin") {
    if (password === "1234") {
        console.log("Access granted.");
    } else {
        console.log("Incorrect password.");
    }
} else {
    console.log("Incorrect username.");
}