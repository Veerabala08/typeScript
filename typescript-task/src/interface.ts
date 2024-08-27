interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    startTrail(): string
    getCoupon?(offername: string, value: number): number //optional property
}
//reopening of the interface
interface User {
    githubToken: string
}

//inheritance 

//admin is inherited form user
interface Admin extends User {
    role: "admin" | "learner"
}

const Bala: Admin = { dbId: 22, email: "vb@g.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "Bala", off: 10) => {
    return 10
}
}
Bala.email = "vb@g.com"



interface Person1 {
    firstName: string;
    lastName: string;
}

function getFullName(person: Person1) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(person));





