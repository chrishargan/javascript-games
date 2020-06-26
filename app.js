

const game = () => {
    let pScore = 0;
    let cScore = 0;

    // starts the game

    //Play match 
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        //computers move
        const computerOptions = ["rock", "paper", "scissors", "spock", "lizard"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                // computer choice
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];

                // Here is where we call the compareHands function
                compareHands(this.textContent, computerChoice);

                // Update images
                playerHand.src = `/assets/${this.textContent}.png`;
                computerHand.src = `/assets/${computerChoice}.png`;
                // Animation 
                playerHand.style.animation = "shakePlayer 0.5s ease";
                computerHand.style.animation = "shakeComputer 0.5s ease";


                setTimeout(() => {

                    // Here is where we call the compareHands function
                    compareHands(this.textContent, computerChoice);
                }, 2000);

            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }



    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        // checking for a draw
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a draw!";
            return;
        }
        //check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "You Win!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You lose!";
                cScore++;
                updateScore();
                return;
            }
        }
        // check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "You Lose!";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You Win!";
                pScore++;
                updateScore();
                return;
            }
        }
        // check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "You Win!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You lose!";
                cScore++;
                updateScore();
                return;
            }
        }

    };

    // this then calls all the inner functions

    playMatch();



};


// start the game function 

game();