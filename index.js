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

// NOTE:- DEFAULT VALUE OF ANY VARIABLE IN JAVASCRIPT IS UNDEFINED

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

// Functions
// function without parameters
function greet() {
    console.log('Hello World');
}
greet(); // funtion call

// functions with parameters
function greet2(name) { //name is parameter here
    console.log('Hello ' + name);
}
greet2('Akshat'); // funtion call, 'Akshat' is Arguement here1
greet2('Nae'); // we can call funtion as many times as possible with different arguements

//multiple parameters funtion
function greet3(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}
greet3('Akshat', 'Khandelwal');

// above functions were example of "performing a task"
// below function is an example of "calculating a value"
function square(number) {
    return number * number;
}
let squaredResult = square(2);
console.log(squaredResult);
console.log(square(2)); //2nd way of printing result, as we don't necessarily need a variable

// OPERATORS
// 5 operators in javascript
// --arithmetic
// --assignment
// --comparison
// --logical
// --bitwise

// Arithmetic Operator
let x = 10;
let y = 13;
console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // remainder of division
console.log(x ** y); // exponentiation
// increment operator (++)
console.log('x++ = ' + x++); // first print x, then increase its value
console.log('x = ' + x); // to check if above comment is true
console.log('++x = ' + ++x); // first increase the value of x and then print x
console.log('x = ' + x); // to check
// decrement operator (--)
console.log('x-- = ' + x--); // first print x, then decrease its value
console.log('x = ' + x); // to check if above comment is true
console.log('--x = ' + --x); // first decrese the value of x and then print x
console.log('x = ' + x);

// Assignment Operators
x += 5; // Addition assignment, same as x = x + 5
console.log('x+=5 = ' + x);
x -= 5; // subtraction assignment, x = x- 5;
console.log('x-=5 = ' + x);
x /= 5; // division assignment, x = x/5;
console.log('x/=5 = ' + x);
x *= 5; // multiplication assignment, x=x*5; 
console.log('x*=5 = ' + x);
x %= 5; // modulus assignment, x=x%5
console.log('x%=5 = ' + x);

// Comparison Operators
// -- Relational
// -- Equality

// Relational operators
x = 1;
console.log(x > 0); // greater than
console.log(x >= 1); // greater than equal to
console.log(x < 1); // less than
console.log(x <= 1); // lesser than equal to

// Equality operators
console.log(x === 1); // equal to, strict equality
console.log(x !== 1); // not equal to

// Strict equaltiy (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// lose equality (Value)
console.log(1 == 1);
console.log('1' == 1); // '1' == '1'
console.log(true == 1); // true = 1, false = 0
//NOTE: lose equaltiy doesnt match type, only value. if the variable on both sides does not have same data type, it changes
//      the datatype to match both and gives the result.

// TERNARY OPERATOR
// eg - If as customer has more that 100 points, they are 'GOLD' Customer otherwise they are 'SILVER'
let points = 120;
let type = points > 100 ? 'GOLD' : 'SILVER';
console.log(type);

// LOGICAL OPERATORS 
// Logical AND (&&) , returns true if both operands are true
// Logical OR (||)  , returns true if one of the operands are true
// Logical NOT (!)

// Logical Operators with Non-Booleans
// -- Falsy
// -- Truthy

// Falsy
// -- undefined
// -- null
// -- 0
// -- false
// -- ''
// -- NaN

// Truthy -> Anything that is not Falsy

console.log(false || true); // true
console.log(false || 'Akshat'); // 'Akshat'
console.log(false || 1); // 1
console.log(false || 1 || 2); // 1 -> This concept is called short-circuiting, only first operator is evaluated
console.log(false || 0);

// NOTE:- If the other side of operator has any other value than true or false, truthy is returned
// example - suppose user has to select a color, if he doesnt select a color, return the default color
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
userColor = undefined;
currentColor = userColor || defaultColor;
console.log(currentColor);