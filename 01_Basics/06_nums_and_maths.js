// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNum = 23.8966;
// console.log(otherNum.toPrecision(3));

// const hundred = 1000000;
// console.log(hundred.toLocaleString()); // 10,00,000

//+++++++++++++++++++++++++. MATHS  ++++++++++++++++++++++++++

// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.sqrt(64)); // 8
// console.log(Math.pow(2,3)); // 8
// console.log(Math.min(0,150,30,20,-8,-200)); // -200
// console.log(Math.max(0,150,30,20,-8,-200)); // 150

// const randomNum = Math.random();
// console.log(randomNum); // Random number between 0 and 1

// const randomNum2 = Math.floor(Math.random() * 10 + 1);
// console.log(randomNum2); // Random number between 1 and 10    

console.log(Math.floor(Math.random() * 10 + 1)); // Random number between 1 and 10

const min = 10;
const max = 20;

const randomNum3 = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNum3); // Random number between 10 and 20
