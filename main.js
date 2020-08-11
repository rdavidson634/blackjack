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
let playerHand = null;
let dealerHand = null;
let playerAction = null;
let dealerAction = null;
let shuffledDeck;
let handResult = null;



// initialize board

// event handler for stand
const standBtn = document.getElementById('stand');
standBtn.addEventListener('click', stand);

// event handler for hit 
const hitBtn = document.getElementById('hit');
hitBtn.addEventListener('click', hit);

// event handler for dealing
// const dealBtn = document.getElementById('deal');
// dealBtn.addEventListener('click', );



// shuffling the deck
function shuffleDeck () {
  
  const tempDeck = [...masterDeck];
  shuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return shuffledDeck;
}


// console.log(shuffledDeck);

// creating the deck 
function createDeck () {
  const deck = [];
  for(var i = 0; i < cardSuits.length; i++) {
    for(var x = 0; x < cardValues.length; x++) {
      var card = {value: cardValues[x], suit: cardSuits[i]};
      deck.push(card);
    }
  }
  return deck;
  
}

createDeck();
console.log(masterDeck);
shuffleDeck();
console.log(shuffledDeck)






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


    


