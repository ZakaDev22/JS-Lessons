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

// Using indexOf to find the index of 'Mary'
let indexOfMary = people.indexOf('Mary');
console.log('Index of Mary:', indexOfMary); // 4

// Using includes to check if 'Jane' is in the array
let hasJane = people.includes('Jane');
console.log('Array includes Jane:', hasJane); // true

// Using find to get the first person whose name starts with 'M'
let firstPersonWithM = people.find(person => person.startsWith('M'));
console.log('First person with name starting with M:', firstPersonWithM); // 'Mary'

// Using findIndex to get the index of the first person whose name starts with 'B'
let indexOfFirstPersonWithB = people.findIndex(person => person.startsWith('B'));
console.log('Index of first person with name starting with B:', indexOfFirstPersonWithB); // 3

// last two elements
let lastTwoPeople = people.slice(-2);
console.log('Last two people:', lastTwoPeople); // ['Mark', 'Paul']