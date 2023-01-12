let computerRdn
let computerSelection
let playerChoice
let playerSelection
let playerScore = 0
let computerScore = 0

/*game()

function game() {
    for (let i=0; i<5; i++){ // loop the game for 5 rounds, displaying scores at the end
        playRound()
    }
    console.log('That was a tough fight!');
    if (playerScore > computerScore) { // comparing scores, declaring a winner and returning both scores
        console.log(`Congratulations, you won! ${playerScore} points against ${computerScore} points.`)
    } else if (computerScore > playerScore) {
        console.log(`Too bad, you lost this time... ${playerScore} points against ${computerScore} points.`)
    } else if (playerScore == computerScore) {
        console.log(`Unbelievable! You both score ${playerScore} points.`)
    }
    let replay = prompt('Do you want to play again?', 'Yes / No').toLowerCase();
    if (replay == 'yes'){
    game();
    } else {
        console.log('Goodbye')
    }
    }*/


// Complete round, using functions defined later
function playRound() { 
getComputerChoice()
getPlayerChoice()
battle()
}



// OK! randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. Store result in computerSelection
function getComputerChoice() { 
    let computerRdn = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    switch(computerRdn){
        case 1 :
            computerSelection = 'rock';
            break;
        case 2 :
            computerSelection = 'paper';
            break;
        case 3 :
            computerSelection = 'scissors';
            break;
        default : console.log('There was an error.');
    }
}


// OK ! prompt the user to return either 'Rock', 'Paper', 'Scissors'. Store in playerSelection. !! Make it case insensitive !!
function getPlayerChoice() {    
    playerChoice = prompt('Choose your weapon : Rock, Paper or Scissors?', ''); // player's choice
    playerSelection = playerChoice.toLowerCase(); // convert the answer to lowercase
    
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') { // check if answer is valid
    console.log('Get ready to fight !');
    } else {
        alert('Don\'t be a coward ! Choose either Rock, Paper or Scissors.')
        getPlayerChoice();
}
}

// OK! compare computerSelection and playerSelection, add scoring
function battle(){
    if (computerSelection == 'rock'){ // computer chose rock
    switch(playerSelection){
        case 'rock':
            console.log('Incredible ! It\'s a draw!');
            break;
        case 'paper':
            console.log('You win this one! Nice job.')
            playerScore += 1;
            break;
        case 'scissors':
            console.log('Ouch, that must have hurt... You lost this one.')
            computerScore += 1;
            break;
    }

} else if (computerSelection == 'paper'){ // computer chose paper
    switch(playerSelection){
    case 'rock':
        console.log('Ouch, that must have hurt... You lost this one.');
        computerScore += 1
        break;
    case 'paper':
        console.log('Incredible ! It\'s a draw!')
        break;
    case 'scissors':
        console.log('You win this one! Nice job.')
        playerScore += 1;
        break;
}
} else if (computerSelection == 'scissors') { // computer chose scissors
    switch(playerSelection){
    case 'rock':
        console.log('You win this one! Nice job.');
        playerScore += 1;
        break;
    case 'paper':
        console.log('Ouch, that must have hurt... You lost this one.')
        computerScore += 1
        break;
    case 'scissors':
        console.log('Incredible ! It\'s a draw!')
        break;
    }
}
}



