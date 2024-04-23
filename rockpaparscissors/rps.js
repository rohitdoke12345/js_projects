let userscore=0;
let compscore=0;
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscoreparagraph =document.querySelector("#user-score");
const compscoreparagraph = document.querySelector("#comp-score");

const getcompChoice =() =>{
    //rock paper scissors
    const options = ["rock","paper","scissors"];
   const randomind= Math.floor(Math.random()*3);
   return options[randomind];
}

const drawgame = () =>{
  
    msg.innerText=" game was draw. play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner =(userwin,userChoice,compChoice)=>{
     if(userwin)
     {
        userscore++;
        userscoreparagraph.innerText=userscore;
       
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

     }else{
        compscore++;
        compscoreparagraph.innerText=compscore;
        
        msg.innerText = `You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
     }
};

const PlayGame = (userChoice) =>{
    console.log("user choice : " ,userChoice);
    const compChoice =getcompChoice();
    console.log("comp choice :",compChoice);

    if (userChoice==compChoice)
{
    drawgame();
} else {
    let userwin=true;
    if(userChoice ==="rock"){
        userwin = compChoice ==="paper" ? false:true;
    }else if(userChoice ==="paper"){
        userwin = compChoice ==="scissors" ? false:true;
    }else
    {
        userwin = compChoice ==="rock" ? false:true;
    }
    showWinner(userwin,userChoice,compChoice);
}
};


choices.forEach((choice) => {
   
choice.addEventListener("click",() =>{
    const userChoice =choice.getAttribute("id");

    PlayGame(userChoice);
} );

});