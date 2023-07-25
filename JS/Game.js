class Game {
  constructor() {
    this.player = new Player();
    this.enemy = new Enemy();
    this.Arrow
    // this.resetGame()

    this.isGameOn = true;
    this.PreviousGame = null;
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "flex";
  };


  //Me estaba complicando mucho cuando en realidad podia hacer un innerHTML xDDDDDDD

  // resetGame = () => {
  //   this.isGameOn = true;
  //   this.player = new Player();
  //   this.enemy = new Enemy();
  //   gameBoxNode.innerHTML = '';
  //   gameoverScreenNode.style.display = "none";
  //   gameScreenNode.style.display = "flex";
  //   this.gameLoop();

  //   if(this.PreviousGame !== null){
  //     cancelAnimationFrame(this.PreviousGame);
  //   }

  //   this.PreviousGame = requestAnimationFrame(this.gameLoop);
  // };

  collisionFloor = () => {
    if (this.player.y + this.player.h > gameBoxNode.offsetHeight) {
      console.log("why would you go to this wall");
      this.gameOver();
    } else if (this.player.y <= 0) {
      console.log("you hit the top!");
      this.gameOver();
    }
  };

//   restartGame = () => {
// this.resetGame()
//   };

  gameLoop = () => {
    // this.player.playerMovement();
    this.player.updatePosition();
    this.enemy.enemyMovement();
    this.collisionFloor();
    // this.enemy.shootArrows()
    
    

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
