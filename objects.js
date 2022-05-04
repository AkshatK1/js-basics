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