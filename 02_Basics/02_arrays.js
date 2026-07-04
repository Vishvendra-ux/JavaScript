const mar_heroes = ['Spiderman', 'Ironman', 'Hulk'];
const dc_heroes = ['Batman', 'Superman', 'Wonder Woman'];

// mar_heroes.push(dc_heroes); // Adds all elements of dc_heroes to mar_heroes
// console.log(mar_heroes[3][1]); // ['Spiderman', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Wonder Woman']
// mar_heroes.concat(dc_heroes); // Concatenates dc_heroes to mar_heroes
// console.log(mar_heroes); // ['Spiderman', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Wonder Woman']

// const allheroes = mar_heroes.concat(dc_heroes); // Concatenates dc_heroes to mar_heroes and assigns it to allheroes
// console.log(allheroes); // ['Spiderman', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Wonder Woman']

// const allnewheros = [...mar_heroes, ...dc_heroes]; // Concatenates dc_heroes to mar_heroes using spread operator
// console.log(allnewheros); // ['Spiderman', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Wonder Woman']

// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]; // Nested array
// const realArr = anotherArr.flat(Infinity); // Flattens the array to a depth of infinity
// console.log(realArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// console.log(Array.isArray("Vishvendra")); // false
// console.log(Array.from("Vishvendra")); // ['V', 'i', 's', 'h', 'v', 'e', 'n', 'd', 'r', 'a']

// console.log(Array.from({name: "Vishvendra"})); // [undefined] - because Array.from expects an iterable or array-like object, and the object provided does not have a length property or is not iterable.

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // [100, 200, 300] - creates a new array with the provided arguments as elements