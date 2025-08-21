// Spread and Rest Operators Example

// Spread Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log("Combined Array:", combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Spread Operator with Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log("Combined Object:", combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Rest Operator in Function Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5)); // Output: 15

// Rest Operator with Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first);   // Output: 1
console.log("Second:", second); // Output: 2
console.log("Rest:", rest);     // Output: [3, 4, 5]
