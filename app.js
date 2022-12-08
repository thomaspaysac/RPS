let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const RESULTS_BOX = document.querySelector('.results-box');
const COMMENTARY = document.querySelector('.commentary');
const PLAYER_CHOICES = document.querySelectorAll('.weapon-choice');
const PLAYER_SELECTION = document.querySelector('.player-selection');
const COMPUTER_SELECTION = document.querySelector('.computer-selection');
const GAME_SCORE = document.querySelector('.game-results');
const FINAL_RESULT = document.querySelector('.final-result');
const RESTART_BUTTON = document.querySelector('.restart-button');

PLAYER_CHOICES.forEach(weapon => weapon.addEventListener('click', playRound)); //lie les boutons à un choix d'arme (playerSelection), puis affiche l'arme choisie 

function playRound() {
    if (playerScore < 5 && computerScore < 5) {
    playerSelection = this.id; //get player selection of weapon
    PLAYER_SELECTION.textContent = `You chose ${playerSelection}.`;
    getComputerChoice(); //generate computer selection of weapon
    battle(); //compare selections and return a result
    GAME_SCORE.textContent = `Score: ${playerScore} vs ${computerScore}`; //udpate game score
      if (playerScore === 5 & computerScore === 5) {
        FINAL_RESULT.style.display = 'block';
        FINAL_RESULT.textContent = 'The battle is over. It\'s a draw!';
      } else if (playerScore === 5) {
        FINAL_RESULT.style.display = 'block';
        FINAL_RESULT.textContent = 'The battle is over. You won!';
      } else if (computerScore === 5) {
        FINAL_RESULT.style.display = 'block';
        FINAL_RESULT.textContent = 'The battle is over. You lost...';
      }
    }
}

function getComputerChoice() {
  let computerRdn = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
  switch(computerRdn){
    case 1 :
        computerSelection = 'fire';
        break;
    case 2 :
        computerSelection = 'earth';
        break;
    case 3 :
        computerSelection = 'water';
        break;
    default : console.log('There was an error.');
}
  COMPUTER_SELECTION.textContent = `The computer chose ${computerSelection}.`;
};

function battle(){
  if (computerSelection == 'fire'){
    switch(playerSelection){
      case 'fire':
          COMMENTARY.textContent = 'Incredible ! It\'s a draw!';
          break;
      case 'water':
          COMMENTARY.textContent = 'You win this one! Nice job.';
          playerScore += 1;
          break;
      case 'earth':
          COMMENTARY.textContent = 'Ouch, that must have hurt... You lost this one.';
          computerScore += 1;
          break;
    }
  } else if (computerSelection == 'earth'){
    switch(playerSelection){
      case 'water':
        COMMENTARY.textContent = 'Ouch, that must have hurt... You lost this one.';
        computerScore += 1
        break;
      case 'earth':
        COMMENTARY.textContent = 'Incredible ! It\'s a draw!';
        break;
      case 'fire':
        COMMENTARY.textContent = 'You win this one! Nice job.';
        playerScore += 1;
        break;
}
} else if (computerSelection == 'water') {
    switch(playerSelection){
    case 'earth':
      COMMENTARY.textContent ='You win this one! Nice job.';
      playerScore += 1;
      break;
    case 'fire':
      COMMENTARY.textContent = 'Ouch, that must have hurt... You lost this one.';
      computerScore += 1
      break;
    case 'water':
      COMMENTARY.textContent = 'Incredible ! It\'s a draw!';
      break;
  }
}
}

function finalScoring() {
  if (playerScore === 5 && computerScore === 5) {
    GAME_SCORE.textContent = `Score: ${playerScore} vs ${computerScore}`; //update the score
    FINAL_RESULT.textContent = 'It\'s a draw!';
  } else if (playerScore === 5) {
    GAME_SCORE.textContent = `Score: ${playerScore} vs ${computerScore}`; //update the score
    FINAL_RESULT.textContent = 'You won!';
  } else if(computerScore === 5) {
    GAME_SCORE.textContent = `Score: ${playerScore} vs ${computerScore}`; //update the score
    FINAL_RESULT.textContent = 'You lost...';
  } else {
    playRound();
  }
}

RESTART_BUTTON.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  GAME_SCORE.textContent = `Score: ${playerScore} vs ${computerScore}`;
  FINAL_RESULT.style.display = 'none';
})
