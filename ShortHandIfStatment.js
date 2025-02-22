// Example 1: Ternary Operator
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // Output: Yes

// Example 2: Logical AND (&&)
let isLoggedIn = true;
isLoggedIn && console.log('User is logged in'); // Output: User is logged in

// Example 3: Logical OR (||)
let username = '';
let displayName = username || 'Guest';
console.log(displayName); // Output: Guest

// Example 4: Nullish Coalescing Operator (??)
let user = null;
let defaultUser = user ?? 'Anonymous';
console.log(defaultUser); // Output: Anonymous