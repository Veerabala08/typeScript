"use strict";
//generinc in typscript
function getRandomElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// Usage
const pair = {
    first: 1,
    second: "one"
};
// Usage
const numberHolder = {
    value: 42,
    getValue: function () { return this.value; }
};
const stringHolder = {
    value: "Hello",
    getValue: function () { return this.value; }
};
//   generic interface
