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