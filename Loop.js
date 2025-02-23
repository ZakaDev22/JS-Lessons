// // For loop
// for (let i = 0; i < 5; i++) {
//     console.log(`For loop iteration: ${i}`);
// }

// // For loop with array length
// let fruits = ['Apple', 'Banana', 'Mango'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Fruit: ${fruits[i]}`);
// }

// // While loop
// let j = 0;
// while (j < 5) {
//     console.log(`While loop iteration: ${j}`);
//     j++;
// }

// // Do-While loop
// let k = 0;
// do {
//     console.log(`Do-While loop iteration: ${k}`);
//     k++;
// } while (k < 5);

// // For-Of loop (used with iterable objects like arrays)
// const array = ['a', 'b', 'c', 'd', 'e'];
// for (const element of array) {
//     console.log(`For-Of loop element: ${element}`);
// }

// // For-In loop (used with objects)
// const object = {a: 1, b: 2, c: 3};
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         console.log(`For-In loop key: ${key}, value: ${object[key]}`);
//     }
// }

// Nested loop
let cars = ['BMW', 'Audi', 'Mercedes'];
let colors = ['Red', 'Blue', 'Green'];

for (let car of cars) {
    console.log(`======== Car: ${car} =========`);
    console.log(`Colors: `);
    for (let color of colors) {
        console.log(`Car: ${car}, Color: ${color}`);
    }
}
// Break example
console.log("Break example:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(`Iteration: ${i}`);
}

// Continue example
console.log("Continue example:");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`Iteration: ${i}`);
}