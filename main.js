// constants

const cardSuits = ['s', 'c', 'd', 'h'];
const cardValues = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// masterDeck
const masterDeck = createDeck();

// variables
  // player decision/action - true or false / stand or hit
  // dealer decision/action - true or false / stand or hit
  // player 1 hand - array
  // dealer hand - array
  // shuffled deck


// initialize state variables 
let playerAction = null;
let dealerAction = null;  

let playerHand = [];
let dealerHand = [];

// event handlers
const standBtn = document.getElementById('stand');
standBtn.addEventListener('click', stand);

const hitBtn = document.getElementById('hit');
hitBtn.addEventListener('click', hit);

const dealBtn = document.getElementById('deal');
dealBtn.addEventListener('click', createDeck);

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

  createDeck();
// console.log(masterDeck);
  shuffleDeck(masterDeck);
// console.log(shuffledDeck)

// deal player cards function
function dealPlayerCards () {
  for(var i = 0; i < 2; i++) {
    var card = shuffledDeck.pop();
    playerHand.push(card);
  }
}
dealPlayerCards();
console.log(playerHand);

// deal dealer cards function
function dealDealerCards () {
  for(var i = 0; i < 2; i++) {
    var card = shuffledDeck.pop();
    dealerHand.push(card);
  }
}
dealDealerCards();
console.log(dealerHand);

// hit function - pop a card from shuffledDeck to player
function hit () {
  var card = shuffledDeck.pop();
  playerHand.push(card)
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

  // deal() {

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


    


