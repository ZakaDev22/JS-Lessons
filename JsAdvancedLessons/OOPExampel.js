
// Get the container element As a Global variable
const container = document.getElementById('container');

// OOP Example in JavaScript
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        container.innerHTML += (` <br/> <hr/> Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Student extends People {
    constructor(name, age, studentId) {
        super(name, age); // Call the parent constructor
        this.studentId = studentId;
    }

    // overriding the greet method
    greet() {
        container.innerHTML += (` <br/> <hr/> Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`);
    }
    // Adding a new method specific to Student
    study() {
        container.innerHTML += (` <br/> <hr/> ${this.name} is studying.`);
    }
}
class Teacher extends People {
    constructor(name, age, subject) {
        super(name, age); // Call the parent constructor
        this.subject = subject;
    }

    // overriding the greet method
    greet() {
        container.innerHTML += (` <br/> <hr/> Hello, my name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`);
    }
    // Adding a new method specific to Teacher
    teach() {
        container.innerHTML += (` <br/> <hr/> ${this.name} is teaching ${this.subject}.`);
    }
}
document.addEventListener('DOMContentLoaded', function () {

    let person = new People("Alice", 30);
    let student = new Student("Bob", 20, "S12345");
    let teacher = new Teacher("Charlie", 40, "Math");

    person.greet();

    student.study();
    student.greet();

    teacher.teach();
    teacher.greet();
});