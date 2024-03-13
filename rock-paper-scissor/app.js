let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreUpdate = document.querySelector("#user-score");
const compScoreUpdate = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    //console.log("The game was draw");
    msg.innerText = "The game was draw. Play Again!";
    msg.style.backgroundColor = "#138ac1";
};

const showWinner = (userWin,compChoice,userChoice) =>{
    if(userWin){
        //console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore += 1;
        console.log("User Score = ", userScore);
        userScoreUpdate.innerText = userScore;
    }else{
        //console.log("You Lose");
        msg.innerText = `You Lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore += 1;
        console.log("Computer Score = ",compScore);
        compScoreUpdate.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if (userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === "rock"){
            //comp will have either paper or scissor
            userWin = compChoice === "paper"? false : true;

        }else if(userChoice === "paper"){
            //comp will have either rock or scissor
            userWin = compChoice === "scissor"? false : true;

        }else{
            //comp will have either paper or rock
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});