class Player {
    constructor() {
      //variables player
      this.x = 280;
      this.y = 350;
      this.playerSpeed = 10;
    }
  
    handlePlayerMovement(event) {
      switch (event.key) {
        case "ArrowLeft":
          this.x -= this.playerSpeed;
          break;
        case "ArrowRight":
          this.x += this.playerSpeed;
          break;
        case "ArrowUp":
          this.y -= this.playerSpeed;
          break;
        case "ArrowDown":
          this.y += this.playerSpeed;
          break;
      }
      this.updatePlayerPosition();
    }
  
    updatePlayerPosition() {
      playerNode.style.left = `${this.x}px`;
      playerNode.style.top = `${this.y}px`;
    }
  }
  