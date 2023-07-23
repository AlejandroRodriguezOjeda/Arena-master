class Game {
    constructor() {
      this.player = new Player();
      this.frames = 0;
      this.isGameOn = true;
    }
  
    gameOver() {
      this.isGameOn = false;
    }
  
    gameLoop() {
      this.frames++;
      this.player.updatePlayerPosition();
  
      if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop.bind(this));
      }
    }
  }
  
  const gameObj = new Game();
  