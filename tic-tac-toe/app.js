let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetButton");
let newGame = document.querySelector("#newbutton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        
        if (turnO){
            box.innerText = "O";
            turnO = false;
            count +=1;
        }else{
            box.innerText ="X";
            turnO = true;
            count += 1;
        }
        let boxColor = box;
        if (box.innerText === "O"){
            box.style.color = "Blue";
        }else{
            box.style.color = "green";
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = () =>{
    msg.innerText = "The match is Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }else{
                if(count == 9 && (pos1val !== pos2val || pos1val !== pos2val || pos2val !== pos3val)){
                    //console.log("The match is Draw");
                    showDraw()
                }
            }

        }
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
