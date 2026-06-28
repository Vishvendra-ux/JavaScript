//Primitive

// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);


// Non-Primitive
// Array, Object, Functions 

// const heros = ['shaktiman', 'naagraj', 'doga'];
// let myObj = {
//   name: "Vishvendra",
//   age: 21,
// }

// const myFunction = function() {
//   console.log("Hello World");
// }

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) and Heap (Non-Primitive) memory allocation

let myYoutubeName = "Vishvendra";

let anothername = myYoutubeName;
anothername = "Codevolution";

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
  email: "vishvendra@example.com",
  upi: "vishvendra@ybl"
}

let userTwo = userOne;
userTwo.email = "userTwo@example.com";

console.log(userOne.email);
console.log(userTwo.email);