class Game {
  constructor() {
    this.player = new Player();
    this.enemy = new Enemy();
    this.enemy2 = new Enemy()
    // this.arrow = new Arrow();

    this.arrowArr = [];
    // this.resetGame()

    this.frames = 0;
    this.isGameOn = true;
    this.PreviousGame = null;
  }
  //pantalla de Game over
  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "flex";
  };

  //collision del jugador con el suelo Y el techo para tener un game over

  collisionFloor = () => {
    if (this.player.y + this.player.h > gameBoxNode.offsetHeight) {
      console.log("why would you go to this wall");
      this.gameOver();
    } else if (this.player.y <= 0) {
      console.log("you hit the top!");
      this.gameOver();
    }
  };

  //collision del player con el

  collisionPlayerWithEnemy = () => {
    if (
      this.player.x < this.enemy.x + this.enemy.w &&
      this.player.x + this.player.w > this.enemy.x &&
      this.player.y < this.enemy.y + this.enemy.h &&
      this.player.y + this.player.h > this.enemy.y
    ) {
      this.gameOver();
    }
  };
 // borra flechas despues de que salgan de la pantalla
  arrowsDesaparecen = () => {
    if (this.arrowArr[0].y > 900) {
      this.arrowArr[0].node.remove();
      this.arrowArr.shift();
    }
  };
//donde se spawnean las flechas
  arrowsAparecen = () => {
    if (this.arrowArr.length === 0 || this.frames % 120 === 0) {
      
      let nuevaArrow = new Arrow();
      nuevaArrow.updatePosition(this.enemy.x + this.enemy.w / 2 - nuevaArrow.w / 2);
      
      this.arrowArr.push(nuevaArrow);

      console.log(this.arrowArr);
    }
  };

  collisionArrowWithPLayer = () => {
    this.arrowArr.forEach((cadaArrow) =>{
    if (
      this.player.x < cadaArrow.x + cadaArrow.w &&
      this.player.x + this.player.w > cadaArrow.x &&
      this.player.y < cadaArrow.y + cadaArrow.h &&
      this.player.y + this.player.h > cadaArrow.y
    ) {
      this.gameOver();
    }
  })

  }

  gameLoop = () => {
    this.frames++;

    this.player.updatePosition();
    this.enemy.enemyMovement();
    this.collisionFloor();
    this.collisionPlayerWithEnemy();
    // this.shootArrow();
    this.arrowsAparecen();
    this.arrowsDesaparecen();
    this.collisionArrowWithPLayer();

    this.arrowArr.forEach((eachArrow) => {
      eachArrow.SmoothMovement();
    });

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
