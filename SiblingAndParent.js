// Example HTML structure
/*
<div id="parent">
    <div id="child1">Child 1</div>
    <div id="child2">Child 2</div>
    <div id="child3">Child 3</div>
</div>
*/

// Accessing parent element
const child1 = document.getElementById('child1');
const parent = child1.parentElement;
console.log(parent); // <div id="parent">...</div>

// Accessing next sibling element
const nextSibling = child1.nextElementSibling;
console.log(nextSibling); // <div id="child2">Child 2</div>

// Accessing previous sibling element
const child3 = document.getElementById('child3');
const previousSibling = child3.previousElementSibling;
console.log(previousSibling); // <div id="child2">Child 2</div>

// Accessing next sibling of the next sibling
const nextSiblingOfNextSibling = nextSibling.nextElementSibling;
console.log(nextSiblingOfNextSibling); // <div id="child3">Child 3</div>

// Accessing previous sibling of the previous sibling
const previousSiblingOfPreviousSibling = previousSibling.previousElementSibling;
console.log(previousSiblingOfPreviousSibling); // <div id="child1">Child 1</div>

// Accessing next sibling of the parent (should be null as parent has no siblings)
const nextSiblingOfParent = parent.nextElementSibling;
console.log(nextSiblingOfParent); // null

// Accessing previous sibling of the parent (should be null as parent has no siblings)
const previousSiblingOfParent = parent.previousElementSibling;
console.log(previousSiblingOfParent); // null