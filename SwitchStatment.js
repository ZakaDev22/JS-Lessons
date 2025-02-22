// Example 1: Basic switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Output: Wednesday

// Example 2: Switch statement with multiple cases
let fruit = 'apple';

switch (fruit) {
    case 'apple':
    case 'banana':
        console.log('This is a common fruit.');
        break;
    case 'kiwi':
    case 'mango':
        console.log('This is an exotic fruit.');
        break;
    default:
        console.log('Unknown fruit.');
}

// Example 3: Switch statement with expressions
let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(grade); // Output: B