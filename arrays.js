// ADDING ELEMENTS TO ARRAY

const numbers = [3, 4];
// declaring the array as constant makes sure that we can't reassign the array variable, but we can still modify the contents.

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');
// syntax: array.splice(index before which element to be inserted, elements to be deleted, elements to be inserted comma separated)
console.log(numbers);

// REMOVING ELEMENTS IN AN ARRAY
const arr = [1, 2, 3, 4];
// End
arr.pop();
// Beginning
arr.shift();
// Middle
arr.splice(2, 1);

// FINDING ELEMENTS IN AN ARRAY
// Finding Primitives
//using the same array from above

numbers.indexOf(2); // it gives the index of element if its present in array, otherwise it gives -1. Its type sensitive.
console.log(numbers.indexOf(2));
console.log(numbers.indexOf('2'));
console.log(numbers.indexOf('a'));

numbers.splice(4, 0, 1); // adding 1 in numbers array at 4th index
numbers.lastIndexOf(1); // this gives the last index of element in the array, in case the element is repeated
console.log(numbers);
console.log(numbers.lastIndexOf(1));

numbers.includes(1); // this method return true if element is present in array, otherwise false
console.log(numbers.includes(1));

// there is one more variation to indexOf method, we can also specify the starting index from which the search should start
// syntax: array.indexOf(element to be searched, starting index)
numbers.indexOf(1, 2);
console.log(numbers.indexOf(1, 2));

// Finding reference types
// creating array of objects
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const findCourse = courses.find(function (course) {
    return course.name === 'a'; // returns whole element if found, undefined if not found
});

// replace the above find function with findIndex(), to get the index of element if present, else -1 if not present.

console.log(findCourse);

// Arrow Functions
// the above function can be written in another way easily, by arrow functions. See how below
// the function keyword can be removed, amd replaced by (fat arrow ) =>, which is put after the parameters 
// the bracket around the parameter of function (course), can be removed if, there is a single parameter. 
// We have to put the () if there are multiple parameters
// if there are no parameters, we have to pass empty ()
// if our function is a single line of code, and is returning a value, we can remove return keyword and {}
const findCourse2 = courses.find(course => course.name === 'a');
console.log(findCourse2);

// EMPTYING AN ARRAY
const a = [1, 2, 3, 4];
// Solution 1
// a = []; // wont work if array is const
// Solution 2
a.length = 0; //best solution
console.log(a);
// Solution 3
// a.splice(0, a.length);
// Solution 4
// while (a.length > 0)
//     a.pop(); // worst solution

// COMBINING AND SLICING ARRAYS
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(2, 4);
console.log(slice);

const slice2 = combined.slice(2);
console.log(slice2);

const copy = combined.slice();
console.log(copy);

// NOTE: if we use refrence types in Array, the reference of object is copied, and if the value is Changed, its changed in all 

// SPREAD OPERATOR FOR COMBIniNG
const third = [1, 2, 3, 4];
const fourth = [5, 6, 7, 8];
const comb = [...third, 'a', ...fourth];
const copyComb = [...comb];

// ITERATING AND ARRAY
for (let elements of copyComb)
    console.log(elements);

copyComb.forEach((number, index) => console.log(index, number));

// JOINING ARRAYS
// Array to String
const b = [1, 2, 3];
const joined = b.join('hello');
console.log(joined);
// String to array
const msg = 'Hello I am Akshat';
const parts = msg.split(' ');
console.log(parts);
const joinParts = parts.join('--');
console.log(joinParts);

// SORTING ARRAYS
const n = [1, 4, 5, 76, 2, 52];
n.sort(); // sort array in ascending order
console.log(n);
n.reverse(); // reverse the array, in this case the ascending array is reversed so it makes it descending
console.log(n);

// SORTING ARRAY OF OBJECTS

const subjects = [
    { id: '1', name: 'Computer' },
    { id: '2', name: 'algebra' }
];

subjects.sort(function (a, b) { // a and b are first subject object and second subject object, necessary to compare
    // a < b => -1
    // a > b => 1
    // a===b => 0
    const nameA = a.name.toLowerCase(); // to ignore case senstivity
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(subjects);

// TESTING THE ELEMENTS OF ARRAY

const array = [1, -1, 2, 4, 3];
const allPositive = array.every(function (element) {
    return element >= 0;
});
// every() checks if all elemnets in array matches the criteria
const atleastOnePositive = array.some(function (element) {
    return element >= 0;
});
//some() checks if any one element in array matches the criteria
console.log(allPositive);
console.log(atleastOnePositive);

// FILTERING ARRAY
// using the above array
const filtered = array.filter(element => element >= 0);
console.log(filtered);
// filters the elements that matches the critera and creates a new array of those elements

// MAPPING ARRAY
// mapping array to string
const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
// mapping array to object
const objMap = filtered.map(n => ({ value: n })); // whenever returning an object in arrow function, make sure to surround it with ()
console.log(objMap);
// chaining methods
const chaining = objMap
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(chaining);

// REDUCING AN ARRAY
const nos = [1, -1, 2, 3, 6, 5];
// the sum of array is generally caluclated by for loop
// here we will do it with reduce() method
const sum = nos.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
// the syntax of this function is below
// const sum = nos.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0 /* value with which you want to initialize accumulator variable */);

// EXERCISE 3 - EXCEPT
const array2 = [1, 2, 3, 4,];
const output = except(array2, [1, 2]);
console.log(output);

function except(array, excludeArray) {
    const afterExclusionArray = [];
    for (let n of array) {
        if (!excludeArray.includes(n))
            afterExclusionArray.push(n);
    }
    return afterExclusionArray;
}

// EXERCISE 4 - Moving an element
// using array from previous exercise
const output1 = move(array2, 0, 2);
console.log(output1);

function move(array, index, offset) {
    const position = index + offset;
    if (position < 0 || position >= array.length) {
        console.error('Invalid Offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

// EXERCISE 7 - MOVIES
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];
// get all the movies in 2018 with rating > 4
// sort them by their rating in descending order
// pick and display their title
const outputMovies = movies
    .filter(movie => movie.year === 2018 && movie.rating >= 4)
    .sort((movie1, movie2) => movie1.rating - movie2.rating)
    .reverse()
    .map(movie => movie.title);

console.log(outputMovies);