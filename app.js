console.log("enter your choice\nRock = 1, Paper = 2, Scissors = 3")

function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    
    value = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    if (value == 1) {
        answer = "rock";
    }

    else if (value == 2) {
        answer = "paper";
    }

    else if(value == 3) {
        answer = "sciccors";
    }

    return answer;
 
}


function getHumanChoice(){
    value = prompt("enter your choice\nRock = 1, Paper = 2, Scissors = 3")  

    if (value == 1) {
        answer = "rock";
    }

    else if (value == 2) {
        answer = "paper";
    }

    else if(value == 3) {
        answer = "sciccors";
    }

    return answer;

}


let humanScore = 0;
let computerScore =0;

function playRound(humanChoice, computerChoice) {
      
    if (humanChoice === computerChoice) {
        console.log("Its a tie!")
    }

 else if (humanChoice === "rock" && computerChoice === "sciccors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "sciccors" && computerChoice === "paper"){
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    humanScore++
 }

 else if (computerChoice === "rock" && humanChoice === "sciccors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "sciccors" && humanChoice === "paper"){
    
    console.log(`You Loose1! ${computerChoice} beats ${humanChoice}.`)
    computerScore++
 }
}

for (let i = 0; i < 5; i++) {
    
    let userChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(userChoice, computerChoice)
}


console.log(`Your Score ${humanScore}`)
console.log(`Computer Score ${computerScore}`)