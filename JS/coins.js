class Coins{
    constructor(posY) {
      this.node = document.createElement("img");
      this.node.src = "./images/coin.png";
      gameBoxNode.append(this.node);
  
      this.x = gameBoxNode.offsetWidth;
      this.y = posY;
      this.w = 20;
      this.h = 30;
    //   this.speedX = 5;
    //   this.speedY = 5;
  
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.top = `${this.y}px`;
      this.node.style.left = `${this.x}px`;
    }
  
    SmoothMovement = () => {
      this.x -= 5
      this.updatePosition();
    };

    updatePosition = () => {
        this.node.style.left = `${this.x}px`
    }
}