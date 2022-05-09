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