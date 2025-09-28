let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg") ;
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#computer-score");

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText = `You Win! ${userchoice} beats computer ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText = `You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const drawgame=()=>{
    msg.innerText = "Game was draw! Play Again";
    msg.style.backgroundColor = "#081b31";
}
const gencompchoice=()=>{
    const options = ['rock','paper','scissor'];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const playGame=(userchoice)=>{
    let compchoice = gencompchoice();
    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if (userchoice === "rock"){
            userwin=compchoice == "paper" ? false:true;
        }
        else if(userchoice === "paper"){
            userwin=compchoice == "scissor" ? false:true;
        }
        else{
            userwin=compchoice == "rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice);

    }
}
const chosenaction=(choice)=>{
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
}
const action=(choice)=>{
    choice.addEventListener('click',()=>chosenaction(choice))
}
choices.forEach(action);