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