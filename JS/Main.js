const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-Screen");
const gameBoxNode = document.querySelector("#game-Box");
const gameoverScreenNode = document.querySelector("#gameover-screen");
const victoryScreenNode = document.querySelector("#victory-Screen");
const victoryBtnNode = document.querySelector("#restart-btn2");
const backgroundMusic = document.getElementById("backgroundMusic");

let gameObj;

function startGame() {
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  gameoverScreenNode.style.display = "none";
  victoryScreenNode.style.display = "none";
  backgroundMusic.volume = 0.5;
  backgroundMusic.play();

  gameObj = new Game();
  gameObj.startTimer();
  gameObj.timedPassed = 0;
  const highScore = localStorage.getItem("highScore");
  const highScoreDisplay = document.getElementById("high-score"); //Esto de aca es para que actualizara el contador de highscore en el local storage
  highScoreDisplay.textContent = highScore ? highScore : 0;
  gameObj.gameLoop();

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      gameObj.player.isPlayerMovingLeft = true;
    }

    if (event.key === "ArrowRight") {
      gameObj.player.isPlayerMovingRight = true;
    }

    if (event.key === "ArrowUp") {
      gameObj.player.isPlayermovingUp = true;
    }

    if (event.key === "ArrowDown") {
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

    if (event.key === "ArrowUp") {
      gameObj.player.isPlayermovingUp = false;
    }

    if (event.key === "ArrowDown") {
      gameObj.player.isPlayermovingDown = false;
    }
  });
}

// event listener de los botones

startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", () => {
  gameBoxNode.innerHTML = "";
  startGame();
});

victoryBtnNode.addEventListener("click", () => {
  gameBoxNode.innerHTML = "";
  startGame();
});
