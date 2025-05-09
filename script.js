console.log("Welcome to Tic Tac Toe")

let reset = document.getElementById('reset');
let turn = "X";
let isGameOver = false;

//Function to change the turn

const changeTurn =()=>{
    return turn === "X"?"0" : "X";
}

//Function to check for a Win

const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]

    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON";
            isGameOver = true;
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    }); 
}


let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element =>{
        element.innerText = "";
        document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "0";
        turn = "X";
        isGameOver = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.line').style.width = "0";
    })
})