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



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, ComputerChoice) {
    let i = 0;
    let humanScore = 0;
    let computerScore = 0;


}