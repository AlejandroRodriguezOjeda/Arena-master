const startBtnNode = document.querySelector("#start-btn")
const restartBtnNode = document.querySelector("#restart-btn")
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-Screen")
const gameBoxNode = document.querySelector("#game-Box")
const gameoverScreenNode = document.querySelector("#gameover-screen")
const victoryScreenNode = document.querySelector("#victory-Screen")
const victoryBtnNode = document.querySelector("#restart-btn2")
const backgroundMusic = document.getElementById("backgroundMusic");

let gameObj;
// let isGameOn = falses

function startGame(){
    splashScreenNode.style.display = "none"
    gameScreenNode.style.display = "flex"
    // restartBtnNode.style.display = "none"
    gameoverScreenNode.style.display = "none"
    victoryScreenNode.style.display = "none"
    backgroundMusic.volume = 0.5;
    backgroundMusic.play()

    
    gameObj = new Game() 
    gameObj.startTimer()
    gameObj.timedPassed = 0;
    const highScore = localStorage.getItem("highScore");
    const highScoreDisplay = document.getElementById("high-score")
    highScoreDisplay.textContent = highScore ? highScore : 0
    gameObj.gameLoop()
    // isGameOn = true;
   

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          gameObj.player.isPlayerMovingLeft = true;
        }
    
        if (event.key === "ArrowRight") {
          gameObj.player.isPlayerMovingRight = true;
        }

        if(event.key === "ArrowUp"){
            gameObj.player.isPlayermovingUp = true;
        }

        if(event.key === "ArrowDown"){
            gameObj.player.isPlayermovingDown = true;
        }
      });

      // EventListener para que el movimiento sea mas SMOOOOth
    
      document.addEventListener("keyup", (event) => {
        if (event.key === "ArrowLeft") {
          gameObj.player.isPlayerMovingLeft = false;
        }
    
        if (event.key === "ArrowRight") {
          gameObj.player.isPlayerMovingRight = false;
        }

        if(event.key === "ArrowUp"){
            gameObj.player.isPlayermovingUp = false;
        }

        if(event.key === "ArrowDown"){
            gameObj.player.isPlayermovingDown = false;
        }

        // setInterval(updateTime,1000);
        // requestAnimationFrame(gameObj.gameLoop);

      });

    
}

// function updateTime() {
//   if (gameObj && gameObj.isGameOn) {
//     gameObj.checkIfVictory();
//   }
// }


// event listener de los botones

startBtnNode.addEventListener("click",startGame)
restartBtnNode.addEventListener("click",()=>{
   gameBoxNode.innerHTML = '';
   startGame();
})

victoryBtnNode.addEventListener("click",()=>{
  gameBoxNode.innerHTML = ''
  startGame()
})


volumeControl.addEventListener("input", () => {
  const volume = volumeControl.value;
  backgroundMusic.volume = volume;
});

