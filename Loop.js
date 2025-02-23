// For loop
for (let i = 0; i < 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

// for loop with array lenght
const fruits = ['Apple', 'Banana', 'Mango'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit: ${fruits[i]}`);
}
for (let i = fruits.length -1 ; i >= 0; i--) {
    console.log(`Fruit: ${fruits[i]}`);
}

// While loop
let j = 0;
while (j < 5) {
    console.log(`While loop iteration: ${j}`);
    j++;
}

// Do-While loop
let k = 0;
do {
    console.log(`Do-While loop iteration: ${k}`);
    k++;
} while (k < 5);

// For-Of loop (used with iterable objects like arrays)
const array = ['a', 'b', 'c', 'd', 'e'];
for (const element of array) {
    console.log(`For-Of loop element: ${element}`);
}

// For-In loop (used with objects)
const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`For-In loop key: ${key}, value: ${object[key]}`);
    }
}