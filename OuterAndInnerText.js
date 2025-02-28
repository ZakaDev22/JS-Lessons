// Create a div element
const div = document.createElement('div');
div.innerHTML = `
    <p id="example1">Hello <span>World</span></p>
    <p id="example2">Hello <span>World</span></p>
    <p id="example3">Hello <span>World</span></p>
`;
document.body.appendChild(div);

// Example using outerText
const example1 = document.getElementById('example1');
console.log('outerText:', example1.outerText); // Outputs: "Hello World"

// Example using innerText
const example2 = document.getElementById('example2');
console.log('innerText:', example2.innerText); // Outputs: "Hello World"

// Example using textContent
const example3 = document.getElementById('example3');
console.log('textContent:', example3.textContent); // Outputs: "Hello World"

// Modifying outerText
example1.outerText = 'New Outer Text';
console.log('Modified outerText:', div.innerHTML); // The entire <p> element is replaced

// Modifying innerText
example2.innerText = 'New Inner Text';
console.log('Modified innerText:', div.innerHTML); // Only the text inside the <p> element is replaced

// Modifying textContent
example3.textContent = 'New Text Content';
console.log('Modified textContent:', div.innerHTML); // Only the text inside the <p> element is replaced