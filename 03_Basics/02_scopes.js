// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

let a = 10; // variable declared with let is block scoped, so it is not accessible outside the block
if(true){
    let a = 40;
    const b = 50;
    var c = 60;
    // console.log(a); // 40
    // console.log(b); // 50
    // console.log(c); // 60
}
    console.log(a); 
    // console.log(b); 
    console.log(c); 

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 60 - var is function scoped, so it is accessible outside the block
// let a = 10;
// const b = 20;
// var c = 30;


// console.log(a); 
// console.log(b);
// console.log(c); 