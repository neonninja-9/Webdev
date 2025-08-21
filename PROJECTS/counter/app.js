let increment = document.querySelectorAll(".button")[0];
let decrement = document.querySelectorAll(".button")[1];
let countp = document.querySelector("#count");
let reset = document.querySelector("#reset")
let count  = 0;
increment.addEventListener("click" , ()=>{
    countp.innerText = ++count;
})
decrement.addEventListener("click" , ()=>{
    countp.innerText = --count;
})
reset.addEventListener("click" , ()=>{
    countp.innerText = 0;
})
