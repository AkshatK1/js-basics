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

// FINDING ELEMENTS IN AN ARRAY
//using the same array from above

numbers.indexOf(2); // it gives the index of element if its present in array, otherwise it gives -1. Its type sensitive.
console.log(numbers.indexOf(2));
console.log(numbers.indexOf('2'));
console.log(numbers.indexOf('a'));

numbers.splice(4, 0, 1); // adding 1 in numbers array at 4th index
numbers.lastIndexOf(1); // this gives the last index of element in the array, in case the element is repeated
console.log(numbers);
console.log(numbers.lastIndexOf(1));