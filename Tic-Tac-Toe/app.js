let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let newgame = document.querySelector(".newGame")


let turnO = true;
let count = 0;


// this 8 win pattren 
const winPattrens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


const resetGame = () => {
    turnO = true
}

boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        if(turnO){
            console.log("box O clicked")
            box.innerText = "O"
            turnO = false;
        }
        else{
            console.log("box X clicked")
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        count++
        console.log(count)


       let iswinner = checkWinner();

       if ( count === 9 && !iswinner){
        gamedraw();
       }
    })
})

const gamedraw = () => {
    msg.innerText = ` Game was Draw`;
    msgcontainer.classList.remove("hide");
    disable();
}

const disable = () => {
    for (let box of boxes){
        box.disabled= true;
    }
}

const enable = () => {
    for (let box of boxes){
        box.disabled= false;
        box.innerText = ""
    }
}

const showWiner = (Winner) => {
    for (let box of boxes) {
        msg.innerText = `congralations , winner of ${Winner}`;
        msgcontainer.classList.remove("hide")
    }
}

const checkWinner = () => {
    for (let pattren of winPattrens){
        let pos1 = boxes [pattren[0]].innerHTML
        let pos2 = boxes [pattren[1]].innerHTML
        let pos3 = boxes [pattren[2]].innerHTML

        


        if(pos1 != "" && pos2!= "" && pos3 != ""){
        if ( pos1 === pos2 && pos2 === pos3){
            showWiner(pos1);
            
        }
    }
    }
}


const reset = () => {
    turnO = true;
    count=0;
    enable();
    msgcontainer.classList.add("hide");
}

newgame.addEventListener("click" , reset);

resetbtn.addEventListener("click" , reset);

