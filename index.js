console.log('This is from file')

let name = 'Akshat';
console.log(name);

// rules for variables
// --cannot be a reserved keyword
// --should be meaningful
// --cannot start with a number (eg - 1name)
// --cannot contain a space or hyphen (dash - )
// --they ar case sensitive
// --stick with camel notation

let firstName = 'Akshat';
let lastName = 'Khandelwal';

//constants

let interestRate = 0.3;
// const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// let allows variable value to be changed, so if varaible needs to be reassigned - use let
// const doesnt allow variable value to change, so if variable doesnt need to  be reassigned - use const

// PRIMITIVE/VALUE TYPES
// --String
// --Number
// --Boolean
// --undefined
// --null

let name1 = 'Akshat'; // String Literal
let age = 21; // Number Literal
let isApproved = true; // Boolean Literal
let size = undefined;
let selectedColor = null;

// 2 types of languages - Static and Dynamic
// datatype of variables cant be changed in static languages
// datatype of variables can be changed in dynamic languages at runtime
// Javascript is a dynamic language

// REFERENCE TYPES
// --Object
// --Array
// --Function

// object example

let person = {
    name: 'Akshat',
    age: 21  
};

// (eg - we have to change name of the person)
// Dot Notation 
person.name = 'John';
// Bracket Notation
person['name'] = 'Mary';

// suppose the property to be accessed is to be determined by user at a later point in program, then we use bracket notation
let selection = 'age';
person[selection] = 23;
console.log(person);
console.log(person.name);

// Arrays
// type of array is object
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]); // refer to any element in array in this way
selectedColors[2] = 'green'; // adding element dynamically to the array
console.log(selectedColors);
selectedColors[2] = 1; // we can even change the type of any particular element in js
console.log(selectedColors);