function computerPlay() {
    let computer = Math.floor(Math.random()*3)+1;
    let answer;
    if (computer == 1) {
        answer = "Rock";
    } else if (computer == 2) {
        answer = "Paper";
    } else {
        answer = "Scissors";
    }
    console.log(computer);
    console.log(answer);
    return answer;
}

function casify(word) {
    first = word[0].toUpperCase();
    second = word.substring(1).toLowerCase();
    return first + second;
}

function play(playerSelection, computerSelection) {
    playerSelection = casify(playerSelection);
    computerSelection = casify(computerSelection);
    if (playerSelection == computerSelection) {
        return "Tied! You chose the same as the computer"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;
    result = play(prompt("What would you like to play?"), computerPlay());
    console.log(result);
    result = result.split("!")[0];
    if (result == "You Win") {
        humanScore++;
    } else if (result == "You Lose") {
        computerScore++;
    }
    console.log(humanScore)
    console.log(computerScore)
}

function updateScore(result) {
    if (result == "You Win") {
        humanScore++;
    } else if (result == "You Lose") {
        computerScore++;
    }
    console.log(humanScore)
    console.log(computerScore)
    const results = document.querySelector(".results");
    results.innerText = `Your score is: ${humanScore} \n
        The computer's score is: ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let humanScore = 0;
        let computerScore = 0;
        console.log(button.textContent);
        result = play(button.textContent, computerPlay());
        console.log(result);
        result = result.split("!")[0];
        updateScore(result);
    })
})
