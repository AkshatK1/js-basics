// Conditional Statements
// -- If...else
// -- Switch...case

// IF-ELSE
// eg - If hour is between 6am to 12pm: Good Morning
//      If hour is between 12pm to 6pm: Good Afternoon
//      Otherwise:                      Good Evening

let hour = 18;
if (hour >= 6 && hour < 12)
    console.log('Good Morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');


// SWITCH - CASE

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest Account');
        break;
    case 'moderator':
        console.log('Moderator Account');
        break;
    default:
        console.log('Unknown User');
}

// LOOPS in JS
// -- For
// -- While
// -- Do...While
// -- For...in
// -- For...of

// for loop
for (let i = 1; i <= 5; i++) {
    if (i % 2 == 0)
        console.log(i);
}

// while loop
let i = 1;
while (i <= 5) {
    if (i % 2 == 0)
        console.log(i);
    i++;
}

// do-while loop
i = 10;
do {
    if (i % 2 == 0)
        console.log(i);
    i++;
}
while (i <= 5);

// for...in loop, to iterate over properties of an object
const person = {
    name: 'Akshat',
    age: 21
};

for (let key in person) {
    console.log(key, person[key]);
}

const colors = ['red', 'blue', 'green'];
for (let index in colors) {
    console.log(index, colors[index]);
};

// for-of loop, to iterate items of an array
for (let color of colors) {
    console.log(color);
}

// EXERCISE - max of 2 numbers

function max(a, b) {
    return (a > b) ? a : b;
}

let no1 = 10;
let no2 = 12;
console.log(max(no1, no2));

// EXERCISE - landscape or potrait

function isLandscape(width, height) {
    return (width > height) ? 'landscape' : 'potrait';
}
let w = 1920;
let h = 1080;
console.log(isLandscape(w, h));

// EXERCISE - fizzBuzz

const output = fizzBuzz('2');
console.log(output);
function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number';

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}

// EXERCISE - Demerit points

const speedLimit = 70;
const kmPerPoint = 5;
let speedRecorded = 130;

console.log(checkSpeed(speedRecorded));

function checkSpeed(speed) {
    if (speed < speedLimit + kmPerPoint)
        return 'Ok';
    else {
        let speedAboveLimit = speed - speedLimit;
        const points = Math.floor(speedAboveLimit / kmPerPoint);
        if (points < 12)
            return 'Points: ' + points;
        else
            return 'License Suspended';
    }
}

// EXERCISE - Count truthy

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let a of array) {
        if (a)
            count++;
    }
    return count;
}