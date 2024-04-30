document.addEventListener('DOMContentLoaded', function() {
    shuffleAndDisplayPlayerCards();
});
  
function shuffleAndDisplayPlayerCards() {
    const choices = generateRandomCards();
    const playerHandHTML = choices.map(choice => `<div class="card" data-choice="${choice}" onclick="playCard('${choice}')"><span class="icon">${getIcon(choice)}</span></div>`).join('');
    document.getElementById('playerHand').innerHTML = playerHandHTML;
}
  
function generateRandomCards() {
    const cards = ['rock', 'paper', 'scissors'];
    const randomCards = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      randomCards.push(cards[randomIndex]);
    }
    return randomCards;
}
  
function playCard(choice) {
    const opponentChoice = generateRandomCards()[0];
  
    const result = getResult(choice, opponentChoice);
  
    document.getElementById('opponentHand').innerHTML = ''; 
    document.getElementById('opponentHand').innerHTML = `<div class="card ${opponentChoice}"><span class="icon">${getIcon(opponentChoice)}</span></div>`;
    document.getElementById('result').innerText = result;
    
    setTimeout(shuffleAndDisplayPlayerCards, 1000); 
  }
  
function getResult(playerChoice, opponentChoice) {
    if (playerChoice === opponentChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && opponentChoice === 'scissors') ||
      (playerChoice === 'paper' && opponentChoice === 'rock') ||
      (playerChoice === 'scissors' && opponentChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Opponent wins!';
    }
}
  
function getIcon(choice) {
    if (choice === 'rock') {
      return '🪨';
    } else if (choice === 'paper') {
      return '📄';
    } else {
      return '✂️';
    }
}
  