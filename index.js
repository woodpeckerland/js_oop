console.log('Hello World');

// factory function
function createCircle(radius) {
    // objects
    return {
        // properties
        radius,
        // methods
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// functions are objects
const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    `);

const circle2 = new Circle1(1);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);

// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

