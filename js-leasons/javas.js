let saveEL = document.getElementById("save-el");
let countEL = document.getElementById("count-el");
// console.log(countEL)
let count = 0;
function increment() {
  count = count + 1;
  countEL.textContent = count;
}
function save() {
  let countstr = count + "-";
  saveEL.textContent += countstr;
  console.log(count);
  countEL.textContent = 0;
}
let welcomeEL = document.getElementById("welcome-el");
let myname = "BANANAYO Sostene";
let great = "Hi, my Name is ";
welcomeEL.innerText = great + myname;

let num1EL = 8;
let num2EL = 2;
document.getElementById("num1-el").textContent = num1EL;
document.getElementById("num2-el").textContent = num2EL;
let resultEL = document.getElementById("result-el");
function add() {
  resultEL.textContent = "sum is = " + (num1EL + num2EL);
}
function sub() {
  resultEL.textContent = "sub is = " + (num1EL - num2EL);
}
function mult() {
  resultEL.textContent = "mult is = " + num1EL * num2EL;
}
function div() {
  resultEL.textContent = "div is = " + num1EL / num2EL;
}
let age = 21
if(age<21){
  console.log("your are not allowed to Enter")
}
else if(age ===     21){
  console.log("not/yes")
}
else if (age > 21){
  console.log("welcome")
}
let card = [3, 59, 37];
for (let i = 0; i < 5; i += 1) {
  console.log(card[i]);
}
