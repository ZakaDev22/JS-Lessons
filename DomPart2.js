
let image = document.getElementsByTagName('img')[0];

console.log(image);

image.title = 'A beautiful image';
image.src = '/img/littel panda.jpg';
image.alt = 'A cute panda';
image.width = '300';
image.height = '200';
image.style.border = '2px solid red';

document.write("<p>End of DomPart2.js</p>");

console.log(image)

console.log(image.attributes);

console.log(image.getAttribute('src'));

// Adding a new attribute
image.setAttribute('data-custom', 'customValue');
console.log(image.getAttribute('data-custom'));

// Removing an attribute
image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));

// Checking if an attribute exists
console.log(image.hasAttribute('src'));

// Modifying an existing attribute
image.setAttribute('width', '400');
console.log(image.getAttribute('width'));

// Listing all attributes
for (let attr of image.attributes) {
    console.log(`${attr.name} = ${attr.value}`);
}