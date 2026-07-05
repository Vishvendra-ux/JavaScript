function sayMyName(){
  console.log("Vishvendra");
  console.log("Pratap");
  console.log("Singh");
}

// sayMyName();
// function addTwoNumbers(num1, num2){
//   console.log(num1 + num2);
// }
// addTwoNumbers(5, 10); // 15
function addTwoNumbers(num1, num2){
  console.log(num1 + num2);
  let result = num1 + num2;
  return result;
}
// const result = addTwoNumbers(5, 10); // 15
// console.log(result); // 15 if you don't return anything from the function, it will return undefined by default

function loginUserMessage(username){
  if(username === undefined){
    console.log("Please provide a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("Vishvendra")); // Vishvendra just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage()); // undefined just logged in
// console.log(loginUserMessage("Vishvendra")); // Please provide a username


// function calculateCartPrice(num1){
//   return num1;
// }
// console.log(calculateCartPrice(100)); // 100

// function calculateCartPrice(...num1){ //rest operator is used to take multiple arguments and store them in an array
//   return num1;
// }
// console.log(calculateCartPrice(100,200,300,3000,4302)); // [100, 200, 300, 3000, 4302]

function calculateCartPrice(val1,val2,...num1){
  return num1;
}
// console.log(calculateCartPrice(100,200,300,3000,4302)); // [300, 3000, 4302] - the first two arguments are assigned to val1 and val2, and the rest are stored in num1

const user = {
  username: "Vishvendra",
  price: 100
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user); // Username is Vishvendra and price is 100

handleObject({
  username: "Singh",
  price: 100
});

const myNewArray = [200,300,400,500,600];
function returnSecondValue(getArray){
  return getArray[1];
}
console.log(returnSecondValue(myNewArray)); // 300