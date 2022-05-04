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
