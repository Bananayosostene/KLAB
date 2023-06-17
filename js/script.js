let burger = document.querySelector(".burger");
let list = document.querySelector(".list");

let close = document.querySelector(".close");

burger.addEventListener("click", () => {
  list.classList.toggle("list-active");
});

let btn = document.querySelector(".learn");
btn.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
  document.querySelector(".hide").style.display = "none";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".hide").style.display = "block";
});
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("name").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (x =="") {
    text = "Enter your Name Please!";
  } else {
     text = " ";
  }
  document.getElementById("name-p").innerHTML = text;
 let inputText = document.getElementById("email")
 let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (inputText.value.match(mailformat)) {
   text = ("  ");
}
else {
   text = "You have entered an invalid email address!";
 }
  document.getElementById("email-p").innerHTML = text;


let y = document.getElementById("area").value;
// If x is Not a Number or less than one or greater than 
if (y == " ") {
  text = "Enter Samething Please!";
} else {
  text = " ";
}
document.getElementById("area-p").innerHTML = text;
}