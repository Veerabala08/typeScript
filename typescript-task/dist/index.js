"use strict";
console.log("hey im running");
const numbers = [1, 2, 3, 4, 5];
const names = ["Harry", "Dave", "Jhon"];
a: "a";
function displayArray() {
    const numbersElement = document.getElementById('numbers');
    const namesElement = document.getElementById('names');
    if (numbersElement)
        numbersElement.textContent = `Numbers: ${numbers.join(', ')}`;
    if (namesElement)
        namesElement.textContent = `Names: ${names.join(', ')}`;
}
displayArray();

var Signal;
(function (Signal) {
    Signal["Red"] = "STOP";
    Signal["Yellow"] = "WAIT";
    Signal["Greem"] = "GO";
})(Signal || (Signal = {}));

function Action(sign) {
    console.log(`Vechicle ${sign}`);
}

Action(Signal.Red);
Action(Signal.Yellow);
let pi = 3.14159265359;
pi.toFixed;
console.log(typeof (pi));
let pi2 = pi.toFixed(2);
console.log(pi);
console.log(pi2);
