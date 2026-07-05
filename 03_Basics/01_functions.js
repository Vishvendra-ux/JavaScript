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