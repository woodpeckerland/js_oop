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
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);
