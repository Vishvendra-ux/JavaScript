// LECTURE 11 - STRINGS 
const name = "Vishvendra";
const repoCount = 50;

// console.log(name + repoCount + "Value"); // Concatenation
console.log(`Hello my name is ${name} and I have ${repoCount} repos`); // Template String

const gameName = new String('Vishvendra');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('V'));

// const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString2 = "    vishvendra   ";
console.log(newString2);
console.log(newString2.trim());