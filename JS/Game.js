class Game {
  constructor() {
    this.player = new Player();
    this.enemy = new Enemy();
    this.enemy2 = new Enemy2();
    this.player.coinsCollected = 0;

    this.timer = 0;
    this.frecuenciaMin = 20;
    this.frecuenciaMax = 80;

    this.timedPassed = 0;
    this.timeLimit = 60000;
    this.intervalID = null;

    //los arrays de flechas y monedas
    this.arrowArr = [];
    this.arrowArr2 = [];
    this.coinsArr = [];

    this.frames = 0;
    this.isGameOn = true;
    this.PreviousGame = null;

    this.timerDisplay = document.getElementById("timer"); //para mostrar el timer
  }

  //Aqui como actualizar el high score

  UpdateHighScore = () => {
    const currentScore = this.player.coinsCollected;
    let highScore = localStorage.getItem("highScore");

    if (!highScore || currentScore > highScore) {
      localStorage.setItem("highScore", currentScore);
      highScore = currentScore;
    }

    const highScoreDisplay = document.getElementById("high-score");
    highScoreDisplay.textContent = highScore;
  };

  //pantalla de Game over

  gameOver = () => {
    this.isGameOn = false;
    this.stopTime();

    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "flex";
  };

  // pantalla de victoria :)

  showVictory = () => {
    this.isGameOn = false;
    this.stopTime();
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "none";
    victoryScreenNode.style.display = "flex";
  };

  // checkea si se ha ganado

  checkIfVictory = () => {
    if (this.timedPassed >= this.timeLimit) {
      this.showVictory();
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
      //Con esto es que pude implementar lo de que segun pase el tiempo vayan mas rapido
      this.frecuenciaMax - Math.floor(this.timer / 60),
      this.frecuenciaMin
    );
    if (this.arrowArr.length === 0 || this.frames % frecuenciaArrow === 0) {
      let nuevaArrow = new Arrow();
      nuevaArrow.updatePosition(
        this.enemy.x + this.enemy.w / 2 - nuevaArrow.w / 2,
        this.enemy.x
      );
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

        this.player.coinsCollected++;
      }
    });

    this.UpdateHighScore();
  };

  // borrar coins si salen de la pantalla

  coinsDesaparecen = () => {
    if (this.coinsArr[0] < -900) {
      this.coinsArr[0].node.remove();
      this.coinsArr.shift();
    }
  };

  // Aqui la colision de la flecha con el jugador

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

  //AQUI el timer del juego

  startTimer = () => {
    //el timer ira tickeando hacia abajo hasta llegar a 0, entonces haciendo que ganes la partida
    this.timedPassed = 0;
    this.timerInterval = setInterval(() => {
      this.timedPassed += 1000;
      const remainingSeconds = Math.max(
        0,
        Math.ceil((this.timeLimit - this.timedPassed) / 1000)
      );

      const minutes = String(Math.floor(remainingSeconds / 60)).padStart(
        2,
        "0"
      );
      const seconds = String(remainingSeconds % 60).padStart(2, "0");
      const formattedTime = `${minutes}:${seconds}`;

      // Updatea el timer
      this.timerDisplay.textContent = formattedTime;
    }, 1000);
  };

  stopTime = () => {
    clearInterval(this.intervalID);
    clearInterval(this.timerInterval);
  };

  //El gameloop

  gameLoop = () => {
    this.frames++;
    this.timer++;

    this.player.updatePosition();
    this.enemy.enemyMovement();
    this.enemy2.enemy2Movement();
    this.collisionPlayerWithEnemy();

    this.collisionFloor();

    this.arrowsAparecen();
    this.arrowsDesaparecen();
    this.arrowsAparecen2();
    this.arrowsDesaparecen2();
    this.collisionArrowWithPLayer();
    this.collisionArrowWithPLayer2();
    this.checkIfVictory();

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
