// Authentication.js

// Example: Authentication using JavaScript and API

// Mock API URL
const API_URL = "https://example.com/api/authenticate";

// Function to log in a user
async function loginUser(username, password) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error("Authentication failed. Please check your credentials.");
        }

        const data = await response.json();
        console.log("Login successful:", data);
        return data; // Contains token or user info
    } catch (error) {
        console.error("Error during login:", error.message);
    }
}

// Function to fetch protected data using a token
async function fetchProtectedData(token) {
    try {
        const response = await fetch(`${API_URL}/protected`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch protected data.");
        }

        const data = await response.json();
        console.log("Protected data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching protected data:", error.message);
    }
}

// Example usage
(async () => {
    const username = "testUser";
    const password = "testPassword";

    // Log in the user
    const authData = await loginUser(username, password);

    if (authData && authData.token) {
        // Fetch protected data using the token
        await fetchProtectedData(authData.token);
    }
})();