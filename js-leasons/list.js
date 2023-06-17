let array = []
const textEL = document.getElementById("text-el");
const btnEL = document.getElementById("btn-el");
const deleteEL = document.getElementById("delete-el")
const ulEL = document.getElementById("ul-el");

const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("array"));
if (LeadsFromLocalStorage) {
  array = LeadsFromLocalStorage;
  list();
}

deleteEL.addEventListener("dblclick", function () {
  localStorage.clear();
  array = [];
  list();
});


btnEL.addEventListener("click", function () {
  array.push(textEL.value);
  textEL.value = " ";
  localStorage.setItem("array", JSON.stringify(array));
  list();
});
function list() {
  let message = " ";
  for (let i = 0; i < array.length; i++) {
    message += "<li>" + array[i] + "</li>"
  }
  ulEL.innerHTML = message;
}
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("text-el").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (x =="") {
    text = "Enter Message Please!";
  } else {
     text = " ";
  }
  document.getElementById("no").innerHTML = text;
}
