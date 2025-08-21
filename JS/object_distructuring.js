//object distructuring
const owner = { name: "Gourav", age: 21 ,place :"gwalior"};
const { name, age } = owner;

console.log(name); // Gourav
console.log(age);  // 21

//Array Destructuring

const arr = [10, 20, 30];
const [a, b] = arr;

console.log(a); // 10
console.log(b); // 20

//
// Spread (copy/merge arrays)
const nums1 = [1, 2];
const nums2 = [3, 4];
const allNums = [...nums1, ...nums2]; // [1, 2, 3, 4]

// Rest (collect remaining items)
const [x, ...rest] = allNums
console.log(rest); // [2, 3, 4]
console.log(x)





// Write a function called introducePerson that:
// Accepts an object {name, age, city}
// Uses destructuring + template literals
// Returns a string like:
// "Hi, I'm Gourav, 21 years old from Gwalior."

function introducePerson(person){
    const {name , age , place} = person;
    return `hi! i am ${name} , ${age} years old from ${place}`;
}

console.log(introducePerson(owner));