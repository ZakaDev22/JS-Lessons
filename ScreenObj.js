// Example 1: Get screen width and height
console.log("Screen Width: " + screen.width);
console.log("Screen Height: " + screen.height);

// Example 2: Get available screen width and height (excluding taskbars, etc.)
console.log("Available Screen Width: " + screen.availWidth);
console.log("Available Screen Height: " + screen.availHeight);

// Example 3: Get screen color depth
console.log("Screen Color Depth: " + screen.colorDepth);

// Example 4: Get screen pixel depth
console.log("Screen Pixel Depth: " + screen.pixelDepth);

// Example 5: Check if the screen is in landscape or portrait mode 1
if (screen.width > screen.height) {
    console.log("The screen is in landscape mode.");
} else {
    console.log("The screen is in portrait mode.");
}

// Example 5: Check if the screen is in landscape or portrait mode 2

console.log(screen.orientation.type); // Outputs: portrait-primary or landscape-primary
