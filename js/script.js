let burger = document.querySelector(".burger");
let list = document.querySelector(".list");

let close = document.querySelector(".clos");

burger.addEventListener("click", () => {
  list.classList.toggle("list-active");
});

let btn = document.querySelector(".learn");
btn.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});
