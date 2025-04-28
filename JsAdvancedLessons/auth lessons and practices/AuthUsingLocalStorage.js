// AuthUsingLocalStorage.js

class AuthService {
    constructor() {
        this.localStorageKey = 'users';
        this.init();
    }

    // Initialize local storage with an empty array if not already set
    init() {
        if (!localStorage.getItem(this.localStorageKey)) {
            localStorage.setItem(this.localStorageKey, JSON.stringify([]));
        }
    }

    // Create a new user
    registerUser(username, password) {
        const users = JSON.parse(localStorage.getItem(this.localStorageKey));
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            throw new Error('User already exists');
        }

        users.push({ username, password });
        localStorage.setItem(this.localStorageKey, JSON.stringify(users));
        return 'User registered successfully';
    }

    // Authenticate user
    loginUser(username, password) {
        const users = JSON.parse(localStorage.getItem(this.localStorageKey));
        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            throw new Error('Invalid username or password');
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        return 'Login successful';
    }

    // Get current logged-in user
    getCurrentUser() {
        const currentUser = localStorage.getItem('currentUser');
        return currentUser ? JSON.parse(currentUser) : null;
    }

    // Logout user
    logoutUser() {
        localStorage.removeItem('currentUser');
        return 'Logout successful';
    }

    // Delete a user
    deleteUser(username) {
        const users = JSON.parse(localStorage.getItem(this.localStorageKey));
        const updatedUsers = users.filter(user => user.username !== username);

        if (users.length === updatedUsers.length) {
            throw new Error('User not found');
        }

        localStorage.setItem(this.localStorageKey, JSON.stringify(updatedUsers));
        return 'User deleted successfully';
    }
}

// Example usage
const authService = new AuthService();

try {
    console.log(authService.registerUser('john_doe', 'password123')); // Register user
    console.log(authService.loginUser('john_doe', 'password123')); // Login user
    console.log(authService.getCurrentUser()); // Get current user
    console.log(authService.logoutUser()); // Logout user
    console.log(authService.deleteUser('john_doe')); // Delete user
} catch (error) {
    console.error(error.message);
}