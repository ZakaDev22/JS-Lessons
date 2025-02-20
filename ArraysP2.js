// Array of people
let people = ['John', 'Jane', 'Mary', 'Mark', 'Paul'];

// Using splice to add elements without removing any
people.splice(2, 0, 'Alice', 'Bob');
console.log('After adding with splice:', people); // ['John', 'Jane', 'Alice', 'Bob', 'Mary', 'Mark', 'Paul']

// Using splice to remove the last element
let lastPerson = people.splice(-1, 1);
console.log('After removing last element with splice:', people); // ['John', 'Jane', 'Alice', 'Bob', 'Mary', 'Mark']
console.log('Removed last person:', lastPerson); // ['Paul']

// Using slice to create a new array from the beginning to index 3 (not including index 3)
let firstThreePeople = people.slice(0, 3);
console.log('First three people:', firstThreePeople); // ['John', 'Jane', 'Alice']

// Using slice to create a new array from index 2 to the end
let fromSecondPerson = people.slice(2);
console.log('From second person to end:', fromSecondPerson); // ['Alice', 'Bob', 'Mary', 'Mark']