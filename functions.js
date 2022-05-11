// Function Declaration
function walk(){
    console.log('walk');
}
walk();

// Anonymous Function Expression
const run = function(){
    console.log('run');
};
run();

// Named Function Expression
const jog = function name(){
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
b();

function a(){
    console.log('a');
}
let b = function(){
    console.log('b');
};