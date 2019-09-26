const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //Options
        const computerOptions = ['rock', 'paper', 'scissors'];


        options.forEach(option => {
            option.addEventListener('click', function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];


                //Call compareHands function
                compareHands(this.textContent, computerChoice);

                //Display chosen hands
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            })
        })
    };


    //Update score function
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return;
        }
        //Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
        }
    }



    // Call all inner functions
    startGame();
    playMatch();
}

// start the game function
game();