"use strict";
function add(a, b) {
    // console.log(a.toupperCase());
    return a + b;
}
let sub;
sub = (x, y) => {
    return x - y;
};
sub(4, 3);
let div;
div = (x, y) => {
    console.log(x / y);
};
// optional parameter
function mul(x, y, z) {
    if (z) {
        return x * y * z;
    }
    return x * y;
}
//fuction with default parameter
function mul2(x, y, z = 1) {
    return x * y * z;
}
let div2;
div2 = (x, y, z) => {
    return x / y / z;
};
//fuction with rest parameter
// A function has only one rest parameter.
// The rest parameter appear last in the parameter list.
// The type of the rest parameter is an array type.
function mul3(x, y, ...z) {
    console.log(z); //returns a empty array if dint pass any parameter
    let b = x * y * z.reduce((a, b) => a * b);
    console.log(b);
    return b;
}
mul3(1, 2, 3, 4, 5, 6);
// mul3(1,2)
//rest parameter with different type    
function calculate(a, b, ...c) {
    if (c.every(item => typeof item === 'number')) {
        console.log(c);
        return a + b + c.reduce((a, b) => a + b);
    }
    return 0;
}
calculate(1, 2, 3, 4, 5);
//function overloading
function added(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(added(1, 2));
console.log(added('a', 'b'));
//method overloading
// The count() function can return a number or an array 
// depending on the number of arguments that you pass into it:
class Counter {
    constructor() {
        this.current = 0;
    }
    count(target) {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let counter = new Counter();
console.log(counter.count());
console.log(counter.count(5));
