const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  // Cheatcode BOMB included
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
    return userInput
  }
  else{
    console.log('Invalid input')
  }
}

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'It\'s a tie!';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Sorry, computer has won...';
    }
    else {
      return 'Congratulation, you won!';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Sorry, computer has won...';
    }
    else {
      return 'Congratulations, you won!';
    }
  }

  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Sorry, computer has won...';
    }
    else {
      return 'Congratulations, you won!';
    }
  }
  // Cheatcode BOMB activation
  if(userChoice === 'bomb'){
    return 'Congratulation, you win';
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('Your choice: ' + userChoice);
  console.log('Ccomputer choice ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};


playGame();




