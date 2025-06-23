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
    };
}

const circle3 = new Circle(10);

for (let key in circle3) {
    if (typeof circle3[key] !== 'function')
        console.log(key, circle3[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle3)
    console.log('Circle has a radius.');

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

// value types: primitives are copied by their value
let a = 10;
let b = a;

a = 20

// reference types: objects are copied by their reference
let x = {value: 10};
let y = x;

x.value = 20;

// value types: primitives are copied by their value
let num = 10;

function increase(num) {
    num++;
}

increase(num);
console.log(num);

// reference types: objects are copied by their reference
let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

// value types:
// number
// string
// boolean
// symbol
// undefined
// null

// reference types:
// object
// function
// array

function NewCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const newCircle = new NewCircle(10);

newCircle.location = {x: 1};

const propertyName = 'center location';
newCircle[propertyName] = {x: 1};

delete newCircle.location;

// abstraction
function AnotherCircle(radius) {
    this.radius = radius;
    this.defaultLocation = {x: 0, y: 0};
    this.computeOptimumLocation = function(factor) {
        // ...
    };
    this.draw = function() {
        this.computeOptimumLocation(0.1);
        console.log('draw');
    };
}

const anotherCircle = new AnotherCircle(10);
anotherCircle.draw();

// scope, closure
function Circle4(radius) {
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    let computeOptimumLocation = function(factor) {
        // ...
    };

    this.draw = function() {
        computeOptimumLocation(0.1);
        // defaultLocation
        // this.radius
        console.log('draw');
    };
}

const circle4 = new Circle4(20);
circle4.draw();

// getters and setters
function Circle5(radius) {
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x ||!value.y)
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}

const circle5 = new Circle5(20);
circle5.draw();