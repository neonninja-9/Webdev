// 4. 🧠 What is a Closure?
// A closure is when a function remembers the variables from where it was created, even after that outer function has finished executing.

// 🔥 Closure Example:

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}

const counter = outer(); // `outer()` runs and returns `inner`

counter(); // 1
counter(); // 2
counter(); // 3
// ➡️ Even though outer() has finished, inner() still has access to count — that’s closure.




function createCounter(){
    let count = 0;
    return function counter(){
        console.log(++count)
    }
}
const myCounter = createCounter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

// Write a closure that remembers a user's name and returns a greeting function.

function x(){
    let name = "gourav";
    return function greet(){
        console.log( `hay ${name} !`);
    }
    
}

const greet = x();
greet();