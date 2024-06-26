let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn0 = true;

let count = 0;

const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn0) {
            box.innerText = "0";
            box.style.color = "#134F5C";
            turn0 = false;
            count++;
        }
        else{
            box.innerText = "X";
            box.style.color = "#FF9900";
            turn0 = true;
            count++;
        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner = () => { 
    for(let pattern of winPatterns) {
        console.log(
            boxes[pattern[0]].innerText, 
            boxes[pattern[1]].innerText, 
            boxes[pattern[2]].innerText
        );

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
    }
    if(count === 9) {
        // msg1.innerText = "Draw";
        // // msgContainer.classList.remove("hide");
        disableBoxes();
        resetGame();
        
    }
};

const resetGame = () => {   
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
    count = 0;
    
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation!!  Winner is ${winner}`;
    msg.style.color = '#E06666'
    msgContainer.classList.remove("hide")
    disableBoxes();
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

