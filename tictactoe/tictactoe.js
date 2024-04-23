let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true;
const winpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];
const resetgame = () =>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turnO)
        {
            box.innerText ="O";
            turnO = false;
        }else 
        {
            box.innerText = "X";
            turnO =true;
        }
        box.disabled =true;
        checkwinner();
    });
});
const disableboxes = () =>{
    for (let box of boxes)
    {
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for (let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkwinner = () => {
    for (let pattern of winpattern)
    {
        let post1val=boxes[pattern[0]].innerText;
        let post2val=boxes[pattern[1]].innerText;
        let post3val=boxes[pattern[2]].innerText;
        if (post1val !="" && post2val !="" && post3val !="")
        {
            if(post1val ===post2val && post2val===post3val)
            {
                console.log("winner",post1val);
                showwinner(post1val);
            }
        }
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);