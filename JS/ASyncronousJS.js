console.log("Start");
setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);
console.log("End");
// Output: Start → End → (after 2s) After 2 seconds


let count = 0;
const intervalId = setInterval(() => {
  console.log(++count);
  if (count === 5) clearInterval(intervalId); // Stop after 5 times
}, 1000);
