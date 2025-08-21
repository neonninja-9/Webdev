//map
let arr = [2, 4, 6, 8, 10 , 1];
console.log("Random array:", arr);

let squard = arr.map((i) => i * i); //returns a new array with modified values
console.log("Squared array :", squard);

//filter
let filtered = arr.filter((n) => n < 4); //returns a filter array based on condition
console.log("Filtered array : ", filtered);

//reduce
let reduced = arr.reduce((sum, i) => sum + i); //to get a single value from array ,here sum is accumulator ans i is itrator
console.log("Reduced array : ", reduced);

let isEven = arr.every((n) => n % 2 == 0);
console.log("isEven = ", isEven);

let maximum = arr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else{
    return max;
  }
});
console.log('maximum = ' ,maximum)
