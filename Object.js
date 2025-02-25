let greetFunction = function() {
    console.log("Hi, I'm " + this.name + " and I work as a " + this.position + ".");
};

let Person = {
    name: "John",
    age: 30,
    isAdult: true,
    greet: function() {
        console.log("Hello, my name is " + this.name + ".");
    }
};

let Company = {
    name: "TechCorp",
    location: "New York",
    employees: {
        employee1: {
            name: "Alice",
            position: "Developer",
            greet: greetFunction
        },
        employee2: {
            name: "Bob",
            position: "Designer",
            greet: greetFunction
        }
    },
    describe: function() {
        console.log("Company " + this.name + " is located in " + this.location + ".");
    }
};

Person.greet(); // Output: "Hello, my name is John."
Company.describe(); // Output: "Company TechCorp is located in New York."
Company.employees.employee1.greet(); // Output: "Hi, I'm Alice and I work as a Developer."
Company.employees.employee2.greet(); // Output: "Hi, I'm Bob and I work as a Designer."