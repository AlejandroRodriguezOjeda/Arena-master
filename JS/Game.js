class Game {
  constructor() {
    this.player = new Player();
    this.enemy = new Enemy();
    this.enemy2 = new Enemy2();
  
    this.arrowArr = [];
    this.arrowArr2 = [];
    
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

  //collision del player con el enemigo

  collisionPlayerWithEnemy = () => {
    if (
      this.player.x < this.enemy.x + this.enemy.w &&
      this.player.x + this.player.w > this.enemy.x &&
      this.player.y < this.enemy.y + this.enemy.h &&
      this.player.y + this.player.h > this.enemy.y
    ) {
      this.gameOver();
    }

    if (
      this.player.x < this.enemy2.x + this.enemy2.w &&
      this.player.x + this.player.w > this.enemy2.x &&
      this.player.y < this.enemy2.y + this.enemy2.h &&
      this.player.y + this.player.h > this.enemy2.y
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

  arrowsDesaparecen2 = () => {
    if (this.arrowArr2[0].y < -900) {
      this.arrowArr2[0].node.remove();
      this.arrowArr2.shift();
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

  arrowsAparecen2 = () => {
    if (this.arrowArr2.length === 0 || this.frames % 120 === 0) {
      let nuevaArrow2 = new Arrow2();
      
      nuevaArrow2.updatePosition2(this.enemy2.x + this.enemy2.w / 2 - nuevaArrow2.w / 2);
      
      nuevaArrow2.speedY = -5; // Adjust this value for the desired arrow speed
      
      this.arrowArr2.push(nuevaArrow2);
      console.log(this.arrowArr2);
    }
  }




  // Aqui la colision de la flecha con el jugador

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
    console.log("me has dao")
  })

  }


  gameLoop = () => {
    this.frames++;

    this.player.updatePosition();
    this.enemy.enemyMovement();
    this.collisionFloor();
    this.collisionPlayerWithEnemy();
    this.arrowsAparecen();
    this.arrowsDesaparecen();
     this.arrowsAparecen2()
    this.arrowsDesaparecen2()
    this.collisionArrowWithPLayer();
    
    this.enemy2.enemy2Movement();
   

    this.arrowArr.forEach((cadaArrow) => {
      cadaArrow.SmoothMovement();
    });

    this.arrowArr2.forEach((cadaArrow2) => {
      cadaArrow2.SmoothMovement()
    })

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
