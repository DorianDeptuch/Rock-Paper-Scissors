//To-Do: Make variable for post-game. 
// For some reason, the increment won't work with the variable.
// increment also won't work when trying to turn words.textContent into a variable.




    let playerSelect;
    let playerSelection = '';
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

    
    

    function computerPlay() {
        let selection = Math.random().toFixed(2);
        // console.log('------>: computerPlay -> selection', selection);
        if (selection >= 0.66) {
            computerSelection = "Rock";
        } else if (selection >= 0.33 && selection < 0.66) {
            computerSelection = "Paper";
        } else {
            computerSelection = "Scissors";
        }
        
    }

    function singleRound(playerSelection, computerSelection) {
        // console.log('------>: singleRound -> computerSelection', computerSelection);
        // console.log('------>: singleRound -> playerSelection', playerSelection);
        
            
            if (playerSelection == "Rock" && computerSelection == "Rock") {
                words.textContent = (
                    "It's a Tie.\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

            } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
                playerScore++;
                score();
                words.textContent = (
                    "You Win!\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

            } else if (playerSelection == "Rock" && computerSelection == "Paper") {
                computerScore++;
                score();
                words.textContent = (
                    "You Lose!\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

            } else if (playerSelection == "Paper" && computerSelection == "Rock") {
                playerScore++;
                score();
                words.textContent = (
                    "You Win!\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

            } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
                computerScore++;
                score();
                words.textContent = (
                    "You Lose.\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

            } else if (playerSelection == "Paper" && computerSelection == "Paper") {
                words.textContent = (
                    "It's a Tie.\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

            } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
                computerScore++;
                score();
                words.textContent = (
                    "You Lose.\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

            } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
                words.textContent = (
                    "It's a Tie.\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

            } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
                playerScore++;
                score();
                words.textContent = (
                    "You Win!\n" +
                    ` You chose ${playerSelection} and the computer chose ${computerSelection}\n`
                );
                textAndAppend();

        }
    }

function score() {
    if (playerScore == 5) {
        finalScore.textContent = (
            "YOU HAVE WON THE GAME"
        );
        finalScore.classList.add('green');
        imagesContainer.appendChild(finalScore);
        buttons.removeChild(rockButton);
        buttons.removeChild(paperButton);
        buttons.removeChild(scissorsButton);
    } else if (computerScore == 5) {
        finalScore.textContent = (
            "YOU HAVE LOST THE GAME"
        );
        finalScore.classList.add('red');
        imagesContainer.appendChild(finalScore);
        buttons.removeChild(rockButton);
        buttons.removeChild(paperButton);
        buttons.removeChild(scissorsButton);
    }
}

function rockSelection(){
    playerSelection = "Rock";
    computerPlay(); 
    singleRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
}

function paperSelection(){
    playerSelection = "Paper";
    computerPlay();
    singleRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
}

function scissorsSelection(){
    playerSelection = "Scissors";
    computerPlay();
    singleRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
}
function textAndAppend(){
    playerTotal.textContent = `${playerScore}`;
    computerTotal.textContent = `${computerScore}`;
    wordingContainer.appendChild(words);
    playerBox.appendChild(playerScore);
    computerBox.appendChild(computerScore);
}

// THIS DOESNT WORK FOR SOME REASON
// function wonGame(){
//     innerShell.innerHTML = <p style="color: green; font-size: 100px; font-family: 'Galada';">YOU HAVE WON THE GAME!!!</p>
//     outerShell.appendChild(innerShell);
//     // innerShell.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zS1cLOIxsQ8?start=16" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//     // outerShell.appendChild(innerShell);
// }

// function lostGame(){
//     innerShell.innerHTML = <p style="color: red; font-size: 100px; font-family: 'Galada';">YOU HAVE LOST THE GAME!!!</p>
//     outerShell.appendChild(innerShell);
//     // innerShell.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/02-QOC9hNO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//     // outerShell.appendChild(innerShell);
// }


const rockButton = document.querySelector('#rock');   
rockButton.onclick = rockSelection;

const paperButton = document.querySelector('#paper');
paperButton.onclick = paperSelection;

const scissorsButton = document.querySelector('#scissors');
scissorsButton.onclick = scissorsSelection;   

computerSelection = computerPlay()

const outerShell = document.querySelector('#outer-shell');
const innerShell = document.querySelector('#inner-shell');

const wordingContainer = document.querySelector('#wording-container');
const words = document.querySelector('#words');

const buttons = document.querySelector('#buttons');

const imagesContainer = document.querySelector('#images-container');


const playerBox = document.querySelector('#playerBox');
const playerTotal = document.querySelector('#playerScore');

const computerBox = document.querySelector('#computerBox');
const computerTotal = document.querySelector('#computerScore');

const finalScore = document.querySelector('#finalScore');

// console.log(singleRound(playerSelection, computerSelection));

