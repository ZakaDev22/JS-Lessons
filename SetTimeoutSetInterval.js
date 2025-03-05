// Example of setTimeout
let test = setTimeout(() => {
    console.log('This message is displayed after 3 seconds');
}, 3000);

clearTimeout(test); // Clear the timeout before it executes

// Example of setInterval
let count = 0;
const intervalId = setInterval(() => {
    count += 1;
    console.log(`This message is displayed every 2 seconds. Count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId);
        console.log('Interval cleared after 5 executions');
    }
}, 2000);