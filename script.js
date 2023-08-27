let turn_sound = new Audio("Resources/audio/click sound.wav");
let victorySound = new Audio("Resources/audio/32ZKM7V-victory-bonus.mp3")
let turn = "X";
let gameOver = false;

let turnchange = () => {
    return turn === "X" ? "O" : "X";
};

let isWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach((e) => {
        console.log(boxtexts[e[1]].innerText)
        if (
            (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[0]].innerText !== "")
        ) {
            gameOver = true;
            document.querySelector(".info").innerText = `${boxtexts[e[0]].innerText
                } won the game`;
                victorySound.play();
                clickArea.forEach((Element)=>{
                    
                })
            
        }
    });
};


let clickArea = document.querySelectorAll(".box");
clickArea.forEach((Element) => {
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = turnchange();
            if (!gameOver) {

                document.querySelector(".info").innerText = `Turn for ${turn}`;
            }
            isWin();
        }
        turn_sound.play();
    });
});

let resetButton = document.querySelector("button");
resetButton.addEventListener("click", ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach((Element)=>{
        Element.innerText="";
        document.querySelector(".info").innerText = `Turn for ${turn}`;
        gameOver=false;

    })
})


