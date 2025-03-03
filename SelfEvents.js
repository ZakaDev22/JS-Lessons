// Self Events Examples

// onload event
window.onload = function() {
    console.log("Page is fully loaded");
};

// blur event
document.getElementById("myInput").onblur = function() {
    console.log("Input field lost focus");
};

// focus event
document.getElementById("myInput").onfocus = function() {
    console.log("Input field gained focus");
};

// click event
document.getElementById("myButton").onclick = function() {
    console.log("Button was clicked");
};

// contextmenu event
document.getElementById("myButton").oncontextmenu = function(event) {
    event.preventDefault();
    console.log("Right-click context menu was triggered");
};