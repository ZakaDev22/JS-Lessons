// Example 1: Global Context
console.log(this); // In a browser, this will refer to the window object

// Example 2: Object Method
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // Outputs: John Doe

// Example 3: Constructor Function
function Car(make, model) {
    this.make = make;
    this.model = model;
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make); // Outputs: Toyota

// Example 4: Explicit Binding with call()
const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
const person2 = {
    firstName: "Jane",
    lastName: "Smith"
};
console.log(person1.fullName.call(person2)); // Outputs: Jane Smith

// Example 5: Arrow Functions
const obj = {
    value: 10,
    arrowFunc: () => {
        console.log(this.value); // In arrow functions, `this` retains the value from the enclosing context
    },
    regularFunc: function() {
        console.log(this.value); // In regular functions, `this` refers to the object that called the function
    }
};
obj.arrowFunc(); // Outputs: undefined (or window.value in browsers)
obj.regularFunc(); // Outputs: 10