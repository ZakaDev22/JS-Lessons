// Example 1: Basic arrow function
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// Example 2: Arrow function with no parameters
const greet = () => console.log('Hello, World!');
greet(); // Output: Hello, World!

const greet2 = _ => console.log('Hello, World!');
greet2(); // Output: Hello, World!

// Example 3: Arrow function with a single parameter
const square = x => x * x;
console.log(square(4)); // Output: 16

// Example 4: Arrow function with multiple lines of code
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(3, 4)); // Output: 12

// Example 5: Arrow function returning an object
const createUser = (name, age) => ({ name, age });
console.log(createUser('Alice', 25)); // Output: { name: 'Alice', age: 25 }

// Example 6: Arrow function with default parameters
const greetWithName = (name = 'Guest') => `Hello, ${name}!`;
console.log(greetWithName()); // Output: Hello, Guest!
console.log(greetWithName('Alice')); // Output: Hello, Alice!

// Example 7: Arrow function with rest parameters
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Example 8: Arrow function used as a callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Example 9: Arrow function with array destructuring
const getFirstTwo = ([first, second]) => `First: ${first}, Second: ${second}`;
console.log(getFirstTwo([10, 20, 30])); // Output: First: 10, Second: 20

// Example 10: Arrow function with object destructuring
const getUserInfo = ({ name, age }) => `Name: ${name}, Age: ${age}`;
console.log(getUserInfo({ name: 'Bob', age: 30 })); // Output: Name: Bob, Age: 30

// Example 11: Arrow function with a promise
const fetchData = url => fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
fetchData('https://jsonplaceholder.typicode.com/todos/3');