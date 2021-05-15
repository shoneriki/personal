// Age in days (without leap year and current day)

function ageInDays() {
  let birthYear = prompt("What year were you born?");
  let currentYear = new Date();
  let thisYear = currentYear.getFullYear();
  let ageInDays = (thisYear - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(`You are ${ageInDays} days old!`);
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById("flex-box-result").remove();
  window.location.reload();
}

// Challenge 2
const catButton = document.querySelector('#generateCat');
catButton.addEventListener('click', function() {
  let image = document.createElement('img');
  let div = document.getElementById('flex-cat-gen');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
})

// function generateCat() {
//   let image = document.createElement('img');
//   let div = document.getElementById('flex-cat-gen');
//   image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
//   div.appendChild(image);
// }

// Challenge 3: Rock, Paper, Scissors


function rpsGame(yourChoice) {
  console.log(yourChoice);
  let humanChoice, botChoice;
  // humanChoice = yourChoice.id
  // botChoice = ;
  // results = decideWinner(humanChoice, botChoice);
  // message = finalMessage(results) // {'message': "You Won", 'color': 'green' }
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

