
document.write("<h1>DomPart1.js</h1>");

document.getElementsByTagName("h1")[1].style.color = "red";

let paragraph2 = document.getElementById('koko');

paragraph2.style.color = "blue";

let paragraph4 = document.getElementsByClassName('ss');

paragraph4[0].style.color = "green";

// Create a new paragraph element and add it to the body
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph added to the body.';
document.body.appendChild(newParagraph);

// Move an existing element to a new location
let header = document.getElementsByTagName('h1')[0];
document.body.insertBefore(header, newParagraph);

// Remove an element from the page
let elementToRemove = document.getElementById('koko');
elementToRemove.parentNode.removeChild(elementToRemove);

document.write("<p>Paragraph 2 has been removed from the page.</p>");

document.write("<p>End of DomPart1.js</p>");

document.querySelectorAll('p').forEach((p) => {

    p.style.backgroundColor = '#ff3';
    p.style.color = '#E1E';
    p.style.fontWeight = 'bold';
    p.style.fontSize = '20px';
});