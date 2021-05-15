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
  var humanChoice, botChoice;
  humanChoice = yourChoice.id
  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results)
  message = finalMessage(results) // {'message': "You Won", 'color': 'green' }
  console.log(message)
  // rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
  let rpsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
  }

  let yourScore = rpsDatabase[humanChoice][botChoice];
  let computerScore = rpsDatabase[botChoice][humanChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return {'message': 'You Lost!', 'color': 'red'}
  } else if (yourScore === 0.5) {
    return {'message': 'You Tied!', 'color': 'yellow'}
  } else {
    return {'message': 'You Won!', 'color': 'green'}
  }
}
