"use strict";
const userId = "AC123";
const postID = 1;
const cat = {
    legs: 4,
    habitate: 'land',
    extint: false,
    // canfly : false  // can omit the optional property 
};
const bala = {
    name: 'Bala',
    age: 22,
    street: '123 mainstreet',
    city: 'chennai'
};
const point = [3.44, 2.44];
const greet = (name) => {
    return `hey goodmorning ${name}`;
};
// greet(3) //cant pass a number to greet function
greet("Bala");
const john = {
    name: 'Bala',
    age: 22,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(john.greet());
