const startBtnNode = document.querySelector("#start-btn")
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-Screen")
const gameBoxNode = document.querySelector("#game-Box")

let gameObj;
let isGameOn = false

function startGame(){
    splashScreenNode.style.display = "none"
    gameScreenNode.style.display = "flex"

    let gameObj = new Game()
    gameObj.gameLoop()
    isGameOn = true;

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

      });
    
}




startBtnNode.addEventListener("click",startGame)