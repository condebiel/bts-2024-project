

/**
 * 1 - Rock
 * 2 - Paper
 * 3 - Scissors
 */

// define the variables
const options = {
	1: "Rock",
	2: "Paper",
	3: "Scissors"
}

let playerSelection = 0
let playerWins = 0
let computerSelection = 0
let computerWins = 0

while (playerWins < 3 && computerWins < 3) {
	// get the player selection
	playerSelection = prompt("Enter your choice: 1 - Rock, 2 - Paper or 3 - Scissors")
	playerSelection = parseInt(playerSelection)
	alert("You chose: " + options[playerSelection])

	// get the computer selection
	computerSelection = Math.floor(Math.random() * 3) + 1
	alert("Computer chose: " + options[computerSelection])

	// determine the winner
	if (playerSelection === computerSelection) {
		alert("It's a tie!")
	} else if (playerSelection === 1 && computerSelection === 3) {
		alert("You win!")
		playerWins++
	} else if(playerSelection === 2 && computerSelection === 1) {
		alert("You win!")
		playerWins++
	} else if(playerSelection === 3 && computerSelection === 2) {
		alert("You win!")
		playerWins++
	} else {
		alert("You lose!")
		computerWins++
	}
}