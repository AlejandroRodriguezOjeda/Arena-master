class Game {
  constructor() {
    this.player = new Player();
    this.enemy = new Enemy();
    this.enemy2 = new Enemy2();

    this.timer = 0;
    this.frecuenciaMin = 20;
    this.frecuenciaMax = 120;

    this.timedPassed = 0;
    this.timeLimit = 60000;
    this.intervalID = null;

    this.arrowArr = [];
    this.arrowArr2 = [];

    this.coinsArr = [];

    this.frames = 0;
    this.isGameOn = true;
    this.PreviousGame = null;

    this.timerDisplay = document.getElementById("timer");
  }
  //pantalla de Game over

  gameOver = () => {
    this.isGameOn = false;
    this.stopTime()

    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "flex";
  };

  // pantalla de victoria :)

  showVictory = () =>{
    this.isGameOn = false;
    this.stopTime()
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "none";
    victoryScreenNode.style.display = "flex";
  };
  

  checkIfVictory = () => {
    if (this.timedPassed >= this.timeLimit) {
      this.showVictory()
    }
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
    if (this.arrowArr[0] > 900) {
      this.arrowArr[0].node.remove();
      this.arrowArr.shift();
    }
  };

  arrowsDesaparecen2 = () => {
    if (this.arrowArr2[0] < -900) {
      this.arrowArr2[0].node.remove();
      this.arrowArr2.shift();
    }
  };

  //donde se spawnean las flechas

  arrowsAparecen = () => {
    let frecuenciaArrow = Math.max(
      this.frecuenciaMax - Math.floor(this.timer / 60),
      this.frecuenciaMin
    );
    if (this.arrowArr.length === 0 || this.frames % frecuenciaArrow === 0) {
      let nuevaArrow = new Arrow();
      nuevaArrow.updatePosition(this.enemy.x + this.enemy.w / 2 - nuevaArrow.w / 2,this.enemy.x);
      this.arrowArr.push(nuevaArrow);
    }
  };

  arrowsAparecen2 = () => {
    let frecuenciaArrow = Math.max(
      this.frecuenciaMax - Math.floor(this.timer / 60),
      this.frecuenciaMin
    );
    if (this.arrowArr2.length === 0 || this.frames % frecuenciaArrow === 0) {
      let nuevaArrow2 = new Arrow2();

      nuevaArrow2.updatePosition2(
        this.enemy2.x + this.enemy2.w / 2 - nuevaArrow2.w / 2
      );

      // nuevaArrow2.speedY = -5; // Aqui el valor de la velocidad de las arrows

      this.arrowArr2.push(nuevaArrow2);
    }
  };

  //Monedas para pillar

  coinsAparecen = () => {
    if (this.coinsArr.length === 0 || this.frames % 120 === 0) {
      let randomPositionY = Math.floor(Math.random() * 800);

      let newCoin = new Coins(randomPositionY, true);
      this.coinsArr.push(newCoin);
    }
  };
  //collision de monedas con jugador
  collisionCoinswWithPLayer = () => {
    this.coinsArr.forEach((cadaCoin, index) => {
      if (
        this.player.x < cadaCoin.x + cadaCoin.w &&
        this.player.x + this.player.w > cadaCoin.x &&
        this.player.y < cadaCoin.y + cadaCoin.h &&
        this.player.y + this.player.h > cadaCoin.y
      ) {
        this.coinsArr.splice(index, 1);

        cadaCoin.node.remove();
      }
      
    });
  };

  // borrar coins si salen de la pantalla

  coinsDesaparecen = () => {
    if (this.coinsArr[0] < -900) {
      this.coinsArr[0].node.remove();
      this.coinsArr.shift();
    }
  }

  // Aqui la colision de la flecha con el jugador ==== AUNQUE  no me estan colisionando bien con el objeto

  collisionArrowWithPLayer = () => {
    this.arrowArr.forEach((cadaArrow) => {
      if (
        this.player.x < cadaArrow.x + cadaArrow.w &&
        this.player.x + this.player.w > cadaArrow.x &&
        this.player.y < cadaArrow.y + cadaArrow.h &&
        this.player.y + this.player.h > cadaArrow.y
      ) {
        this.gameOver();
      }
    });
  };
  



  collisionArrowWithPLayer2 = () => {
    this.arrowArr2.forEach((cadaArrow2) => {
      if (
        this.player.x < cadaArrow2.x + cadaArrow2.w &&
        this.player.x + this.player.w > cadaArrow2.x &&
        this.player.y < cadaArrow2.y + cadaArrow2.h &&
        this.player.y + this.player.h > cadaArrow2.y
      ) {
        this.gameOver();
      }
    });
  };

  //AQUI el timer

  startTimer = () => {
    this.timedPassed = 0;
    this.timerInterval = setInterval(() => {
      this.timedPassed += 1000;

      // Calculate remaining time in seconds
      const remainingSeconds = Math.max(0, Math.ceil((this.timeLimit - this.timedPassed) / 1000));

      // Format the remaining time as "mm:ss"
      const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
      const seconds = String(remainingSeconds % 60).padStart(2, '0');
      const formattedTime = `${minutes}:${seconds}`;

      // Update the timer display element
      this.timerDisplay.textContent = formattedTime;

    }, 1000);
  };

  stopTime = () =>{
    clearInterval(this.timerInterval)
  }

  gameLoop = () => {
    this.frames++;
    this.timer--;

    // Add this line to start the timer when the game starts

    this.player.updatePosition();
    this.enemy.enemyMovement();
    this.collisionFloor();
    this.collisionPlayerWithEnemy();
    this.arrowsAparecen();
    this.arrowsDesaparecen();
    this.arrowsAparecen2();
    this.arrowsDesaparecen2();
    this.collisionArrowWithPLayer();
    this.collisionArrowWithPLayer2();
    this.checkIfVictory();
    this.enemy2.enemy2Movement();
    this.coinsAparecen();
    this.collisionCoinswWithPLayer();
    this.coinsDesaparecen();


    if (this.remainingTime <= 0) {
      this.isGameOver = true;
      this.showVictory();
    }

    this.arrowArr.forEach((cadaArrow) => {
      cadaArrow.SmoothMovement();
    });

    this.arrowArr2.forEach((cadaArrow2) => {
      cadaArrow2.SmoothMovement();
    });

    this.coinsArr.forEach((cadaCoin) => {
      cadaCoin.SmoothMovement();
    });

  

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
