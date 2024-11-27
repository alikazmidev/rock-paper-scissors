let userInput = prompt("What is your age?");

let result; 


// This Function Returns a random rounded number between the input range
function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

let rock = 1;
let paper = 2;
let scissors = 3;
let ComputerChoice = getComputerChoice(1,3);

if (ComputerChoice == rock){
    console.log("Woah You got a rock there!");
}

else if (ComputerChoice == paper){
    console.log("Woah You got a Paper there!");
}

else if (ComputerChoice == scissors){
    console.log("Woah You got a scissors there!");
}

else {
    console.log("Invalid Input")
}




  




