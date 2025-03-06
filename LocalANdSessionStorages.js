// Example of localStorage usage

// Set item in localStorage
localStorage.setItem('username', 'JohnDoe');

// Get item from localStorage
const username = localStorage.getItem('username');
console.log(username); // Output: JohnDoe

// Remove item from localStorage
localStorage.removeItem('username');

// Clear all items from localStorage
localStorage.clear();

// Example of sessionStorage usage

// Set item in sessionStorage
sessionStorage.setItem('sessionID', '123456');

// Get item from sessionStorage
const sessionID = sessionStorage.getItem('sessionID');
console.log(sessionID); // Output: 123456

// Remove item from sessionStorage
sessionStorage.removeItem('sessionID');

// Clear all items from sessionStorage
sessionStorage.clear();