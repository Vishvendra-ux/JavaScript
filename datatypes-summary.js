//Primitive

// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);


// Non-Primitive
// Array, Object, Functions 

const heros = ['shaktiman', 'naagraj', 'doga'];
let myObj = {
  name: "Vishvendra",
  age: 21,
}

const myFunction = function() {
  console.log("Hello World");
}

console.log(typeof bigNumber);

console.log(typeof outsideTemp);