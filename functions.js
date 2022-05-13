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