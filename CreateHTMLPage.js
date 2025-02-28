

let container = document.createElement('div');
// container.innerHTML = `
//     <h1>HTML Page</h1>
//     <p>This is a paragraph in the HTML page.</p>
//     <p>This is another paragraph in the HTML page.</p>
//     <p>This is a third paragraph in the HTML page.</p>
// `;

let h1 = document.createElement('h1');
// h1.textContent = 'HTML Page';
let textcontent = document.createTextNode('HTML Page');
h1.appendChild(textcontent);

let p1 = document.createElement('p');
// p1.textContent = 'This is a paragraph in the HTML page.';
let textcontent1 = document.createTextNode('This is a paragraph in the HTML page.');
p1.appendChild(textcontent1);

let img = document.createElement('img');
img.src = '/img/littel panda.jpg';
img.alt = 'A cute panda';
img.width = '300';
img.height = '200';
img.style.border = '2px solid red';

container.appendChild(h1);
container.appendChild(p1);
container.appendChild(img);

// Using a template literal to create the HTML structure
let template = `
    <h1>HTML Page</h1>
    <p>This is a paragraph in the HTML page.</p>
    <p>This is another paragraph in the HTML page.</p>
    <p>This is a third paragraph in the HTML page.</p>
`;

container.innerHTML = template;

document.body.appendChild(container);

document.body.style.backgroundColor = 'lightblue';

