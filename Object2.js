// Old ways

// 1. Using Object Literals
var obj1 = {
    name: "John",
    age: 30
};

// 2. Using the Object Constructor
var obj2 = new Object();
obj2.name = "Jane";
obj2.age = 25;

// 3. Using a Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var obj3 = new Person("Alice", 28);

// New ways

// 4. Using ES6 Classes
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var obj4 = new PersonClass("Bob", 32);

// 5. Using Object.create()
var proto = {
    greet: function() {
        console.log("Hello!");
    }
};
var obj5 = Object.create(proto);
obj5.name = "Charlie";
obj5.age = 22;

// 6. Using ES6 Object.assign()
var obj6 = Object.assign({}, { name: "David", age: 35 });

// 7. Using ES6 Spread Operator
var obj7 = { ...{ name: "Eve", age: 29 } };