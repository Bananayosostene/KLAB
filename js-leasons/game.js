let firstcard = randomcard();
let secondcard = randomcard();
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
let hasblacjack = true
let isAlive = false
let message = "";
let messegeEL = document.getElementById("message-el");
let cardEL = document.getElementById("card-el");
let sumEL = document.getElementById("sum-el");

function randomcard() {
  return Math.floor(Math.random() * 13) + 1
}

function startgame() {
  condition(); 
}
function condition() {
  cardEL.textContent = "card:";
    sumEL.textContent ="sum:" + sum;
  for (let i = 0; i < cards.length; i++) {
    cardEL.textContent +=  cards[i] + " " ; 
  }
  sumEL.textContent = "Sum:" + sum;
  if (sum <= 21) {
    message = "Do you want to draw new card";
  } else if (sum === 21) {
    message = "you get Blackjack";
    hasblacjack = true
  } else {
    message = "You are out of the game";
    isAlive = false
  }
  messegeEL.textContent = message;
}
function newcard(){
  if(isAlive === true && hasblacjack === false){
  let card = randomcard();
  sum += card;
  cards.push(card);
  console.log(cards);
  condition();
  }
}
