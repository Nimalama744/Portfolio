
const choices = ["rock","paper", "scissors"];
const p1 = document.getElementById("p1");
const pc = document.getElementById("pc");
const resultDisplay = document.getElementById("resultDisplay");
const pScoreDisplay = document.getElementById("pScoreDisplay");
const pcScoreDisplay = document.getElementById("pcScoreDisplay")

let playerScore = 0;
let computerScore = 0;


function playGame(pchoice){

    const pcchoice = choices[Math.floor(Math.random() *3)];
    let result ="";

    if (pchoice === pcchoice){
        result ="Its a TIE!";
    }
    else{
        switch(pchoice){
            case "rock":
                result = (pcchoice === "scissors") ?  "Player Wins" : "Computer Wins";
                break;

            case "paper":
                result = (pcchoice === "rock") ?  "Player Wins" : "Computer Wins";  
                break;
                
            case "scissors":
                result = (pcchoice === "paper") ?  "Player Wins" : "Computer Wins";
                break;
        }
    }
    p1.textContent = `Player : ${pchoice}`;
    pc.textContent = `Computer : ${pcchoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext");

    switch (result){
        case "Player Wins":
            resultDisplay.classList.add("greentext");
            playerScore++;
            pScoreDisplay.textContent = playerScore;
            break;
        case "Computer Wins":
            resultDisplay.classList.add("redtext");
            computerScore++;
            pcScoreDisplay.textContent = computerScore;
            break;    
    }
    
}
