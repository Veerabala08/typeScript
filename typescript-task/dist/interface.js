"use strict";
const Bala = { dbId: 22, email: "vb@g.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name, off) => {
        return 10;
    }
};
Bala.email = "vb@g.com";
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));
