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

console.log("Chaining promises:");
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

    console.log("Chaining promises with async operation:");
    const asyncChainExample = new Promise((resolve, reject) => {
      resolve(10);
    }); 

    asyncChainExample
      .then((value) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(value * 2), 1000); // Simulate async operation
        });
      })
      .then((value) => {
        console.log("After async operation:", value); // Logs: After async operation: 20
        return value * 3;
      })
      .then((value) => {
        console.log("Final value:", value); // Logs: Final value: 60
      })
      .catch((error) => console.error(error));