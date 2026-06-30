// const myArr = [1, 2, 3, 4, 5];
// const heroes = ['Batman', 'Superman', 'Wonder Woman'];

// const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[1]); // 1

//Array Methods
// myArr.push(6); // Adds 6 to the end of the array
// myArr.push(7); // Adds 7, 8, 9 to the end of the array
// myArr.pop(); // Removes the last element from the array
// myArr.unshift(0); // Adds 0 to the beginning of the array
// myArr.unshift(9); // Adds 9 to the beginning of the array
// myArr.shift(); // Removes the first element from the array
// console.log(myArr); // [1, 2, 3, 4, 5, 6]

// const newArr = myArr.join();
// console.log(myArr); // 1,2,3,4,5
// console.log(newArr); // 1,2,3,4,5
// console.log(typeof newArr); // string

// slice splice
const myArr3 = [1, 2, 3, 4, 5];
const newArr2 = myArr3.slice(1, 4); // [2, 3, 4]
console.log(newArr2);

const myArr4 = [1, 2, 3, 4, 5];
const newArr3 = myArr4.splice(1, 2); // [2, 3]
console.log(newArr3);
console.log(myArr4); // [1, 4, 5]