const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise.then(result => console.log(result)); // "Success!"


function sayHi(){
    return new Promise(resolve => {
        setTimeout(()=> console.log("hi"), 3000);
    })
}
sayHi();

