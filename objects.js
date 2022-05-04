// Object Oriented Programming (OOP) Style

const circle = {
    radius: 2,
    location: {
        x: 10,
        y: 10
    },
    draw: function () {
        console.log('Draw Circle');
    }
};

circle.draw(); //method

//Dynamic Nature of objects in JS

const ellipse = {
    radius: 1
};

ellipse.color = 'red';
ellipse.draw = function () { };
console.log(ellipse);

delete ellipse.color;
delete ellipse.draw;

console.log(ellipse);

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}
const circle2 = createCircle(1);
console.log(circle2);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);
console.log(another);

// NOTE: Functions are objects in Java

// REFERENCE TYPES IN JS
// -- Object
// -- Function
// -- Array

// NOTE: Primitives are copied by their value, Objects are copied by their reference
// example:- 
let x = {
    value: 10
};
let y = x;
console.log("x = ", x);
console.log('y = ', y);
x.value = 20;
console.log("x = ", x);
console.log('y = ', y);

// NOTE: Object is not iterable, so for-of loop won't work, because for-of loop only works on array and maps

Object.keys(circle); // return keys of object as an array

for (let key of Object.keys(circle)) // here for of loop works, because Object.keys return array of keys of an object
    console.log(key);

Object.entries(circle); // will return all the entries of an object (the key value pair) as array

for (let entry of Object.entries(circle)) // here for of loop works, because Object.keys return array of keys of an object
    console.log(entry);

if ('color' in circle) console.log('yes'); // to check if 'color' property is present in circle object, change to 'draw' to see yes

// CLONING AN OBJECT

const copyOfCircle = {}; // copy of circle object

// Old Way
for (let key in circle) {
    copyOfCircle[key] = circle[key];
}
console.log(copyOfCircle);

// Object.assign() method
const copyOfCircle2 = Object.assign({}, circle);
console.log('2', copyOfCircle2);
// this can append properties of other object in it with asssign method, like shown below
const copyOfCircle3 = Object.assign({
    color: 'yellow'
}, circle);
console.log('3', copyOfCircle3);

// spread operator (...)
const copyOfCircle4 = { ...circle };
console.log("4", copyOfCircle4);

// TEMPLATE LITERALS IN JS

const message = 'This is my \'first\' message'; // String primitive
console.log(message);

const templateString = `This is my 'first' message`; // template using backtick (`)
console.log(templateString);
// both prints the same message, which code looks cleaner? 
// furthurmore, its easier and faster if we use template literals
// suppose you have to write mail, formatting becomes easier in template literal

// another example of template literal
const name = 'Akshat';
const normalMail = 'Hi ' + name + ',\n\n' + 'Thank you for joining my mailing list.\n\nRegards,\nDank Memer';
const templateMail =
    `Hi ${name},

Thank you for joining my mailing list.

Regards,
Dank Memer`;

console.log(normalMail);
console.log(templateMail);

// EXERCISE - Address Object

let Address = {
    street: '74 Taylor Street',
    city: 'New York City',
    zipCode: '10011',
};

function showAddress(address) {
    // console.log(`Address: ${address.street}, ${address.city}, ${address.zipCode}.`); 
    // i did this by above because we know what properties address object have
    // in case we don't know what properties address object have
    let completeAddress = '';
    for (let key in address)
        completeAddress += `${key}: ${address[key]} `;

    console.log(completeAddress);
}

showAddress(Address);

// EXERCISE - Factory and Constructor Functions

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    };
}
const address = createAddress('74 Taylor Street', 'New York City', '10011');
console.log(address);

// Constructor Function
function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
const address2 = new CreateAddress('74 Taylor Street', 'New York City', '10011');
console.log(address2);