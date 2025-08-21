let nav = document.querySelector(".nav");
let menu = document.querySelector("#menu");

let closeBtn = document.querySelector("#closeBtn");
let main = document.querySelector('main');

menu.addEventListener("click", () => {
  nav.classList.add('open');
  main.classList.add('shifted');
  menu.style.display = 'none';
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove('open');
  main.classList.remove('shifted');
  menu.style.display = 'block';
});