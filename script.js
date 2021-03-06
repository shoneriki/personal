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

  if (ageInDays < 10950) {
    winSound.play();
  } else {
    lossSound.play();
  }

}

function reset() {
  document.getElementById("flex-box-result").remove();
}

// Challenge 2
const catButton = document.querySelector('#generateCat');
catButton.addEventListener('click', function() {
  let image = document.createElement('img');
  let div = document.getElementById('flex-cat-gen');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
})

function reset1() {
  document.getElementById("flex-cat-gen").remove();
}

// function generateCat() {
//   let image = document.createElement('img');
//   let div = document.getElementById('flex-cat-gen');
//   image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
//   div.appendChild(image);
// }

// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
  console.log('You Chose:', yourChoice.id);
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log('human choice, computer choice:', results)
  message = finalMessage(results);
  console.log(message.message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'] [number]
}

function decideWinner(humanChoice, botChoice) {
  let rpsDatabase = {
    'rock': {'scissors': 1, 'rock': .5, 'paper': 0},
    'paper': {'rock': 1, 'paper': .5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': .5, 'rock': 0}
  }

  let yourScore = rpsDatabase[humanChoice][botChoice];
  let computerScore = rpsDatabase[botChoice][humanChoice];

  return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    lossSound.play();
    return {'message': 'You Lost!', 'color': 'red' }
  } else if (yourScore === 0.5) {
    drawSound.play();
    return {'message': 'It\'s a Tie!', 'color': 'gold' }
  } else {
    winSound.play();
    return {'message': 'You Win!', 'color': 'green' }
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src,
  }

  // remove the images off the screen when one image is clicked
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  let humanDiv = document.createElement('div');
  let botDiv = document.createElement('div');
  let messageDiv = document.createElement('div');
  let resetDiv = document.createElement('div');

  humanDiv.innerHTML =
    `<img src='${imagesDatabase[humanImageChoice]}' height=100 width=100 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>`;
  messageDiv.innerHTML =
    `<h1 style='color: ${finalMessage['color']}; font-size: 40px; padding: 30px;'>${finalMessage['message']}</h1>`;
  botDiv.innerHTML =
    `<img src='${imagesDatabase[botImageChoice]}' height=100 width=100 style='box-shadow: 0 10px 50px rgba(243, 38, 24, 1);'>`;
  resetDiv.innerHTML =
    "<button class = 'btn btn-warning btn-large' onclick='reset()' style='margin: auto'> Reset </button>"
  resetDiv.setAttribute('class', 'reset-button-div');

  document.getElementById('flex-box-rps-div').appendChild(resetDiv);
  resetDiv.addEventListener('click', () => {
    window.location.reload();
  })

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4 changing button colors

let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);

}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonRed();
  } else if (buttonThingy.value === 'green') {
    buttonGreen();
  } else if (buttonThingy.value === 'reset') {
    buttonColorReset();
  } else if (buttonThingy.value === 'random') {
    randomColors();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger')
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success')
  }
}

function buttonColorReset() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i]. classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  let choices = ['btn-primary','btn-danger','btn-success','btn-warning']

  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i]. classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

// Challenge 5: Blackjack++++++++++++++++++++++++++++++++++++++++++

let blackjackGame = {
  'you': { 'scoreSpan' : '#your-blackjack-result', 'div': '#your-box', 'score': 0},
  'dealer': { 'scoreSpan' : '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
  'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
  'cardsMap' : {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10,  'Q': 10,  'A': [ 1, 11 ],},
  'wins': 0,
  'losses': 0,
  'draws': 0,
  'isStand' : false,
  'turnsOver' : false,
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('clever-programmer-JS/static/blackjack-assets/bj-sounds/swish.m4a');
const winSound = new Audio('clever-programmer-JS/static/blackjack-assets/bj-sounds/1up.mp3');
const lossSound = new Audio ('clever-programmer-JS/static/blackjack-assets/bj-sounds/loss.mp3');
const drawSound = new Audio('clever-programmer-JS/static/blackjack-assets/bj-sounds/jump.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)

function blackjackHit() {
  if (blackjackGame['isStand'] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer['score'] <= 21){
    let cardImage = document.createElement('img');
    cardImage.src = `clever-programmer-JS/static/blackjack-assets/bj-images/${card}.png`;
    cardImage.height, cardImage.width = 75;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}

function blackjackDeal() {
  if (blackjackGame['turnsOver'] === true) {

    blackjackGame['isStand'] = false;
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (i=0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }
    for (i=0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = '#FFFFFF';
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').style.color = '#FFFFFF';
    document.querySelector('#blackjack-result').textContent = "Let's Play!"
    document.querySelector('#blackjack-result').style.color = "black"

    blackjackGame['turnsOver'] = true;

  }
}

function updateScore(card, activePlayer) {
  if (card === 'A') {

    // ace logic: if adding 11 keeps  you below 21, add 11, otherwise add 1
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
      // ['cardsMap'][0 and 1] are 1 and 11 respectively;
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }

  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}

function showScore(activePlayer) {
  // bust logic
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function dealerLogic() {
  blackjackGame['isStand'] = true;

  while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000)
  }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

// winner logic
// update wins, draws, and losses
function computeWinner() {
  let winner;

  if (YOU['score'] <= 21) {
    // condition: higher score than dealer or when dealer busts but you're under 21
    if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21) ) {
      blackjackGame['wins']++;
      winner = YOU;
    } else if (YOU['score'] < DEALER['score']) {
      blackjackGame['losses']++;
      winner = DEALER;
    } else if (YOU['score'] === DEALER['score']) {
      blackjackGame['draws']++;
    }

  //condition: when user busts but dealer doesn't
  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
    blackjackGame['losses']++;
    winner = DEALER;
  //condition: when you AND the dealer busts
  } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
    blackjackGame['draws']++;
  }

  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if (blackjackGame['turnsOver'] === true ) {
    if (winner === YOU) {
      document.querySelector('#wins').textContent = blackjackGame['wins'];
      message = 'You Won!';
      messageColor = 'green';
      winSound.play()
    } else if (winner === DEALER) {
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      message= 'You Lost!';
      messageColor = 'red';
      lossSound.play();
    } else {
      document.querySelector('#draws').textContent = blackjackGame['draws'];
      message = 'Draw';
      messageColor = 'black';
      drawSound.play();
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
  }
}
