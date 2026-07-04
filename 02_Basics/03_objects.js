//singleton
//object literals

const mySym = Symbol("key1");


const juser = {
    name: "Vishvendra",
    "full name": "Vishvendra Pratap Singh",//cannot use dot notation to access this property because it has a space in its name
    [mySym] : "myKey1", // symbol property
    age: 22,
    location: "India",
    email: "vishvendra@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}
// console.log(juser.email); //
// console.log(juser["email"]); //
// console.log(juser["full name"]); // Vishvendra Pratap Singh
// console.log(juser[mySym]); // myKey1
// console.log(juser.mySym); // myKey1
// console.log(typeof juser.mySym); // symbol
// console.log(juser[mySym]); // myKey1

// juser.email = "vishvendra.new@example.com"; // updating the email property
// console.log(juser.email); //
// object.freeze(juser); // freezes the object, making it immutable
// juser.email = "vishvendra.updated@example.com"; // this will not update the email property because the object is frozen
// console.log(juser);

juser.greeting = function() {
    console.log("Hello User");
}

juser.greeting2 = function() {
console.log(`Hello ${this.name}`);
}

// juser.greeting(); // Hello User
console.log(juser.greeting());
console.log(juser.greeting2()); // Hello Vishvendra

