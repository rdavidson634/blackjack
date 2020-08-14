/*----- constants -----*/
const cardSuits = ['s', 'c', 'd', 'h'];
const cardValues = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const masterDeck = createDeck();

/*----- app's state (variables) -----*/
let dealerScore = 0;
let playerScore = 0;
let playerHand = [];
let dealerHand = [];
let shuffledDeck;
let facedown;

/*----- cached element references -----*/
const standBtn = document.getElementById('stand');
const hitBtn = document.getElementById('hit');
const dealBtn = document.getElementById('deal');
let playerHandContainer = document.getElementById('playerHand');
let dealerHandContainer = document.getElementById('dealerHand');
let gameResult = document.getElementById('gameResult');

/*----- event listeners -----*/
standBtn.addEventListener('click', stand);
hitBtn.addEventListener('click', hit);
dealBtn.addEventListener('click', init);

/*----- functions -----*/

// shuffling the deck
function shuffleDeck () {
  const tempDeck = [...masterDeck];
  shuffledDeck = [];
  while (tempDeck.length) {
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return shuffledDeck;
}
// creating the deck 
function createDeck () {
  var deck = [];
  for(var i = 0; i < cardSuits.length; i++) {
    for(var x = 0; x < cardValues.length; x++) {
      var card = {value: cardValues[x], suit: cardSuits[i]};
      deck.push(card);
    }
  }
  return deck;
}

init();


// deal player cards function
function dealPlayerCards () {
  for(var i = 0; i < 2; i++) {
    var card = shuffledDeck.pop();
    playerHand.push(card);
  }
}
// deal dealer cards function
function dealDealerCards (arr) {
  for(var i = 0; i < 2; i++) {
    var card = shuffledDeck.pop();
    dealerHand.push(card);
  }
}
// dealerHand = dealerHandContainer
// showing dealer hand in html
function showDealerhand () {
  console.log(dealerHand)
  dealerHandContainer.innerHTML = '';
  dealerHand.forEach(function(card, idx) {
    let x = `<div class = "card ${card.suit + card.value}"></div>`
    if (idx === 1) {
    x = `<div class = "card back-blue"></div>`
   }
  dealerHandContainer.innerHTML += x;
  })
}
//show player hand in html
function showPlayerHand () {
  playerHandContainer.innerHTML = '';
  playerHand.forEach(function(card, idx) {
    let x = `<div class = "card ${card.suit + card.value}"></div>`
    playerHandContainer.innerHTML += x;
  })
}
// totaling up the hand
function addCardValues (arr) {
  let score = 0;
  arr.forEach(function(card) {
    if (card.value === 'K' || card.value === 'Q' || card.value === 'J') {
      score += 10
    } else if (card.value === 'A') {
        score += 1
    } else {
      score += Number(card.value)
    }
  })
  if (score <= 11) {
    let hasAce = arr.some(function(card) {
      return card.value === 'A' 
    })
    if (hasAce) {
      score += 10
    }
  }
  return score;
}
// game logic
function endGame() {
  if (playerScore === 21) {
    gameResult.innerText = `Blackjack! Player wins!`;
  } 
  if (playerScore > 21) {
    gameResult.innerText = `Over 21! Bust!`;
  }
  if (dealerScore === 21) {
    gameResult.innerText = `Blackjack! Dealer wins!`;
  }
  if (dealerScore > 21) {
    gameResult.innerText = `Dealer busted. You win!`;
  }
  if (playerScore === dealerScore) {
    gameResult.innerText = `Tie`;
  }
  if (playerScore > dealerScore && playerScore < 21) {
    gameResult.innerText = `Player wins!`;
  }
  if (playerScore < dealerScore && dealerScore < 21) {
    gameResult.innerText = `Dealer wins!`;
  }
}
// dealer hit
function dealerHit () {
  var card = shuffledDeck.pop();
  dealerHand.push(card);
  dealerScore = addCardValues(dealerHand);
    if (dealerScore >= 21) {
      showDealerhand();
      endGame();
  }
}
// hit function - pop a card from shuffledDeck to player
function hit () {
  var card = shuffledDeck.pop();
  playerHand.push(card);
  playerScore = addCardValues(playerHand);
    showPlayerHand()
    if (playerScore >= 21) {
      endGame();
  }
}
// stand function which will just invoke the dealerHit function
function stand () {
  while (dealerScore < 17) {
    dealerHit();
  }
  render();
  endGame();
}
//rendor
function render () {
  showDealerhand();
  showPlayerHand()
}
//initializing
function init () {
  dealerScore = 0;
  playerScore = 0;
  playerHand = [];
  dealerHand = [];
  shuffleDeck(masterDeck);
  dealPlayerCards();
  playerScore = addCardValues(playerHand);
  dealDealerCards();
  dealerScore = addCardValues(dealerHand);
  render()
}



// 
// pop method cards to player and dealer from newly shuffled array - this will be the deal - stored in dealer / player hand variables

// rendor hands. player and the dealer receive two cards each
  // show one face-up card in dealers hand

// different scenarios
      
    // if player hits, pop another card from shuffled array
      // if below 21, offer choice to stand or hit again
      // if bust, dealer wins and display dealer winner message
      // if 21, move to dealer's turn function and invoke compare cards function
    // if player stands, move to dealers turn function

  // stand() {
  //   move to dealer 
  //  }

  // hit() {
  //   add/pop another card from  the shuffled array into player 1 hand array
  // }

  

    // if dealer hits, pop another card from the shuffled array
      // if below 17, hit
      // if above 17 stand and invoke compare cards function
      // if bust, player wins and display player winner message
      // if 21, invoke compare cards function
    // if dealer stands, show cards and compare cards function

        // dealer AI
          // dealer keeps hitting until he is at or over 17



    // compare cards function and determine winner 
      // use player and dealer hand variables to store hand info 

      //render hands

    // message to display hand winner
      // dealer winning message 
      // player winning message
      // player bust message 
      // dealer bust message 
      // player "you got 21" message
      // "dealer got 21 message"

    // game function to call the shuffle function and replay


    




 