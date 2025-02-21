// Example of == (equality) operator
let a = 5;
let b = '5';

console.log(a == b); // true, because == does type coercion

// Example of != (inequality) operator
let c = 10;
let d = '10';

console.log(c != d); // false, because != does type coercion

// Example of === (strict equality) operator
console.log(a === b); // false, because === does not do type coercion

// Example of !== (strict inequality) operator
console.log(c !== d); // true, because !== does not do type coercion

// Example of > (greater than) operator
let e = 15;
let f = 10;

console.log(e > f); // true, because 15 is greater than 10

// Example of < (less than) operator
console.log(f < e); // true, because 10 is less than 15

// Example of >= (greater than or equal to) operator
let g = 20;
let h = 20;

console.log(g >= h); // true, because 20 is equal to 20

// Example of <= (less than or equal to) operator
console.log(f <= g); // true, because 10 is less than 20