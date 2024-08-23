
//created alise for primitve types 
type ID = string | number 

const userId : ID = "AC123"
const postID : ID = 1

//object types
type Animal = {
    legs : number,
    habitate : string
    readonly extint :  boolean //readonly property 
    canfly? : boolean //optional property
}

const cat: Animal = {
    legs:4,
    habitate: 'land',
    extint: false,
    // canfly : false  // can omit the optional property 
}
// cat.extint = 3 // when tries to change gives error

//union types
type Status = 'dead' | 'not dead yet' | 'dying'
// const reportStatus : Status = 'living' // is not assignable to type 'Status'

// multiple types into one using intersections
type Address = {
    street : string
    city : string
}
type Person = {
    name: string
    age:number
}
type PersonwithAddress = Person&Address

const bala : PersonwithAddress = {
    name:'Bala',
    age:22,
    street:'123 mainstreet',
    city:'chennai'
}

// tuples types
//tuples are immutables and cannot change the values in it. 
type axis = [number, number];
const point: axis = [3.44, 2.44]

// function types
type Greet = (name: string) => string

const greet: Greet =(name)=>{
    return `hey goodmorning ${name}`
}

// greet(3) //cant pass a number to greet function
greet("Bala")

// Type Aliases for Object with Methods
type Persons = {
    name: string;
    age: number;
    greet: () => string; // Method
  };
  
  const john: Persons = {
    name: 'Bala',
    age: 22,
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  };
  
  console.log(john.greet());