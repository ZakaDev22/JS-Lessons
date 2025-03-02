// Example 1: Click Event
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

// Example 2: Mouseover Event
document.getElementById('myDiv').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// Example 3: Keydown Event
document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});

// Example 4: Form Submit Event
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Form submitted!');
});

// Example 5: Window Resize Event
window.addEventListener('resize', function() {
    console.log('Window resized to: ' + window.innerWidth + 'x' + window.innerHeight);
});
document.getElementById('myButton').addEventListener('dblclick', function() {
    alert('Button was double-clicked!');
});

document.getElementById('myInput').addEventListener('focus', function() {
    this.style.backgroundColor = 'lightblue';
});

document.getElementById('myInput').addEventListener('blur', function() {
    this.style.backgroundColor = 'white';
});

document.getElementById('mySelect').addEventListener('change', function() {
    alert('Selected value: ' + this.value);
});

document.getElementById('myCheckbox').addEventListener('change', function() {
    alert('Checkbox checked: ' + this.checked);
});

document.getElementById('myDiv').addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu from appearing
    alert('Custom context menu triggered!');
});

window.addEventListener('load', function() {
    console.log('Page fully loaded');
});

window.addEventListener('unload', function() {
    console.log('Page is unloading');
});

window.addEventListener('scroll', function() {
    console.log('Page scrolled to: ' + window.scrollY);
});

document.getElementById('myInput').addEventListener('input', function() {
    console.log('Input value: ' + this.value);
});

document.getElementById('myDiv').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});