// Example 1: Basic try-catch-finally
try {
    // Code that may throw an error
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred: ", error.message);
} finally {
    // Code that will always run, regardless of an error
    console.log("This will always run");
}

// Example 2: Handling a specific error
try {
    // Code that may throw an error
    let jsonString = '{"name": "John", "age": 30}';
    let user = JSON.parse(jsonString);
    console.log(user.name);
} catch (error) {
    // Code to handle the error
    if (error instanceof SyntaxError) {
        console.error("JSON Syntax Error: ", error.message);
    } else {
        console.error("An error occurred: ", error.message);
    }
} finally {
    // Code that will always run, regardless of an error
    console.log("Parsing attempt finished");
}

// Example 3: Nested try-catch-finally
try {
    try {
        // Code that may throw an error
        let numbers = [1, 2, 3];
        console.log(numbers[5].toString());
    } catch (error) {
        // Code to handle the error
        console.error("Inner error: ", error.message);
    } finally {
        // Code that will always run, regardless of an error
        console.log("Inner finally block");
    }
} catch (error) {
    // Code to handle the error
    console.error("Outer error: ", error.message);
} finally {
    // Code that will always run, regardless of an error
    console.log("Outer finally block");
}