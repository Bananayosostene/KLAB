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
$(function () {
  $(".chart").easyPieChart({
    size: 160,
    barColor: "#36e617",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  })});
function myFunction() {
  // Get the value of the input field with id="numb"
  var x = document.getElementById("name").value;
  // If x is Not a Number or less than one or greater than 10
  var text;
  if (x =="") {
    text = "Input not valid";
  } else {
     text = " ";
  }
  document.getElementById("demo").innerHTML = text;
}
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.email.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.email.focus();
    return false;
  }
}