let globalVar = "I’m global";

function greet() {
  let localVar = "I’m local";
  console.log(globalVar); // ✅ Works
  console.log(localVar);  // ✅ Works
}

greet();

console.log(globalVar); // ✅ Works
// console.log(localVar);  // ❌ Error: not defined


//nlock scope
{
  let a = 10;
  var b = 20;
}
// console.log(a); // ❌ Error
console.log(b); // ✅ 20


// Lexical Scope
// Functions have access to variables in their outer scope, even if not defined inside them.

function outer() {
  let name = "Gourav";
  function inner() {
    console.log(name); // ✅ has access to outer scope
  }
  inner();
}
outer();
