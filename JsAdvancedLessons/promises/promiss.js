// Example 1: Basic Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// Example 2: Simulating an asynchronous operation
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully!");
    }, 2000);
});

fetchData
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

// Example 3: Chaining Promises
const chainExample = new Promise((resolve, reject) => {
    resolve(10);
});

chainExample
    .then(value => {
        console.log("First value:", value);
        return value * 2;
    })
    .then(value => {
        console.log("Second value:", value);
        return value * 3;
    })
    .then(value => {
        console.log("Third value:", value);
    })
    .catch(error => {
        console.error(error);
    });