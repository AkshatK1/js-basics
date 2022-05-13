// Function Declaration
function walk() {
    console.log('walk');
}
walk();

// Anonymous Function Expression
const run = function () {
    console.log('run');
};
run();

// Named Function Expression
const jog = function name() {
    console.log('jog');
}
jog();

let move = run; // here move references to run() function
move();         // and can be called in this way

// HOISTING
// lets start with an example
// we will make 2 functions, one with function declaration and one with expression
// now lets call them before we define them
// now if we run the code, function declaration will run, but function expression will throw error
// that's because javascript engine moves all the function declaration above at the top of the file, this process is hoisting

a();
// b();

function a() {
    console.log('a');
}
let b = function () {
    console.log('b');
};

// arguments keyword
// using this keyword, we can pass as many arguments we want, even if the declared function has more or less or no parameters
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 4, 5, 3, 10));

// rest operator
function sum2(discount, ...prices) { // here ...prices is an array, ... is rest operator, this whole is called rest parameter
    // rest parameter are always the last parameter, otherwise it will give error
    console.log(discount);
    console.log(prices);
}

console.log(sum2(1, 2, 4, 5, 3, 10));

// default parameters 
function interest(principal, rate = 3.5, years = 5) { // default parameters are already defined parameters
    return principal * rate / 100 * years;
}

console.log(interest(10000));

// getters and setters
// getters => access properties
// setters => change (mutate) properties
const person = {
    firstName: 'Akshat',
    lastName: 'Khandelwal',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Maelstrom Whirl';
console.log(person);

// EXCEPTION HANDLING - try and catch
const person2 = {
    firstName: 'Akshat',
    lastName: 'Khandelwal',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first name and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person2.fullName = 'Maelstrom Whirl'; // change this to null/undefined or a name with only first name to test the exceptions
}
catch (e) {
    alert(e);
}

console.log(person2);

// THIS KEYWORD
// this keyword refers to the object that is executing the current function
// NOTE:
// method -> object
// function -> global (window, global)
// arrow function inherits this keyword

// EXERCISE 1 - SUM OF ARGUEMENTS
function sum(...args) {
    if (args.length === 1 && Array.isArray(args[0]))
        return args[0].reduce((a, b) => a + b);

    return args.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));

// EXERCISE 2 - AREA OF CIRCLE
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);

// EXERCISE 3 - ERROR HANDLING
const numbers = [1, 3, 2, 4];
try {
    const sumO = add(null);
    console.log(sumO);
}
catch (e) {
    console.log(e.message);
}


function add(array) {
    if (!Array.isArray(array))
        throw new Error('Invalid Array');

    return array.reduce((a, b) => a + b);
}