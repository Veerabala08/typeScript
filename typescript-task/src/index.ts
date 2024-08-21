console.log("hey im running")

const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Harry", "Dave", "Jhon"];

a:"a"

function displayArray(): void {
    const numbersElement = document.getElementById('numbers');
    const namesElement = document.getElementById('names');

    if (numbersElement) numbersElement.textContent = `Numbers: ${numbers.join(', ')}`;
    if (namesElement) namesElement.textContent = `Names: ${names.join(', ')}`;
}

displayArray();

enum Signal {
    Red = "STOP",
    Yellow = "WAIT",
    Greem = "GO",
}

function Action(sign: Signal) {
    console.log(`Vechicle ${sign}`);
}

Action(Signal.Red)
Action(Signal.Yellow)


let pi = 3.14159265359
pi.toFixed
console.log(typeof(pi))
let pi2:string = pi.toFixed(2) 
console.log(pi)
console.log(pi2)



