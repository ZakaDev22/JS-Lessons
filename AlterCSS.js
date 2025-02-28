// Example 1: Using inline style
document.getElementById('myElement').style.color = 'red';

// Example 2: Using classList to add a class
document.getElementById('myElement').classList.add('newClass');

// Example 3: Using setAttribute to set the style attribute
document.getElementById('myElement').setAttribute('style', 'color: blue; background-color: yellow;');

// Example 4: Using CSS variables
document.documentElement.style.setProperty('--main-bg-color', 'lightblue');
document.getElementById('myElement').style.backgroundColor = 'var(--main-bg-color)';

// Example 5: Using a CSS stylesheet
let styleSheet;
for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].title === 'your-title') {
        styleSheet = document.styleSheets[i];
        break;
    }
}
styleSheet.insertRule('#myElement { font-size: 20px; }', styleSheet.cssRules.length);

// example 6: Using the style attribute
document.getElementById('myElement').style.cssText = 
`
    color: green; 
    font-size: 20px;
    background-color: yellow;
    border: 1px solid red;
    margin: 10px;
`;