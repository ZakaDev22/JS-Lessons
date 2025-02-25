
let Person = {
    name: "John",
    age: 30,
    isAdult: true,
    greet: function() {
        console.log("Hello, my name is " + this.name + ".");
    }
}